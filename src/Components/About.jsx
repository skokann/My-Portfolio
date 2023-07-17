import me from "../img/me.png";

export function About() {
  return (
    <section
      id="about"
      className="w-full h-full xl:flex-row gap-10  flex flex-col items-center min-h-screen bg-black"
    >
      <img className="mt-24 w-full xl:w-1/3 xl:mt-20" src={me} alt="Logo" />
      <p className="text-white mt-3 text-xl xl:leading-10  w-full font-regular font-poppins xl:text-5xl">
        I'm Jiří, and for the past six years, IT has been my true passion. In my
        spare time, I immerse myself in web development, constantly pushing
        myself to create innovative and user-friendly websites. Beyond the
        digital realm, I also prioritize personal growth, dedicating time to
        sports and physical activities.
      </p>
    </section>
  );
}
