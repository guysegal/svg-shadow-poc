import PropTypes from 'prop-types';
import React from 'react';
import Svg,{ Path } from 'react-native-svg';
import { View } from 'react-native';

const handPath = "M48.2,27.7c0-2.7-2.2-4.9-4.9-4.9c-0.7,0-1.3,0.1-1.8,0.4c-0.1-2.1-2-4.4-4.3-4.4c-1.6,0-3.6,0.3-4.5,1.6c-0.8-1.7-2.5-2.8-4.4-2.8c-1.3,0-2.4,0.5-3.3,1.3l0-11.9c0-2.7-2.2-4.9-4.9-4.9c-2.7,0-4.9,2.2-4.9,4.9l-0.1,29l-3.6-2.8c0,0-5-4.4-8.3-0.7c-3.6,4,1.4,7.8,3.3,9.4c2.6,2.1,6.4,7.2,6.4,7.2s0.8,0.9,2.7,3.4c1.8,4.8,8.3,9.5,16.1,9.5c9.2,0,16.6-6.5,16.6-12C48.1,49.5,48.2,27.7,48.2,27.7z"

const Hand = ({width=100, height=100, rotate = 0, stroke = '#D1D3D4', ...props}) => {
    let scale=1;

    return (
        <Svg {...props} width={50*scale} height={64*scale} viewBox="0 0 50 64" enable-background="new 0 0 50 64">
            <Path d={handPath} scale={scale} rotate={rotate} fill="#FFFFFF" stroke={stroke} strokeWidth="3.0958" strokeLinejoin="round"
                  stroke-miterlimit="10"/>
        </Svg>
    );
    
};

export default Hand;
