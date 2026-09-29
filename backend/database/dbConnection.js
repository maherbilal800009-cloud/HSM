import mongoose from "mongoose";

// Cache connection state for Vercel/serverless environments
let isConnected = false;

export const dbConnection = async () => {
  // 1. Explicit database name inside the URI string
  const mongoURI = "mongodb://muzammilirshad123456_db_user:zhOgKz3JamWEDQPe@ac-kdsraje-shard-00-00.kyz4kv5.mongodb.net:27017,ac-kdsraje-shard-00-01.kyz4kv5.mongodb.net:27017,ac-kdsraje-shard-00-02.kyz4kv5.mongodb.net:27017/hmsDB?ssl=true&replicaSet=atlas-urukp2-shard-0&authSource=admin&appName=Cluster0";

  if (isConnected) {
    console.log("Using existing database connection");
    return;
  }

  try {
    const db = await mongoose.connect(mongoURI, {
      dbName: "hmsDB",
      serverSelectionTimeoutMS: 5000, // Fail quickly if credentials are wrong
    });
    
    isConnected = db.connections.readyState;
    console.log("Connected to database!");
  } catch (err) {
    console.log("Some error occurred while connecting to database:", err.message);
    throw err;
  }
};