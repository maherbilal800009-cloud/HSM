// Production API calls stay on the dashboard origin and are proxied by Netlify.
// Local development can still target an API supplied through VITE_API_URL.
export const API_URL = import.meta.env.PROD
  ? ""
  : import.meta.env.VITE_API_URL || "";
