<script lang="ts">
	export let hoverName = 'hover';

	let hoverElement: HTMLElement | null = null;

	function handleMove(e: MouseEvent) {
		if (!hoverElement) return;

		hoverElement.classList.add('!opacity-100');

		hoverElement.style.left = e.pageX - hoverElement.offsetWidth / 2 + 'px';
		hoverElement.style.top = e.pageY + 12 + 'px';
	}

	function handleLeave() {
		if (!hoverElement) return;

		hoverElement.classList.remove('!opacity-100');
	}
</script>

<!-- svelte-ignore a11y_no_static_element_interactions -->
<div on:mousemove={handleMove} on:mouseleave={handleLeave}>
	<div bind:this={hoverElement} class="absolute opacity-0 transition-opacity">
		<slot name="hover">
			<div class="rounded-md bg-black px-2 py-1.5 text-white shadow-md">
				{hoverName}
			</div>
		</slot>
	</div>

	<slot></slot>
</div>
