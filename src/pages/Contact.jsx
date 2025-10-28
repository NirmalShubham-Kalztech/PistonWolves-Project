import React from "react";
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaClock } from "react-icons/fa";

// FAQ data array
const faqs = [
	{
		q: "What are your typical turnaround times?",
		a: "Most projects are completed within 2-4 weeks, depending on complexity and parts availability.",
	},
	{
		q: "Do you offer financing options?",
		a: "Yes, we partner with select providers to offer flexible payment plans for qualifying clients.",
	},
	{
		q: "Can I supply my own parts?",
		a: "Absolutely! We’re happy to install customer-supplied parts, provided they meet our quality standards.",
	},
	{
		q: "Do you work on all vehicle makes?",
		a: "We specialize in European and Japanese performance cars, but welcome inquiries for all makes and models.",
	},
];

// Main Contact component
const Contact = () => (
	<div className="bg-[#181818] min-h-screen text-white">
		{/* Hero Section */}
		<section
			className="relative w-full h-[220px] sm:h-[260px] flex items-center justify-center bg-cover bg-center"
			style={{ backgroundImage: `url(/assets/img/contact-hero.jpg)` }}
		>
			{/* Overlay for darkening the background image */}
			{/* <div className="absolute inset-0 bg-black bg-opacity-70"></div> */}
			{/* Hero content */}
			<div className="relative z-10 flex flex-col items-center w-full px-3 py-4">
				{/* Page Title */}
				<h1 className="text-2xl sm:text-4xl md:text-5xl font-bold text-center mb-2">
					Contact <span className="text-red-500">Us</span>
				</h1>
				{/* Subtitle/Description */}
				<p className="text-gray-300 text-center max-w-md sm:max-w-2xl text-base sm:text-lg">
					Ready to start your build? Have questions about our services? We're here to help.
					Reach out to our team of experts and let's discuss how we can turn your automotive vision to life.
				</p>
			</div>
		</section>

		{/* Main Contact Section */}
		<section className="py-10 px-2 sm:px-4 max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">
			{/* Left: Contact Form */}
			<div>
				<h2 className="text-2xl font-bold mb-4">
					Get in <span className="text-red-500">Touch</span>
				</h2>
				<form className="bg-[#23232a] rounded-lg p-4 sm:p-6 flex flex-col gap-4">
					{/* Name fields (stacked on mobile, row on larger screens) */}
					<div className="flex flex-col sm:flex-row gap-4">
						<input
							type="text"
							placeholder="First Name"
							className="bg-[#181818] border border-gray-700 rounded px-3 py-2 flex-1 text-white"
						/>
						<input
							type="text"
							placeholder="Last Name"
							className="bg-[#181818] border border-gray-700 rounded px-3 py-2 flex-1 text-white"
						/>
					</div>
					{/* Email field */}
					<input
						type="email"
						placeholder="Email Address"
						className="bg-[#181818] border border-gray-700 rounded px-3 py-2 text-white"
					/>
					{/* Phone field */}
					<input
						type="tel"
						placeholder="Phone Number"
						className="bg-[#181818] border border-gray-700 rounded px-3 py-2 text-white"
					/>
					{/* Subject field */}
					<input
						type="text"
						placeholder="Subject"
						className="bg-[#181818] border border-gray-700 rounded px-3 py-2 text-white"
					/>
					{/* Message textarea */}
					<textarea
						placeholder="Message"
						rows={4}
						className="bg-[#181818] border border-gray-700 rounded px-3 py-2 text-white"
					></textarea>
					{/* Submit button */}
					<button className="bg-red-600 hover:bg-red-700 text-white px-6 py-2 rounded font-semibold mt-2">
						Send Message
					</button>
				</form>
			</div>

			{/* Right: Contact Information */}
			<div>
				<h2 className="text-2xl font-bold mb-4">
					Contact <span className="text-red-500">Information</span>
				</h2>
				<div className="flex flex-col gap-4">
					{/* Phone Info */}
					<div className="bg-[#23232a] rounded-lg p-4 flex items-center gap-4">
						<span className="bg-red-600 text-white rounded-full w-10 h-10 flex items-center justify-center text-xl">
							<FaPhone />
						</span>
						<div>
							<div className="font-semibold">Phone</div>
							<div className="text-gray-400 text-sm">+91 98765 43210</div>
						</div>
					</div>
					{/* Email Info */}
					<div className="bg-[#23232a] rounded-lg p-4 flex items-center gap-4">
						<span className="bg-red-600 text-white rounded-full w-10 h-10 flex items-center justify-center text-xl">
							<FaEnvelope />
						</span>
						<div>
							<div className="font-semibold">Email</div>
							<div className="text-gray-400 text-sm">info@pistonwolves.com</div>
						</div>
					</div>
					{/* Location Info */}
					<div className="bg-[#23232a] rounded-lg p-4 flex items-center gap-4">
						<span className="bg-red-600 text-white rounded-full w-10 h-10 flex items-center justify-center text-xl">
							<FaMapMarkerAlt />
						</span>
						<div>
							<div className="font-semibold">Location</div>
							<div className="text-gray-400 text-sm">
								203 Automotive Lane, Mumbai, MH 400010
							</div>
						</div>
					</div>
					{/* Business Hours Info */}
					<div className="bg-[#23232a] rounded-lg p-4 flex items-center gap-4">
						<span className="bg-red-600 text-white rounded-full w-10 h-10 flex items-center justify-center text-xl">
							<FaClock />
						</span>
						<div>
							<div className="font-semibold">Business Hours</div>
							<div className="text-gray-400 text-sm">
								Mon-Sat: 10:00 AM - 8:00 PM
								<br />
								Sun: Closed
							</div>
						</div>
					</div>
					{/* Facility Image */}
					<img
						src="/assets/img/contact-building.jpg"
						alt="PistonWolves Facility"
						className="rounded-lg mt-2 w-full object-cover"
					/>
				</div>
			</div>
		</section>

		{/* Visit in Person Section */}
		<section className="py-8 px-2 sm:px-4 text-center">
			<h3 className="text-lg sm:text-xl font-semibold mb-2">
				Prefer to Visit in <span className="text-red-500">Person?</span>
			</h3>
			<p className="text-gray-400 mb-4 max-w-xl mx-auto text-base sm:text-lg">
				We welcome walk-ins! Stop by our workshop to discuss your project, take
				a tour of our facility, and meet our team of experts.
			</p>
			<div className="flex flex-col sm:flex-row justify-center gap-4">
				<button className="bg-red-600 text-white px-6 py-2 rounded hover:bg-red-700 font-semibold">
					Schedule a Visit
				</button>
				<button className="border border-gray-400 text-white px-6 py-2 rounded hover:bg-gray-700 font-semibold">
					Get Directions
				</button>
			</div>
		</section>

		{/* FAQ Section */}
		<section className="py-8 px-2 sm:px-4 max-w-5xl mx-auto">
			<h3 className="text-2xl font-bold mb-6 text-center">
				Frequently Asked <span className="text-red-500">Questions</span>
			</h3>
			<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
				{faqs.map((faq, idx) => (
					<div key={idx} className="bg-[#23232a] rounded-lg p-4 sm:p-6">
						<div className="font-semibold mb-2">{faq.q}</div>
						<div className="text-gray-400 text-sm">{faq.a}</div>
					</div>
				))}
			</div>
		</section>
	</div>
);

export default Contact;
