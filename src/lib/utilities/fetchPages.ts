type Menuentry = {
	children: { [index: string]: Menuentry };

	name: string;
	target?: string;
};

type Sitemap = {
	[index: string]: Menuentry;
};

export async function buildSitemap(): Promise<Sitemap> {
	let sitemap: Sitemap = {};

	const allMarkdownFiles = await Promise.all(
		Object.entries(import.meta.glob('/src/routes/**/+page.md')).map(async ([path_, resolver]) => {
			const resolved = (await resolver()) as any;
			const path = path_.slice(11, -9);
			const frontmatter = resolved?.frontmatter || {};
			const target = path.slice(1).replaceAll('/', '_');
			return { frontmatter: frontmatter, path: path, target: target };
		})
	);

	for (const file of allMarkdownFiles) {
		if (file.frontmatter.menu == undefined) {
			sitemap[file.target] = {
				name: file.frontmatter?.title || file.target,
				target: file.path
			};
		}
	}

	return sitemap;
}
