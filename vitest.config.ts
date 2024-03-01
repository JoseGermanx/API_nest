import type { UserConfigExport } from 'vitest/config';

export default {
	test: {
		coverage: {
			include: ['src/**/*.{ts,cts,mts}', 'vite/client'],
			exclude: ['src/main.ts', '**/*.d.ts'],
			reporter: ['lcov', 'text'],
		},
		reporters: ['verbose'],
	},
} satisfies UserConfigExport;
