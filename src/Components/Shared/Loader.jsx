import React from 'react';

const Loader = () => (
    <svg width="70" height="70" viewBox="0 0 300 300" xmlns="http://www.w3.org/2000/svg" version="1.1">
        <path d="M 150,0 a 150,150 0 0,1 106.066,256.066 l -35.355,-35.355 a -100,-100 0 0,0 -70.711,-170.711 z" fill="#879cbc">
            <animateTransform attributeName="transform" attributeType="XML" type="rotate" from="0 150 150" to="360 150 150" begin="0s" dur=".5s" fill="freeze" repeatCount="indefinite"></animateTransform>
        </path>
    </svg>
);

export default Loader;