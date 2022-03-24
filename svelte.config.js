import adapter from "@sveltejs/adapter-static";
import { windi } from "svelte-windicss-preprocess";
import preprocess from 'svelte-preprocess';
import path from 'path';



/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://github.com/sveltejs/svelte-preprocess
	// for more information about preprocessors
	preprocess: [windi({}), preprocess()],

	kit: {
		adapter: adapter(),

		// vite: {
		//   resolve: {
		// 	alias: {
		// 	  'svelte-jsoneditor': path.resolve('src/lib/jedit')
		// 	}
		//   }
		// }
	}
};

export default config;
export async function handle({ request, resolve }) {
    const response = await resolve(request, {
        ssr: false
    });
    return response;
}