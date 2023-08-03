<script lang="ts">
	import { modeCurrent, setModeCurrent } from '@skeletonlabs/skeleton';
</script>

{#if $modeCurrent}
	<button
		type="button"
		class="btn-icon hover:variant-soft-primary"
		on:click={() => setModeCurrent(false)}
	>
		<span class="material-icons-outlined">dark_mode</span>
	</button>
{:else}
	<button
		type="button"
		class="btn-icon hover:variant-soft-primary"
		on:click={() => setModeCurrent(true)}
	>
		<span class="material-icons-outlined">light_mode</span>
	</button>
{/if}
