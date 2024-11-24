<script lang="ts">
	import Projects from '../../data/Projects.json';
</script>

<section id="projects">
	<div class="mt-32 flex h-full min-h-screen w-full flex-col justify-center gap-20 px-4 py-12">
		<div class="flex flex-col items-center justify-center gap-2">
			<h2 class="text-center font-inter text-5xl font-medium text-main">Notable projects</h2>
			<p class="text-center font-inter text-sm font-light text-secondary">(Hover to see more details)</p>
		</div>
		<div class="flex w-full flex-col justify-center gap-16 xl:flex-row">
			<div class="flex w-full flex-col gap-16">
				{#each Projects.left as project}
					<div class="group relative w-full max-w-[520px] rounded-3xl shadow-black drop-shadow-xl">
						<img src={project.image} alt={project.image} class="w-full max-w-[520px] rounded-3xl" />
						<div
							class="absolute left-0 top-0 flex h-full w-full flex-col justify-between rounded-3xl bg-black bg-opacity-70 p-6 opacity-0 transition-all duration-[400ms] group-hover:opacity-100"
						>
							<div class="flex flex-col">
								<h4 class="font-inter text-xs text-white sm:text-sm">
									{@html project.company}
								</h4>
								<h3 class="font-inter text-2xl font-medium text-white sm:text-3xl">
									{@html project.title}
								</h3>
								<p class="pt-2 font-inter text-xs text-white xs:pt-5 xs:text-sm sm:pt-8">
									{@html project.description}
								</p>
							</div>
							<a
								href={project.link}
								target="_blank"
								class="flex items-center gap-2 font-inter text-xs text-white transition-all hover:text-orange-400 xs:text-sm"
							>
								<p>View the project</p>
								<svg viewBox="0 0 51 18" fill="none" xmlns="http://www.w3.org/2000/svg" class="h-3.5">
									<path
										d="M41.9933 1L49.9903 9.001L41.9933 17M1 9.001L49.9903 9.003"
										stroke="currentColor"
										stroke-width="1.5"
										stroke-linecap="round"
										stroke-linejoin="round"
									/>
								</svg>
							</a>
						</div>
					</div>
				{/each}
			</div>
			<div class="flex w-full flex-col gap-16">
				{#each Projects.right as project}
					<div class="group relative w-full max-w-[520px] rounded-3xl shadow-black drop-shadow-xl">
						<img src={project.image} alt={project.image} class="w-full max-w-[520px] rounded-3xl" />
						<div
							class="absolute left-0 top-0 flex h-full w-full flex-col justify-between rounded-3xl bg-black bg-opacity-70 p-6 opacity-0 transition-all duration-[400ms] group-hover:opacity-100"
						>
							<div class="flex flex-col">
								<h4 class="font-inter text-xs text-white sm:text-sm">
									{@html project.company}
								</h4>
								<h3 class="font-inter text-2xl font-medium text-white sm:text-3xl">
									{@html project.title}
								</h3>
								<p class="pt-2 font-inter text-xs text-white xs:text-sm sm:pt-8">
									{@html project.description}
								</p>
							</div>
							<a
								href={project.link}
								target="_blank"
								class="flex items-center gap-2 font-inter text-xs text-white transition-all hover:text-orange-400 xs:text-sm"
							>
								<p>View the project</p>
								<svg viewBox="0 0 51 18" fill="none" xmlns="http://www.w3.org/2000/svg" class="h-3.5">
									<path
										d="M41.9933 1L49.9903 9.001L41.9933 17M1 9.001L49.9903 9.003"
										stroke="currentColor"
										stroke-width="1.5"
										stroke-linecap="round"
										stroke-linejoin="round"
									/>
								</svg>
							</a>
						</div>
					</div>
				{/each}
			</div>
		</div>
	</div>
</section>
