import type { UserConfigExport } from 'vite';
import swc from 'unplugin-swc';

export default {
	plugins: [swc.vite()],
} satisfies UserConfigExport;
