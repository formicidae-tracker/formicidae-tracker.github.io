<script lang="ts">
	import {
		getModeOsPrefers,
		modeCurrent,
		setModeCurrent,
		setModeUserPrefers
	} from '@skeletonlabs/skeleton';
	import { onMount } from 'svelte';

	function toggleMode() {
		$modeCurrent = !$modeCurrent;
		setModeCurrent($modeCurrent);
		setModeUserPrefers($modeCurrent);
	}

	onMount(() => {
		if (!('modeCurrent' in localStorage)) {
			setModeCurrent(getModeOsPrefers());
		}
	});
</script>

{#if $modeCurrent}
	<button type="button" class="btn-icon hover:variant-soft-primary" on:click={toggleMode}>
		<span class="material-icons-outlined">dark_mode</span>
	</button>
{:else}
	<button type="button" class="btn-icon hover:variant-soft-primary" on:click={toggleMode}>
		<span class="material-icons-outlined">light_mode</span>
	</button>
{/if}
