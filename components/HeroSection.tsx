export default function HeroSection() {
  return (
    <div className="flex flex-col gap-10 h-screen justify-center">
      <h1 className="text-white text-5xl lg:text-9xl font-bold">
        Jiří <br /> Zubryckyj
      </h1>
      <span className="text-gray-400 w-full max-w-full lg:max-w-4xl text-lg">
        Freelance developer skilled in React, HTML, CSS, and JavaScript.
        Committed to delivering high-quality projects with efficiency and
        creativity.
      </span>
      <button className="flex items-center justify-center bg-emerald-500 text-white rounded-lg py-2 px-10 w-max">
        About Me
      </button>
    </div>
  );
}
