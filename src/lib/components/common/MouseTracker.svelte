<script lang="ts">
	interface Props {
		children?: () => any;
		title: string;
	}

	let { children, title = 'hovering' }: Props = $props();

	let hoverElement: HTMLElement | null = null;

	function handleMove(e: MouseEvent) {
		if (!hoverElement) return;

		hoverElement.classList.add('!opacity-100');

		hoverElement.style.left = e.pageX - hoverElement.offsetWidth / 2 + 'px';
		hoverElement.style.top = e.pageY + 16 + 'px';
	}

	function handleLeave() {
		if (!hoverElement) return;

		hoverElement.classList.remove('!opacity-100');
	}
</script>

<div bind:this={hoverElement} class="pointer-events-none absolute opacity-0 transition-opacity">
	<div class="rounded-md bg-black px-2 py-1.5 text-white shadow-md">
		{title}
	</div>
</div>

<div role="presentation" onmousemove={handleMove} onmouseleave={handleLeave}>
	{@render children?.()}
</div>
