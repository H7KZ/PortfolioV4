<script lang="ts">
	import { activeSection } from './activeSection';

	let currentSection: string;

	activeSection.subscribe((value) => {
		currentSection = value;
	});

	function isActive(current: string, sectionId: string) {
		return current === sectionId;
	}
</script>

<div class="fixed right-8 top-1/2 z-10 hidden w-32 -translate-y-1/2 flex-col gap-2 2xl:flex">
	<a
		href="#home"
		class="text-md hover:text-accent font-jaldi font-medium text-main transition-all duration-300 ease-in-out hover:text-highlight"
		class:!text-2xl={isActive(currentSection, 'home')}
		class:!font-bold={isActive(currentSection, 'home')}
		class:!text-secondary={isActive(currentSection, 'home')}
	>
		1. Home
	</a>
	<a
		href="#skillset"
		class="text-md hover:text-accent font-jaldi font-medium text-main transition-all duration-300 ease-in-out hover:text-highlight"
		class:!text-2xl={isActive(currentSection, 'skillset')}
		class:!font-bold={isActive(currentSection, 'skillset')}
		class:!text-secondary={isActive(currentSection, 'skillset')}
	>
		2. Skillset
	</a>
	<a
		href="#about"
		class="text-md hover:text-accent font-jaldi font-medium text-main transition-all duration-300 ease-in-out hover:text-highlight"
		class:!text-2xl={isActive(currentSection, 'about')}
		class:!font-bold={isActive(currentSection, 'about')}
		class:!text-secondary={isActive(currentSection, 'about')}
	>
		3. About
	</a>
	<a
		href="#experience"
		class="text-md hover:text-accent font-jaldi font-medium text-main transition-all duration-300 ease-in-out hover:text-highlight"
		class:!text-2xl={isActive(currentSection, 'experience')}
		class:!font-bold={isActive(currentSection, 'experience')}
		class:!text-secondary={isActive(currentSection, 'experience')}
	>
		4. Experience
	</a>
	<a
		href="#projects"
		class="text-md hover:text-accent font-jaldi font-medium text-main transition-all duration-300 ease-in-out hover:text-highlight"
		class:!text-2xl={isActive(currentSection, 'projects')}
		class:!font-bold={isActive(currentSection, 'projects')}
		class:!text-secondary={isActive(currentSection, 'projects')}
	>
		5. Projects
	</a>
	<a
		href="#contact"
		class="text-md hover:text-accent font-jaldi font-medium text-main transition-all duration-300 ease-in-out hover:text-highlight"
		class:!text-2xl={isActive(currentSection, 'contact')}
		class:!font-bold={isActive(currentSection, 'contact')}
		class:!text-secondary={isActive(currentSection, 'contact')}
	>
		6. Contact
	</a>
</div>

<div class="background-gradient fixed left-0 top-0 z-10 hidden w-full items-end justify-center pb-2 pt-6 xs:flex xs:gap-5 sm:gap-10 md:gap-20 2xl:hidden">
	<a
		href="#home"
		class="text-md hover:text-accent font-jaldi font-medium text-main transition-all duration-300 ease-in-out hover:text-highlight"
		class:!text-2xl={isActive(currentSection, 'home')}
		class:!font-bold={isActive(currentSection, 'home')}
		class:!text-secondary={isActive(currentSection, 'home')}
	>
		1. Home
	</a>
	<a
		href="#skillset"
		class="text-md hover:text-accent font-jaldi font-medium text-main transition-all duration-300 ease-in-out hover:text-highlight"
		class:!text-2xl={isActive(currentSection, 'skillset')}
		class:!font-bold={isActive(currentSection, 'skillset')}
		class:!text-secondary={isActive(currentSection, 'skillset')}
	>
		2. Skillset
	</a>
	<a
		href="#about"
		class="text-md hover:text-accent font-jaldi font-medium text-main transition-all duration-300 ease-in-out hover:text-highlight"
		class:!text-2xl={isActive(currentSection, 'about')}
		class:!font-bold={isActive(currentSection, 'about')}
		class:!text-secondary={isActive(currentSection, 'about')}
	>
		3. About
	</a>
	<a
		href="#experience"
		class="text-md hover:text-accent font-jaldi font-medium text-main transition-all duration-300 ease-in-out hover:text-highlight"
		class:!text-2xl={isActive(currentSection, 'experience')}
		class:!font-bold={isActive(currentSection, 'experience')}
		class:!text-secondary={isActive(currentSection, 'experience')}
	>
		4. Experience
	</a>
	<a
		href="#projects"
		class="text-md hover:text-accent font-jaldi font-medium text-main transition-all duration-300 ease-in-out hover:text-highlight"
		class:!text-2xl={isActive(currentSection, 'projects')}
		class:!font-bold={isActive(currentSection, 'projects')}
		class:!text-secondary={isActive(currentSection, 'projects')}
	>
		5. Projects
	</a>
	<a
		href="#contact"
		class="text-md hover:text-accent font-jaldi font-medium text-main transition-all duration-300 ease-in-out hover:text-highlight"
		class:!text-2xl={isActive(currentSection, 'contact')}
		class:!font-bold={isActive(currentSection, 'contact')}
		class:!text-secondary={isActive(currentSection, 'contact')}
	>
		6. Contact
	</a>
</div>

<div class="background-gradient fixed left-0 top-0 z-10 flex w-full flex-col items-center justify-center gap-3 pb-2 pt-6 xs:hidden">
	<div class="flex items-center justify-center gap-8">
		<a
			href="#home"
			class="text-md hover:text-accent font-jaldi font-medium text-main transition-all duration-300 ease-in-out hover:text-highlight"
			class:!text-2xl={isActive(currentSection, 'home')}
			class:!font-bold={isActive(currentSection, 'home')}
			class:!text-secondary={isActive(currentSection, 'home')}
		>
			1. Home
		</a>
		<a
			href="#skillset"
			class="text-md hover:text-accent font-jaldi font-medium text-main transition-all duration-300 ease-in-out hover:text-highlight"
			class:!text-2xl={isActive(currentSection, 'skillset')}
			class:!font-bold={isActive(currentSection, 'skillset')}
			class:!text-secondary={isActive(currentSection, 'skillset')}
		>
			2. Skillset
		</a>
		<a
			href="#about"
			class="text-md hover:text-accent font-jaldi font-medium text-main transition-all duration-300 ease-in-out hover:text-highlight"
			class:!text-2xl={isActive(currentSection, 'about')}
			class:!font-bold={isActive(currentSection, 'about')}
			class:!text-secondary={isActive(currentSection, 'about')}
		>
			3. About
		</a>
	</div>
	<div class="flex items-center justify-center gap-8">
		<a
			href="#experience"
			class="text-md hover:text-accent font-jaldi font-medium text-main transition-all duration-300 ease-in-out hover:text-highlight"
			class:!text-2xl={isActive(currentSection, 'experience')}
			class:!font-bold={isActive(currentSection, 'experience')}
			class:!text-secondary={isActive(currentSection, 'experience')}
		>
			4. Experience
		</a>
		<a
			href="#projects"
			class="text-md hover:text-accent font-jaldi font-medium text-main transition-all duration-300 ease-in-out hover:text-highlight"
			class:!text-2xl={isActive(currentSection, 'projects')}
			class:!font-bold={isActive(currentSection, 'projects')}
			class:!text-secondary={isActive(currentSection, 'projects')}
		>
			5. Projects
		</a>
		<a
			href="#contact"
			class="text-md hover:text-accent font-jaldi font-medium text-main transition-all duration-300 ease-in-out hover:text-highlight"
			class:!text-2xl={isActive(currentSection, 'contact')}
			class:!font-bold={isActive(currentSection, 'contact')}
			class:!text-secondary={isActive(currentSection, 'contact')}
		>
			6. Contact
		</a>
	</div>
</div>
