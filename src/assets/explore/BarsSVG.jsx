import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
const BarsSVG = (props) => (
    <Svg
        xmlns="http://www.w3.org/2000/svg"
        width={38}
        height={38}
        fill="none"
        {...props}
    >
        <Path
            fill="#B0996C"
            d="M9.5 33.25v-3.167h7.917v-7.916L4.75 7.917V4.75h28.5v3.167l-12.667 14.25v7.916H28.5v3.167h-19Zm2.296-22.167h14.408l2.85-3.166H8.946l2.85 3.166Z"
        />
    </Svg>
);
export default BarsSVG;
