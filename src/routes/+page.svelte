<script lang="ts">
	import Navbar from './Navbar.svelte';
	import Observer from './Observer.svelte';
	import Home from './Home.svelte';
	import About from './About.svelte';
	import Experience from './Experience.svelte';
	import Projects from './Projects.svelte';
	import Contact from './Contact.svelte';
</script>

<Navbar />
<Observer />

<div class="w-full flex flex-col justify-center items-center">
	<Home />
	<About />
	<Experience />
	<Projects />
	<Contact />
</div>
