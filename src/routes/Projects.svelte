<script lang="ts">
	import Projects from './Projects.json';
</script>

<div class="w-full min-h-screen h-full py-12 mt-32 flex flex-col gap-40 justify-center">
	<div class="w-full flex gap-16 justify-center">
		<div class="w-[520px] flex flex-col gap-16">
			{#each Projects.left as project}
				<div class="group relative w-[520px] rounded-3xl drop-shadow-xl shadow-black">
					<img src={project.image} alt={project.image} class="w-[520px] rounded-3xl" />
					<div
						class="group-hover:flex transition-all absolute top-0 left-0 hidden w-full h-full p-6 rounded-3xl bg-black bg-opacity-70 flex-col justify-between"
					>
						<div class="flex flex-col">
							<h4 class="font-inter text-sm text-white">
								{@html project.company}
							</h4>
							<h3 class="font-inter font-medium text-3xl text-white">
								{@html project.title}
							</h3>
							<p class="pt-8 font-inter text-white">
								{@html project.description}
							</p>
						</div>
						<a
							href={project.link}
							target="_blank"
							class="font-inter text-white transition-all hover:text-orange-400">View the project</a
						>
					</div>
				</div>
			{/each}
		</div>
		<div class="w-[520px] flex flex-col gap-16">
			{#each Projects.right as project}
				<div class="group relative w-[520px] rounded-3xl drop-shadow-xl shadow-black">
					<img src={project.image} alt={project.image} class="w-[520px] rounded-3xl" />
					<div
						class="group-hover:flex transition-all absolute top-0 left-0 hidden w-full h-full p-6 rounded-3xl bg-black bg-opacity-70 flex-col justify-between"
					>
						<div class="flex flex-col">
							<h4 class="font-inter text-sm text-white">
								{@html project.company}
							</h4>
							<h3 class="font-inter font-medium text-3xl text-white">
								{@html project.title}
							</h3>
							<p class="pt-8 font-inter text-white">
								{@html project.description}
							</p>
						</div>
						<a
							href={project.link}
							target="_blank"
							class="font-inter text-white transition-all hover:text-orange-400">View the project</a
						>
					</div>
				</div>
			{/each}
		</div>
	</div>
</div>
