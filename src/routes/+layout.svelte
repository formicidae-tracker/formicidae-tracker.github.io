<script>
	import '@skeletonlabs/skeleton/themes/theme-skeleton.css';
	import '@skeletonlabs/skeleton/styles/skeleton.css';
	import '../app.postcss';

	import { setInitialClassState } from '@skeletonlabs/skeleton';
	import LightSwitch from '$lib/utilities/LightSwitch.svelte';
</script>

<svelte:head>{@html `<script>(${setInitialClassState.toString()})();</script>`}</svelte:head>
<LightSwitch />
<slot />
