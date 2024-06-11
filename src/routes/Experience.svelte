<script lang="ts">
	import Experience from './Experience.json';
</script>

<div class="w-full min-h-screen h-full py-12 flex flex-col gap-40 justify-center">
	{#each Experience as experience}
		<div class="w-full flex gap-32 justify-center">
			<div class="w-[520px] flex flex-col">
				<h4 class="font-inter" style="color: {experience.color};">
					{@html experience.date}
				</h4>
				<h3 class="pt-3 font-inter font-medium text-4xl text-main">
					{@html experience.title}
				</h3>
				<a
					href={experience.link}
					target="_blank"
					class="font-inter text-2xl"
					style="color: {experience.color};"
				>
					{@html experience.company}
				</a>
			</div>
			<div class="w-[520px] flex flex-col">
				<h4 class="font-inter" style="color: {experience.color};">
					{@html experience.location}
				</h4>
				<p class="pt-3 font-inter text-lg text-main">
					{@html experience.description}
				</p>
			</div>
		</div>
	{/each}
</div>
