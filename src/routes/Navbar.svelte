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

<div class="hidden fixed top-1/2 -translate-y-1/2 right-8 z-10 w-32 flex-col gap-2 2xl:flex">
	<a
		href="#home"
		class="font-jaldi font-medium text-md text-main hover:text-accent transition-all duration-300 ease-in-out hover:text-highlight"
		class:!text-2xl={isActive(currentSection, 'home')}
		class:!font-bold={isActive(currentSection, 'home')}
		class:!text-secondary={isActive(currentSection, 'home')}
	>
		1. Home
	</a>
	<a
		href="#about"
		class="font-jaldi font-medium text-md text-main hover:text-accent transition-all duration-300 ease-in-out hover:text-highlight"
		class:!text-2xl={isActive(currentSection, 'about')}
		class:!font-bold={isActive(currentSection, 'about')}
		class:!text-secondary={isActive(currentSection, 'about')}
	>
		2. About
	</a>
	<a
		href="#experience"
		class="font-jaldi font-medium text-md text-main hover:text-accent transition-all duration-300 ease-in-out hover:text-highlight"
		class:!text-2xl={isActive(currentSection, 'experience')}
		class:!font-bold={isActive(currentSection, 'experience')}
		class:!text-secondary={isActive(currentSection, 'experience')}
	>
		3. Experience
	</a>
	<a
		href="#projects"
		class="font-jaldi font-medium text-md text-main hover:text-accent transition-all duration-300 ease-in-out hover:text-highlight"
		class:!text-2xl={isActive(currentSection, 'projects')}
		class:!font-bold={isActive(currentSection, 'projects')}
		class:!text-secondary={isActive(currentSection, 'projects')}
	>
		4. Projects
	</a>
	<a
		href="#contact"
		class="font-jaldi font-medium text-md text-main hover:text-accent transition-all duration-300 ease-in-out hover:text-highlight"
		class:!text-2xl={isActive(currentSection, 'contact')}
		class:!font-bold={isActive(currentSection, 'contact')}
		class:!text-secondary={isActive(currentSection, 'contact')}
	>
		5. Contact
	</a>
</div>

<div class="hidden fixed top-0 left-0 z-10 w-full pt-6 pb-2 justify-center items-end background-gradient xs:flex xs:gap-5 sm:gap-10 md:gap-20 2xl:hidden">
	<a
		href="#home"
		class="font-jaldi font-medium text-md text-main hover:text-accent transition-all duration-300 ease-in-out hover:text-highlight"
		class:!text-2xl={isActive(currentSection, 'home')}
		class:!font-bold={isActive(currentSection, 'home')}
		class:!text-secondary={isActive(currentSection, 'home')}
	>
		1. Home
	</a>
	<a
		href="#about"
		class="font-jaldi font-medium text-md text-main hover:text-accent transition-all duration-300 ease-in-out hover:text-highlight"
		class:!text-2xl={isActive(currentSection, 'about')}
		class:!font-bold={isActive(currentSection, 'about')}
		class:!text-secondary={isActive(currentSection, 'about')}
	>
		2. About
	</a>
	<a
		href="#experience"
		class="font-jaldi font-medium text-md text-main hover:text-accent transition-all duration-300 ease-in-out hover:text-highlight"
		class:!text-2xl={isActive(currentSection, 'experience')}
		class:!font-bold={isActive(currentSection, 'experience')}
		class:!text-secondary={isActive(currentSection, 'experience')}
	>
		3. Experience
	</a>
	<a
		href="#projects"
		class="font-jaldi font-medium text-md text-main hover:text-accent transition-all duration-300 ease-in-out hover:text-highlight"
		class:!text-2xl={isActive(currentSection, 'projects')}
		class:!font-bold={isActive(currentSection, 'projects')}
		class:!text-secondary={isActive(currentSection, 'projects')}
	>
		4. Projects
	</a>
	<a
		href="#contact"
		class="font-jaldi font-medium text-md text-main hover:text-accent transition-all duration-300 ease-in-out hover:text-highlight"
		class:!text-2xl={isActive(currentSection, 'contact')}
		class:!font-bold={isActive(currentSection, 'contact')}
		class:!text-secondary={isActive(currentSection, 'contact')}
	>
		5. Contact
	</a>
</div>

<div class="fixed top-0 left-0 z-10 w-full pt-6 pb-2 flex flex-col justify-center items-center gap-3 background-gradient xs:hidden">
	<div class="flex gap-8 justify-center items-center">
		<a
			href="#home"
			class="font-jaldi font-medium text-md text-main hover:text-accent transition-all duration-300 ease-in-out hover:text-highlight"
			class:!text-2xl={isActive(currentSection, 'home')}
			class:!font-bold={isActive(currentSection, 'home')}
			class:!text-secondary={isActive(currentSection, 'home')}
		>
			1. Home
		</a>
		<a
			href="#experience"
			class="font-jaldi font-medium text-md text-main hover:text-accent transition-all duration-300 ease-in-out hover:text-highlight"
			class:!text-2xl={isActive(currentSection, 'experience')}
			class:!font-bold={isActive(currentSection, 'experience')}
			class:!text-secondary={isActive(currentSection, 'experience')}
		>
			3. Experience
		</a>
		<a
			href="#contact"
			class="font-jaldi font-medium text-md text-main hover:text-accent transition-all duration-300 ease-in-out hover:text-highlight"
			class:!text-2xl={isActive(currentSection, 'contact')}
			class:!font-bold={isActive(currentSection, 'contact')}
			class:!text-secondary={isActive(currentSection, 'contact')}
		>
			5. Contact
		</a>
	</div>
	<div class="flex gap-8 justify-center items-center">
		<a
			href="#about"
			class="font-jaldi font-medium text-md text-main hover:text-accent transition-all duration-300 ease-in-out hover:text-highlight"
			class:!text-2xl={isActive(currentSection, 'about')}
			class:!font-bold={isActive(currentSection, 'about')}
			class:!text-secondary={isActive(currentSection, 'about')}
		>
			2. About
		</a>
		<a
			href="#projects"
			class="font-jaldi font-medium text-md text-main hover:text-accent transition-all duration-300 ease-in-out hover:text-highlight"
			class:!text-2xl={isActive(currentSection, 'projects')}
			class:!font-bold={isActive(currentSection, 'projects')}
			class:!text-secondary={isActive(currentSection, 'projects')}
		>
			4. Projects
		</a>
	</div>
</div>
