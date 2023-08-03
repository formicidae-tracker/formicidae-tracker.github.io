<script>
	import '@skeletonlabs/skeleton/themes/theme-skeleton.css';
	import '@skeletonlabs/skeleton/styles/skeleton.css';
	import '../app.postcss';

	import { AppBar, AppShell, setInitialClassState } from '@skeletonlabs/skeleton';
	import LightSwitch from '$lib/utilities/LightSwitch.svelte';
</script>

<svelte:head>{@html `<script>(${setInitialClassState.toString()})();</script>`}</svelte:head>
<AppShell>
	<svelte:fragment slot="header">
		<AppBar>
			<svelte:fragment slot="lead">
				<button type="button" class="btn-icon">
					<span class="material-icons-outlined">menu</span>
				</button>
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
