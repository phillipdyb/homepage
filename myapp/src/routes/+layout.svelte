<script lang="ts">
	import favicon from '$lib/assets/favicon.svg';

	let { children } = $props();

	let src = 'https://c.tenor.com/yry9zYk-JwoAAAAC/tenor.gif';
	let name = 'Dancing cat gif';

</script>

<img {src} alt="{name}." />

<style>
	img {
		size: 100px;
	}

</style>

<svelte:head>
	<link rel="icon" href={favicon} />
</svelte:head>

{@render children?.()}
