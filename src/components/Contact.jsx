import emailjs from "@emailjs/browser";

import { useState, useRef } from "react";

import "./componentsCSS/Contact.css";
export default function Contact({ color, color2 }) {
	const form = useRef();

	const [formData, setFormData] = useState({
		subject: "",
		name: "",
		email: "",
		message: "",
	});

	const handleChange = (e) => {
		setFormData({ ...formData, [e.target.name]: e.target.value });
	};

	const handleSubmit = (e) => {
		e.preventDefault();

		emailjs
			.sendForm(
				"service_hzcrmdn",
				"template_0zgchvh",
				form.current,
				"mSoC3LeQ5UjAXJVBi"
			)
			.then(
				(result) => {
					console.log(result.text);
				},
				(error) => {
					console.log(error.text);
				}
			);
	};

	return (
		<div
			id="contactDiv"
			className="contact"
			style={{
				backgroundColor: color,
				borderTop: `2px ${color2} solid`,
				borderBottom: `2px ${color2} solid`,
			}}
		>
			<div className="contactTitle">
				<p className="contactMe">Me contacter</p>
			</div>
			<form
				className="form"
				onSubmit={handleSubmit}
				id="contactForm"
				ref={form}
				style={{
					background: `linear-gradient(-90deg, ${color2} 0%, ${color} 90%)`,
				}}
			>
				<label>
					Subject:
					<input
						type="text"
						name="sujet"
						value={formData.subject}
						onChange={handleChange}
						required={true}
					/>
				</label>
				<label>
					Name:
					<input
						type="text"
						name="nom"
						value={formData.name}
						onChange={handleChange}
						required={true}
					/>
				</label>
				<label>
					Email:
					<input
						type="text"
						name="email"
						value={formData.email}
						onChange={handleChange}
						required={true}
					/>
				</label>
				<label>Message:</label>

				<textarea
					type="text"
					name="message"
					value={formData.message}
					onChange={handleChange}
					required={true}
				/>

				<input
					type="submit"
					value="envoyer"
					className="submit"
					style={{ backgroundColor: color2 }}
				/>
			</form>
		</div>
	);
}
