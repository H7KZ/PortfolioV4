<script lang="ts">
	import Experience from '../../data/Experience.json';
</script>

<section id="experience">
	<div class="flex h-full min-h-screen w-full flex-col justify-center px-12 py-12">
		{#each Experience as experience}
			<div class="flex w-full flex-col justify-center gap-4 md:flex-row md:gap-32">
				<div class="w-full md:max-w-[320px] md:pb-20 lg:max-w-[420px] xl:w-[520px] xl:max-w-none">
					<div class="sticky top-8 flex flex-col">
						<h4 class="font-inter text-sm md:text-base" style="color: {experience.color};">
							{@html experience.date}
						</h4>
						<h3 class="pt-3 font-inter text-3xl font-medium text-main md:text-4xl">
							{@html experience.title}
						</h3>
						<div>
							<a
								href={experience.link}
								target="_blank"
								class="font-inter text-xl transition-all hover:!text-highlight md:text-2xl"
								style="color: {experience.color};"
							>
								{@html experience.company}
							</a>
						</div>
					</div>
				</div>
				<div class="flex w-full flex-col pb-32 md:max-w-[320px] lg:max-w-[420px] xl:w-[520px] xl:max-w-none">
					<h4 class="font-inter text-sm md:text-base" style="color: {experience.color};">
						{@html experience.location}
					</h4>
					<p class="pt-3 font-inter text-base text-main md:text-lg">
						{@html experience.description}
					</p>
				</div>
			</div>
		{/each}
	</div>
</section>
