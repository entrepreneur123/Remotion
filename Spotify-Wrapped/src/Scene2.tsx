import React from 'react';
import {AbsoluteFill} from 'remotion';
import styled from 'styled-components';

 const BAR_HEIGHT = 150;

const Bar =styled.div`
height: ${BAR_HEIGHT} px;
width: ${BAR_HEIGHT}px;
background-color: white;
border-radius:${BAR_HEIGHT}

`;



export const Scene2: React.FC = () => {
    return(
        <AbsoluteFill style={{
            backgroundColor: '#d4148e'
        }}>
            </AbsoluteFill>;

       
    )
}