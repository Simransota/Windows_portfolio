import Head from 'next/head';
import Icons from '../../components/modules/Icons/Icons';
import Notepad from '../../components/windows/Notepad/Notepad';

function About() {
	const getAge = () => {
		const dateString = '2004-07-06'; // Adjust if needed
		var today = new Date();
		var birthDate = new Date(dateString);
		var age = today.getFullYear() - birthDate.getFullYear();
		var m = today.getMonth() - birthDate.getMonth();
		if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
			age--;
		}
		return age;
	};

	const textContent = () => {
		return `Hello, my name is Simran Sota! 👋\n\nI am a ${getAge()}-year-old Computer Science and IT student from DJ Sanghavi. I am passionate about frontend development, UI/UX design, and leveraging technology to solve real-world problems.\n\nI love working on innovative projects, including legal tech solutions for undertrial prisoners, fintech applications, and AI-driven tools. In my free time, I enjoy exploring new tech stacks, building interactive web experiences, and designing user-friendly interfaces.\n\nOpen the Links folder to connect with me on social media! 🚀\n\nThis website is built with Next.js and React, inspired by a Windows OS interface!\n\nSource code available on GitHub: https://github.com/SimranSota`;
	};

	return (
		<>
			<Head>
				<title>Simran Sota - About Me</title>
				<link rel="canonical" href="https://www.Simransota.dev/notepad/about" />

				{/* Description */}
				<meta name="description" content="Who am I? I guess you will find out after reading this." />

				{/* OpenGraph */}
				<meta property="og:title" content="Simran Sota - About Me" />
				<meta property="og:url" content="https://www.Simransota.dev/notepad/about" />
				<meta property="og:description" content="Who am I? I guess you will find out after reading this." />
			</Head>
			<div style={{ height: '100%' }}>
				<Notepad initialText={textContent()} />
				<Icons />
			</div>
		</>
	);
}

export default About;
