import Head from 'next/head';
import Image from 'next/image';
import { useContext, useState } from 'react';
import Icons from '../../components/modules/Icons/Icons';
import { handleWindowPriority } from '../../components/utils/WindowPriority/WindowPriority';
import FileExplorer from '../../components/windows/FileExplorer/FileExplorer';
import MediaPlayer from '../../components/windows/MediaPlayer/MediaPlayer';
import { Context } from '../../context/ContextProvider';
import styles from '../../styles/utils/MediaGrid.module.css';
import { MediaType } from '../../typings';

function Videos({ data }: { data: MediaType[] }) {
	const [openVideo, setOpenVideo] = useState<MediaType | null>(null);

	const DraggableWindowContext = useContext(Context);
	const [windowState, setWindowState] =
		DraggableWindowContext.windowPriorityState;

	const VideoContent = () => {
		return (
			<div className={styles.wrapper}>
				{data.map((video) => (
					<div
						className={`${styles.mediaItem} no_click`}
						key={video.filename}
						onClick={async () => {
							setOpenVideo(video);

							const newWindowState = await handleWindowPriority({
								windowName: 'mediaPlayer',
								windowPriority: windowState,
							});
							if (!newWindowState) return;
							setWindowState(newWindowState);
						}}
					>
						<div className={styles.imageWrapper}>
							<Image
								className="no_click"
								src={video.thumbnail}
								alt="icon"
								width="100%"
								height="100%"
								layout="responsive"
								objectFit="contain"
							/>
						</div>
						<p className="no_click">
							{video.filename.slice(0, -7)}.{video.format}
						</p>
					</div>
				))}
			</div>
		);
	};

	return (
		<>
			<Head>
				<title>Videos</title>
				<link
					rel="canonical"
					href="https://www.Simran.dev/explorer/videos"
				/>

				{/* Description */}
				<meta
					name="description"
					content="Here you can find funny dog and cat videos I randomly post sometimes. Maybe horses too."
				/>

				{/* OpenGraph */}
				<meta property="og:title" content="Simran - Videos" />
				<meta
					property="og:url"
					content="https://www.Simran.dev/explorer/videos"
				/>
				<meta
					property="og:description"
					content="Here you can find funny dog and cat videos I randomly post sometimes. Maybe horses too."
				/>
			</Head>
			<div style={{ height: '100%' }}>
				{openVideo && (
					<MediaPlayer
						closeMedia={setOpenVideo}
						media={openVideo}
						component={
							<video
								controls
								autoPlay
								src={openVideo.secure_url}
								style={{ width: '100%', height: '100%' }}
							/>
						}
					/>
				)}
				<FileExplorer
					folder="Videos"
					topNav={false}
					icon="videos"
					component={<VideoContent />}
				/>
				<Icons />
			</div>
		</>
	);
}

export async function getStaticProps() {
	const res = await fetch(
		`https://api.cloudinary.com/v1_1/${process.env.CLOUDINARY_CLOUD_NAME}/resources/video?max_results=100`,
		{
			headers: {
				Authorization: `Basic ${Buffer.from(
					process.env.CLOUDINARY_API_KEY +
						':' +
						process.env.CLOUDINARY_API_SECRET
				).toString('base64')}}`,
			},
		}
	).then((res) => res.json());

	const data = res.resources.map((video: MediaType) => {
		return {
			thumbnail: (
				video.secure_url.split('.').slice(0, -1).join('.') + '.webp'
			).replace('/upload/', '/upload/q_auto:low/'),
			filename:
				video.public_id.replace('videos/', '').length > 25
					? video.public_id.replace('videos/', '').slice(0, 25)
					: video.public_id.replace('videos/', ''),
			secure_url: video.secure_url,
			format: video.format,
		};
	});

	if (!data) {
		return {
			notFound: true,
		};
	}

	return {
		props: {
			data,
		},
		revalidate: 10,
	};
}

export default Videos;
