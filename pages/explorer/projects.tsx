import Head from 'next/head';
import Image from 'next/image';
import Icons from '../../components/modules/Icons/Icons';
import FileExplorer from '../../components/windows/FileExplorer/FileExplorer';
import styles from '../../styles/utils/List.module.css';
import { ProjectType } from '../../typings';

function Projects({ data }: { data: ProjectType[] }) {
	const content = () => {
		const getDate = (date: string) => {
			const dateString = new Date(date).toLocaleDateString('en-GB', {
				year: 'numeric',
				month: '2-digit',
				day: '2-digit',
				hour: '2-digit',
				minute: '2-digit',
			});
			return dateString.replace(',', '');
		};

		const formatSize = (size: number) => {
			if (size > 1024) {
				return `${(size / 1024).toFixed(2)} MB`;
			}
			return `${size} KB`;
		};

		return (
			<>
				<div className={styles.listItemContainer}>
					{data.map((project) => (
						<div
							className={styles.listItem}
							key={project.id}
							onClick={() =>
								window.open(
									project.html_url,
									'_blank',
									'noopener,noreferrer'
								)
						}
						>
							<div className={styles.listItemName}>
								<Image
									src="/svg/github.svg"
									alt="icon"
									width={16}
									height={16}
								></Image>
								<p>{project.name}</p>
							</div>
							<p className={styles.listItemDateModified}>
								{getDate(project.updated_at)}
							</p>
							<p className={styles.listItemType}>Shortcut</p>
							<p className={styles.listItemSize}>
								{formatSize(project.size)}
							</p>
						</div>
					))}
				</div>
			</>
		);
	};
	return (
		<>
			<Head>
				<title>Simran Sota - Projects</title>
				<link
					rel="canonical"
					href="https://www.Simransota.dev/explorer/projects"
				/>

				{/* Description */}
				<meta
					name="description"
					content="Too lazy to go to my GitHub page? Here's a list of my open-source projects. No forks, no private repos, only my public repos."
				/>

				{/* OpenGraph */}
				<meta property="og:title" content="Simran Sota - Quick access" />
				<meta
					property="og:url"
					content="https://www.Simransota.dev/explorer/projects"
				/>
				<meta
					property="og:description"
					content="Too lazy to go to my GitHub page? Here's a list of my open-source projects. No forks, no private repos, only my public repos."
				/>
			</Head>
			<div style={{ height: '100%' }}>
				<FileExplorer
					icon="folder"
					folder="Projects"
					component={content()}
					topNav={true}
				/>
				<Icons />
			</div>
		</>
	);
}

export async function getStaticProps() {
	const res = await fetch(`https://api.github.com/users/Simransota/repos`);
	const data = (await res.json()).filter(
		(project: ProjectType) =>
			project.fork === false && project.full_name !== 'Simransota/Simransota'
	);

	if (!data) {
		return {
			notFound: true,
		};
	}

	return {
		props: { data },
		revalidate: 10,
	};
}

export default Projects;
