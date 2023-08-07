<script lang="ts">
	import '@skeletonlabs/skeleton/themes/theme-rocket.css';

	import '@skeletonlabs/skeleton/styles/skeleton.css';
	import '../app.postcss';

	import { AppBar, AppShell, setInitialClassState } from '@skeletonlabs/skeleton';
	import LightSwitch from '$lib/utilities/LightSwitch.svelte';
	import Logo from '$lib/components/Logo.svelte';
</script>

<svelte:head>{@html `<script>(${setInitialClassState.toString()})();</script>`}</svelte:head>
<AppShell
	regionPage="mx-auto p-6 md:p-10 md:max-w-[960px] xl:px-[200px] xl:max-w-none 2xl:px-10 2xl:max-w-[1200px]"
>
	<svelte:fragment slot="header">
		<AppBar>
			<svelte:fragment slot="lead">
				<a href="/"><Logo /></a>
			</svelte:fragment>
			<h2 class="h2">FORmicidae Tracker</h2>
			<svelte:fragment slot="trail">
				<LightSwitch />
			</svelte:fragment>
		</AppBar>
	</svelte:fragment>
	<slot />
	<svelte:fragment slot="footer">footer</svelte:fragment>
</AppShell>
