import { AbsoluteFill, useVideoConfig, useCurrentFrame, spring, interpolate } from "remotion";
import styled from 'styled-components';
import { Gradient } from './Gradient';
import { Album, COVER_SIZE } from './AlbumComponent';

const CIRCLE_SIZE = 500;

const Circle = styled.div`
width : ${CIRCLE_SIZE}px;
height: ${CIRCLE_SIZE}px;
border-radius: ${CIRCLE_SIZE / 2}px;
background-color: white;
overflow: hidden;
position: absolute;

`;

const Title = styled.div`
font-family: ---apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
color: white;
font-size: 50px;
font-weight: bold;
text-align: center;
positon: absolute;
top: 300px;
width: 100%;
text-shadow: 0 0 6px rgba(0, 0, 0,0.4);
padding-left: 50px;
padding-right: 50px;

`;

export const Scene3: React.FC<{
    topSongName: string;
    topSongArtistName: string;
}> = ({ topSongName, topSongArtistName }) => {
    const frame = useCurrentFrame();
    const { width, height, fps } = useVideoConfig();
    const progress = spring(
        {
            frame,
            fps,
            config: {
                damping: 200,
            },
        });
    const scale = interpolate(progress, [0, 1], [4, 1]);
    const coverOpacity = interpolate(progress, [0.7, 1], [0, 1]);
    const coverScale = interpolate(progress, [0.7, 1], [0.7, 1]);

    const UPSTART = 40
    const upAnimation = spring({
        frame: frame - UPSTART,
        fps,
        config: {
            damping: 200,
        },

    });
    const contentTranslation = interpolate(upAnimation, [0, 1], [0, -100]);

    const textOpacity = (() => {
        if (frame < UPSTART) {
            return interpolate(progress, [0.7, 1], [0, 1]);
        }
        return interpolate(upAnimation, [0, 1], [1, 0]);
    })();

    const bottomTextOpacity =spring({
        frame: frame - UPSTART -15,
        fps,
        config:{
            mass: 0.45
        },
    });

    const artistTextopacity =spring({
        frame: frame - UPSTART - 43,
        fps,
        config:{
            mass: 0.45
        }
    })

    return (
        <AbsoluteFill style={{
            backgroundColor: '#4e00f9',
        }}>
            <AbsoluteFill style={{
                transform: `translateY(${contentTranslation}px)`
            }}>


                <Title style={{
                    opacity: textOpacity
                }}>
                    Hello!This is Irusha <br /> and go through it

                </Title>

                <Title style={{
                    top: 1030,
                    fontSize: 25,
                    opacity: artistTextopacity
                }}>
                    {topSongArtistName}

                </Title>

                <Title style={{
                    top: 1100,
                    fontSize: 40,
                    opacity: bottomTextOpacity,
                }}>
                    My favourite song of the year is {topSongName}.
                </Title>
                <Circle
                    style={{
                        opacity: progress,
                        left: width / 2 - CIRCLE_SIZE / 2,
                        top: height / 2 - CIRCLE_SIZE / 2 + 100,
                        transform: `scale(${scale})`,
                    }}>
                    <Gradient height={CIRCLE_SIZE} />


                </Circle>
                <div style={{
                    left: width / 2 - CIRCLE_SIZE / 2,
                    top: height / 2 - CIRCLE_SIZE / 2 + 100,
                    position: 'absolute',
                    opacity: coverOpacity,
                    transform: `scale(${coverScale})`,
                }}>
                    <Album />
                </div>
            </AbsoluteFill>



        </AbsoluteFill>

    )
}