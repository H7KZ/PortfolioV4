<script lang="ts">
	import Experience from './Experience.json';
</script>

<section id="experience">
	<div class="w-full min-h-screen h-full py-12 flex flex-col justify-center px-12">
		{#each Experience as experience}
			<div class="w-full flex flex-col gap-4 justify-center md:flex-row md:gap-32">
				<div class="w-full md:pb-20 md:max-w-[320px] lg:max-w-[420px] xl:max-w-none xl:w-[520px]">
					<div class="sticky top-8 flex flex-col">
						<h4 class="font-inter text-sm md:text-base" style="color: {experience.color};">
							{@html experience.date}
						</h4>
						<h3 class="pt-3 font-inter font-medium text-3xl md:text-4xl text-main">
							{@html experience.title}
						</h3>
						<div>
							<a
								href={experience.link}
								target="_blank"
								class="font-inter text-xl md:text-2xl transition-all hover:!text-highlight"
								style="color: {experience.color};"
							>
								{@html experience.company}
							</a>
						</div>
					</div>
				</div>
				<div class="w-full pb-32 flex flex-col md:max-w-[320px] lg:max-w-[420px] xl:max-w-none xl:w-[520px]">
					<h4 class="font-inter text-sm md:text-base" style="color: {experience.color};">
						{@html experience.location}
					</h4>
					<p class="pt-3 font-inter text-base md:text-lg text-main">
						{@html experience.description}
					</p>
				</div>
			</div>
		{/each}
	</div>
</section>
