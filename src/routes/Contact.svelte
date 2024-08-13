<script lang="ts">
	import Icon from '@iconify/svelte';
</script>

<section id="contact">
	<div class="items-cente flex h-full min-h-screen w-full justify-center px-8">
		<div class="flex flex-col items-center justify-center">
			<h2 class="font-yellowtail text-5xl text-dark sm:text-7xl">Get in touch</h2>
			<h3 class="max-w-[320px] pt-6 text-center font-inter text-main sm:max-w-[400px] sm:text-lg">
				Feel free to contact me on any platform attached here below!
			</h3>
			<div class="flex justify-center gap-12 pt-12 xs:gap-20">
				<a target="_blank" href="https://www.instagram.com/jan_kominek/">
					<Icon icon="hugeicons:instagram" class="h-10 w-10 text-secondary transition-all hover:text-pink-500" />
				</a>
				<a target="_blank" href="https://www.linkedin.com/in/jan-kominek/">
					<Icon icon="hugeicons:linkedin-02" class="h-10 w-10 text-secondary transition-all hover:text-sky-500" />
				</a>
				<a target="_blank" href="mailto:contact@kominekjan.cz">
					<Icon icon="lets-icons:e-mail-light" stroke-width="1.5" class="h-10 w-10 text-secondary transition-all hover:text-purple-600" />
				</a>
			</div>
		</div>
	</div>
</section>
