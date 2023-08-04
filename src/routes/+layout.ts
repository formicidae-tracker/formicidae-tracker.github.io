import { redirect } from '@sveltejs/kit';
import type { LayoutLoad } from './$types';

export const prerender = true;

export const load: LayoutLoad = () => {
	throw redirect(302, 'https://github.com/formicidae-tracker/documentation/wiki');
};
