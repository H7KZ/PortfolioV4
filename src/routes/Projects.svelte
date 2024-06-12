<script lang="ts">
	import Projects from './Projects.json';
</script>

<section id="projects">
	<div class="w-full min-h-screen h-full py-12 mt-32 px-4 flex flex-col gap-40 justify-center">
		<div class="w-full flex flex-col gap-16 justify-center xl:flex-row">
			<div class="w-full flex flex-col gap-16">
				{#each Projects.left as project}
					<div class="group relative max-w-[520px] w-full rounded-3xl drop-shadow-xl shadow-black">
						<img src={project.image} alt={project.image} class="max-w-[520px] w-full rounded-3xl" />
						<div
							class="group-hover:opacity-100 opacity-0 transition-all duration-[400ms] absolute top-0 left-0 w-full h-full p-6 rounded-3xl bg-black bg-opacity-70 flex flex-col justify-between"
						>
							<div class="flex flex-col">
								<h4 class="font-inter text-xs text-white sm:text-sm">
									{@html project.company}
								</h4>
								<h3 class="font-inter font-medium text-2xl text-white sm:text-3xl">
									{@html project.title}
								</h3>
								<p class="pt-2 font-inter text-xs text-white xs:text-sm xs:pt-5 sm:pt-8">
									{@html project.description}
								</p>
							</div>
							<a href={project.link} target="_blank" class="font-inter text-xs text-white transition-all hover:text-orange-400 xs:text-sm">View the project</a>
						</div>
					</div>
				{/each}
			</div>
			<div class="w-full flex flex-col gap-16">
				{#each Projects.right as project}
					<div class="group relative max-w-[520px] w-full rounded-3xl drop-shadow-xl shadow-black">
						<img src={project.image} alt={project.image} class="max-w-[520px] w-full rounded-3xl" />
						<div
							class="group-hover:opacity-100 opacity-0 transition-all duration-[400ms] absolute top-0 left-0 w-full h-full p-6 rounded-3xl bg-black bg-opacity-70 flex flex-col justify-between"
						>
							<div class="flex flex-col">
								<h4 class="font-inter text-xs text-white sm:text-sm">
									{@html project.company}
								</h4>
								<h3 class="font-inter font-medium text-2xl text-white sm:text-3xl">
									{@html project.title}
								</h3>
								<p class="pt-2 font-inter text-xs text-white xs:text-sm sm:pt-8">
									{@html project.description}
								</p>
							</div>
							<a href={project.link} target="_blank" class="font-inter text-xs text-white transition-all hover:text-orange-400 xs:text-sm">View the project</a>
						</div>
					</div>
				{/each}
			</div>
		</div>
	</div>
</section>
