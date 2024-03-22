export default function ContactSection() {
	return (
		<section
			id="contact"
			className="flex h-auto justify-center items-center py-20"
		>
			<div className="flex flex-col w-full max-w-3xl gap-10 mx-auto">
				<div className="flex flex-col gap-1 w-full items-center justify-center">
					<h1 className="text-white text-3xl font-medium">Contact Me</h1>
					<span className="text-gray-400 w-full text-center max-w-xl text-base">
						Let&apos;s work together! I&apos;m currently available to work on
						any cool project! <br /> If you&apos;re interested in hiring me,
						please contact me on my email:
						<p className="text-emerald-500">zubryckyj@icloud.com</p>
						<p className="text-emerald-500 mb-2">+420 721402705</p>
						<span className="">
							IČO: 19118457 <br />
							Business address: Jungmannova 747 Kadaň 432 01 Czech Republic
						</span>
					</span>
				</div>
			</div>
		</section>
	);
}
