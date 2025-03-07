import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
const MapSVG = (props) => (
    <Svg
        xmlns="http://www.w3.org/2000/svg"
        width={28}
        height={28}
        fill="none"
        {...props}
    >
        <Path
            fill="#fff"
            fillRule="evenodd"
            d="M10.5 5.896c-.076 1.916 0 13.969 0 13.969.188 0 .372.03.553.09l6.447 2.149V8.135a1.75 1.75 0 0 1-.553-.09L10.5 5.896Zm-.553-2.275a1.75 1.75 0 0 1 1.106 0l6.447 2.15 6.17-2.057a1.516 1.516 0 0 1 1.996 1.438V20.58a1.75 1.75 0 0 1-1.197 1.66l-6.416 2.139c-.36.12-.747.12-1.106 0l-6.447-2.15-6.17 2.058a1.517 1.517 0 0 1-1.997-1.439V7.42A1.75 1.75 0 0 1 3.53 5.76L9.947 3.62Z"
            clipRule="evenodd"
        />
    </Svg>
);
export default MapSVG;
