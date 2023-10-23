import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
    const env = loadEnv(mode, process.cwd(), "");
    const API_BASE_URL = env.INTRANET_API_URL;
    console.log(API_BASE_URL);
    return {
        plugins: [react()],
        server: {
            host: true,
            port: 8000,
            watch: {
                usePolling: true
            }
        }
    };
});
