import type { LayoutLoad } from './$types';

export const prerender = true;

export const load: LayoutLoad = ({ url }) => {
	console.log(url.origin);
	return {};
};
