<script lang="ts">
	import AdonisIcon from '$lib/icons/AdonisIcon.svelte';
	import CSharpIcon from '$lib/icons/CSharpIcon.svelte';
	import DockerIcon from '$lib/icons/DockerIcon.svelte';
	import FigmaIcon from '$lib/icons/FigmaIcon.svelte';
	import MongoIcon from '$lib/icons/MongoIcon.svelte';
	import MySQLIcon from '$lib/icons/MySQLIcon.svelte';
	import NuxtIcon from '$lib/icons/NuxtIcon.svelte';
	import ReactIcon from '$lib/icons/ReactIcon.svelte';
	import SvelteIcon from '$lib/icons/SvelteIcon.svelte';
	import TailwindIcon from '$lib/icons/TailwindIcon.svelte';
	import TypescriptIcon from '$lib/icons/TypescriptIcon.svelte';
	import MouseTracker from '../common/MouseTracker.svelte';
</script>

<section id="skillset">
	<div class="flex h-full w-full flex-col items-center justify-center gap-8 px-12 pb-40 pt-12">
		<h2 class="text-center font-inter text-5xl font-medium text-main">Main skillset</h2>
		<div class="flex w-full flex-wrap items-center justify-center gap-8">
			<a target="_blank" href="https://www.typescriptlang.org/">
				<MouseTracker title="Typescript">
					<TypescriptIcon class="h-12 w-12 text-[#4A79C7]" />
				</MouseTracker>
			</a>
			<a target="_blank" href="https://adonisjs.com/">
				<MouseTracker title="AdonisJS">
					<AdonisIcon class="h-12 w-12 text-[#5A45FF]" />
				</MouseTracker>
			</a>
			<a target="_blank" href="https://www.mongodb.com/">
				<MouseTracker title="MongoDB">
					<MongoIcon class="h-12 w-12 text-[#5BAD44]" />
				</MouseTracker>
			</a>
			<a target="_blank" href="https://kit.svelte.dev/">
				<MouseTracker title="SvelteKit">
					<SvelteIcon class="h-12 w-12 text-[#F33C08]" />
				</MouseTracker>
			</a>
			<a target="_blank" href="https://nuxt.com/">
				<MouseTracker title="Nuxt">
					<NuxtIcon class="h-12 w-12 text-[#00DC82]" />
				</MouseTracker>
			</a>
			<a target="_blank" href="https://tailwindcss.com/">
				<MouseTracker title="TailwindCSS">
					<TailwindIcon class="h-12 w-12 text-[#44B6D4]" />
				</MouseTracker>
			</a>
		</div>
		<h2 class="pt-12 text-center font-inter text-2xl font-medium text-main">Also familiar with</h2>
		<div class="flex w-full flex-wrap items-center justify-center gap-8">
			<a target="_blank" href="https://learn.microsoft.com/en-us/dotnet/csharp/">
				<MouseTracker title="C#">
					<CSharpIcon class="h-12 w-12 text-[#954392]" />
				</MouseTracker>
			</a>
			<a target="_blank" href="https://www.docker.com/">
				<MouseTracker title="Docker">
					<DockerIcon class="h-12 w-12 text-[#2C6AB7]" />
				</MouseTracker>
			</a>
			<a target="_blank" href="https://www.figma.com/">
				<MouseTracker title="Figma">
					<FigmaIcon class="h-12 w-12 text-[#45D386]" />
				</MouseTracker>
			</a>
			<a target="_blank" href="https://react.dev/">
				<MouseTracker title="React">
					<ReactIcon class="h-12 w-12 text-[#79BAFD]" />
				</MouseTracker>
			</a>
			<a target="_blank" href="https://www.mysql.com/">
				<MouseTracker title="MySQL">
					<MySQLIcon class="¨h-12 w-12 text-[#29758F]" />
				</MouseTracker>
			</a>
		</div>
	</div>
</section>
