export function Navbar() {
  return (
    <nav
      class="font-poppins  font-extralight  xl:justify-end  xl:gap-11  
       fixed flex w-full truncate px:14 xl:px-80 text-sm gap-4 items-center justify-center backdrop-blur-sm 
         py-9 bg-black/80 z-10
      "
    >
      <a
        href="#about"
        class="dark:text-white xl:text-sm md:text-base opacity-75"
        aria-current="page"
      >
        ABOUT ME
      </a>
      <a
        href="#skills"
        class="text-gray-900 dark:text-white xl:text-sm md:text-base hover:underline opacity-75"
      >
        SKILLS{" "}
      </a>
      <a
        href="#projects"
        class="text-gray-900 dark:text-white xl:text-sm md:text-base hover:underline opacity-75"
      >
        PROJECTS
      </a>
      <a
        href="#contact"
        class="text-gray-900 dark:text-white xl:text-sm md:text-base hover:underline opacity-75 "
      >
        CONTACT
      </a>
    </nav>
  );
}
