import picirusha from './picirusha.jpg';
import styled from 'styled-components';
import {Img} from 'remotion'

 export const COVER_SIZE = 500;


const Cover = styled.div`
width:${COVER_SIZE}px;
height:${COVER_SIZE}px;
box-shadow: 0 0 8px rgba(0,0,0,0.7);

`;

export const Album: React.FC = () => {
    return (
        <Cover>
             <img src={picirusha} style={{
                 height:COVER_SIZE,
                 width:COVER_SIZE
             }}
             />
        </Cover>
       
    );
};
