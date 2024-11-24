<script lang="ts">
	import Home from '$lib/components/sections/Home.svelte';
	import About from '$lib/components/sections/About.svelte';
	import Experience from '$lib/components/sections/Experience.svelte';
	import Projects from '$lib/components/sections/Projects.svelte';
	import Contact from '$lib/components/sections/Contact.svelte';
	import Skillset from '$lib/components/sections/Skillset.svelte';
</script>

<div class="flex w-full flex-col items-center justify-center">
	<Home />
	<Skillset />
	<About />
	<Experience />
	<Projects />
	<Contact />
</div>
