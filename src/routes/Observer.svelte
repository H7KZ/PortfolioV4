<script lang="ts">
	import { activeSection } from './activeSection';
	import { onMount } from 'svelte';

	let sections: HTMLElement[] = [];

	onMount(() => {
		sections = Array.from(document.querySelectorAll('section'));

		const observer = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					if (entry.isIntersecting) {
						activeSection.set(entry.target.id);
					}
				});
			},
			{
				threshold: Array.from({ length: 1001 }, (_, i) => i / 1000),
				rootMargin: '0px 0px -50% 0px'
			}
		);

		sections.forEach((section) => {
			observer.observe(section);
		});

		return () => {
			sections.forEach((section) => {
				observer.unobserve(section);
			});
		};
	});
</script>
