import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  "compilerOptions": {
    "strict": true,
    "esModuleInterop": true,
    "lib": ["dom", "dom.iterable", "esnext"],
    "skipLibCheck": true
  }
}

export default nextConfig;
