import { Composition } from 'remotion';
import { HelloWorld } from './HelloWorld';
import { Logo } from './HelloWorld/Logo';
import { Subtitle } from './HelloWorld/Subtitle';
import { Title } from './HelloWorld/Title';
import { Gradient } from './Gradient';
import { Scene3 } from './Scene3';
import {Scene2} from './Scene2';

export const RemotionVideo: React.FC = () => {
	return (
		<>
			<Composition id="Gradient"
				component={Gradient}
				width={720}
				height={1280}
				durationInFrames={120}
				fps={30}

			/>

			<Composition id="Scene3"
				component={Scene3}
				width={720}
				height={1280}
				durationInFrames={150}
				fps={30}
				defaultProps={{
					topSongName: 'All I Talk Is Money',
					topSongArtistName: 'Albusta'
				}}

			/>

			<Composition id="Scene2"
				component={Scene2}
				width={720}
				height={1280}
				durationInFrames={150}
				fps={30}
				defaultProps={{
					topSongName: 'All I Talk Is Money',
					topSongArtistName: 'Albusta'
				}}

			/>


		</>
	);
};
