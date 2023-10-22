<script>
	export let data;
	import Fa from 'svelte-fa';
	import { faYoutube, faReddit, faXTwitter } from '@fortawesome/free-brands-svg-icons';

	function dottify(ln, str) {
		if (!str) return '';
		if (str.length > ln) {
			return str.slice(0, ln) + '...';
		} else {
			return str;
		}
	}
</script>

<div class="flex min-h-screen flex-col items-center justify-center bg-charcoal-300">
	<h1 class="text-4xl font-bold text-left text-celestial_blue-400 m-3">Streamline</h1>
	{#each data.posts as post}
		<a target="_blank" href={post.link} class="m-4">
			<h2 class="font-bold text-center text-white text-xl flex items-center justify-center">
				{#if post.type == 'youtube'}
					<Fa icon={faYoutube} class="text-red-500 mr-2" size="lg" />
				{:else if post.type == 'reddit'}
					<Fa icon={faReddit} class="text-orange-500 mr-2" size="lg" />
				{:else if post.type == 'twitter'}
					<Fa icon={faXTwitter} class="text-charcoal-900 mr-2" size="lg" />
				{/if}
				{dottify(48, post.title)}
			</h2>
			{#if post.description && post.type !== 'reddit'}
				<p class="text-center text-white max-w-lg">{dottify(200, post.description)}</p>
			{/if}
			{#if post.author}
				<p class="text-center text-white max-w-lg">by {post.author}</p>
			{/if}
		</a>
	{/each}
</div>
