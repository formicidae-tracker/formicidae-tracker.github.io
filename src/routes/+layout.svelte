<script>
	import '../theme.postcss';
	import '@skeletonlabs/skeleton/styles/skeleton.css';
	import '../app.postcss';

	import { AppBar, AppShell, setInitialClassState } from '@skeletonlabs/skeleton';
	import LightSwitch from '$lib/utilities/LightSwitch.svelte';
	import Logo from '$lib/components/Logo.svelte';
</script>

<svelte:head>{@html `<script>(${setInitialClassState.toString()})();</script>`}</svelte:head>
<AppShell>
	<svelte:fragment slot="header">
		<AppBar>
			<svelte:fragment slot="lead">
				<Logo />
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
