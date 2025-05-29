import Head from 'next/head';
import Icons from '../components/modules/Icons/Icons';

export default function Home() {
	return (
		<>
			<Head>
				<title>Simran</title>
				<link rel="canonical" href="https://www.Simran.dev" />

				{/* Description */}
				<meta
					name="description"
					content="Simran's personal website. A place to share my projects and learn about me. I do some coding sometimes."
				/>

				{/* OpenGraph */}
				<meta property="og:title" content="Simran" />
				<meta property="og:url" content="https://www.Simran.dev" />
				<meta
					property="og:description"
					content="Simran's personal website. A place to share my projects and learn about me. I do some coding sometimes."
				/>
			</Head>
			<div style={{ height: '100%' }}>
				<Icons />
			</div>
		</>
	);
}
