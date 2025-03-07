import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
const ActiveLikeSVG = (props) => (
    <Svg
        xmlns="http://www.w3.org/2000/svg"
        width={20}
        height={20}
        fill="none"
        {...props}
    >
        <Path
            fill="#B0996C"
            stroke="#fff"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.667}
            d="M6.25 3.333a4.583 4.583 0 0 0-4.583 4.584c0 4.583 5.417 8.75 8.333 9.719 2.917-.97 8.334-5.136 8.334-9.72A4.583 4.583 0 0 0 10 5.282a4.579 4.579 0 0 0-3.75-1.947Z"
        />
    </Svg>
);
export default ActiveLikeSVG;
