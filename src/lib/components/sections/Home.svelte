<script lang="ts">
	import GithubIcon from '$lib/icons/GithubIcon.svelte';
	import LinkedInIcon from '$lib/icons/LinkedInIcon.svelte';
	import MailIcon from '$lib/icons/MailIcon.svelte';
</script>

<section id="home">
	<div class="flex h-full min-h-screen w-full items-center justify-center px-12">
		<div class="flex flex-col justify-center">
			<h2 class="font-inter text-lg text-dark sm:text-2xl">Hi, my name is</h2>
			<h1 class="relative flex flex-col items-center justify-center pt-4">
				<div class="relative">
					<img src="images/name.svg" alt="Jan Komínek" class="w-full min-w-56 max-w-[660px]" />
					<img src="images/name2.svg" alt="Jan Komínek" class="absolute left-0 top-0.5 w-full min-w-56 max-w-[660px]" />
				</div>
				<p class="absolute -bottom-1 font-inter text-lg tracking-wider text-main xxs:text-xl xs:bottom-0 xs:text-2xl sm:text-4xl">Fullstack Engineer</p>
			</h1>
			<div class="flex justify-center gap-4 pt-16 xxs:gap-8 xs:gap-20">
				<a target="_blank" href="https://github.com/H7KZ" aria-label="GitHub Profile">
					<GithubIcon class="h-10 w-10 text-secondary transition-all hover:text-gray-700" />
				</a>
				<a target="_blank" href="https://www.linkedin.com/in/jan-kominek/" aria-label="LinkedIn Profile">
					<LinkedInIcon class="h-10 w-10 text-secondary transition-all hover:text-sky-500" />
				</a>
				<a target="_blank" href="mailto:contact@kominekjan.cz" aria-label="Email Jan Komínek">
					<MailIcon class="h-10 w-10 text-secondary transition-all hover:text-purple-600" />
				</a>
			</div>
		</div>
	</div>
</section>
