import { STEPS } from "@/config/step";
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
	compilerOptions: {
		strict: true,
		esModuleInterop: true,
		lib: ['dom', 'dom.iterable', 'esnext'],
		skipLibCheck: true,
	},
	eslint: {
		ignoreDuringBuilds: true,
	},
	images: {
		disableStaticImages: true,
	},
  async redirects() {
    return [
      {
        source: '/add-card-object',
        destination: STEPS[0],
        permanent: false,
      }
    ]
  }
}

export default nextConfig;
