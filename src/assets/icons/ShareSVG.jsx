import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
const ShareSVG = (props) => (
    <Svg
        xmlns="http://www.w3.org/2000/svg"
        width={20}
        height={20}
        fill="none"
        {...props}
    >
        <Path
            fill="#fff"
            stroke="#fff"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.667}
            d="m16.666 10-5.333-5.833v2.916c-2.667 0-8 1.75-8 8.75 0-.972 1.6-2.917 8-2.917v2.917L16.666 10Z"
        />
    </Svg>
);
export default ShareSVG;
