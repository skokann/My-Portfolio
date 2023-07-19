import Image from "next/image";

export default function AboutSection() {
  return (
    <div className="flex flex-col gap-10 h-auto justify-center py-20">
      <div className="flex flex-col gap-1 w-full items-start justify-start">
        <h1 className="text-white text-3xl font-medium">About Me</h1>
        <div className="block w-10 h-1 bg-white" />
      </div>
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-10">
        <span className="col-span-10 lg:col-span-9 text-gray-400 w-full max-w-4xl text-xl">
          I&apos;m Jiří, and for the past six years, IT has been my true
          passion. In my spare time, I immerse myself in web development,
          constantly pushing myself to create innovative and user-friendly
          websites.
        </span>
        <Image
          src="/jirizubryckyj.png"
          width={300}
          height={300}
          alt="Jiří Zubryckyj"
          className="col-span-3"
        />
      </div>
    </div>
  );
}
