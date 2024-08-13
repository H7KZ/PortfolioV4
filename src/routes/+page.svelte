<script lang="ts">
	import Navbar from './Navbar.svelte';
	import Observer from './Observer.svelte';
	import Home from './Home.svelte';
	import About from './About.svelte';
	import Experience from './Experience.svelte';
	import Projects from './Projects.svelte';
	import Contact from './Contact.svelte';
	import Skillset from './Skillset.svelte';
</script>

<Navbar />
<Observer />

<div class="flex w-full flex-col items-center justify-center">
	<Home />
	<Skillset />
	<About />
	<Experience />
	<Projects />
	<Contact />
</div>
