import React from 'react';
import Styled from 'styled-components'
// import ginghamBackground from '../assets/gingham.png'
/*background-image: url(`${ginghamBackground}`);*/

export const PageHeader = Styled.header`
width: 100%;
margin: 0 0 20px;
background-color: #a7eddc;
background-repeat: repeat-x;
border-bottom: rgba(132, 141, 139, .3) solid 5px;
border-top: rgba(132, 141, 139, .3) solid 5px;
text-align: center;
padding: 10px 0 10px;
`;

export const Logo = Styled.h1`
color: #636A68;
font-size: 40px;
font-weight: bold;
font-family: 'Sanchez', serif;
span {
    font-family: 'Rock Salt', cursive;
    font-size: 40px;
}
`;
