import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
const BookSVG = (props) => (
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
            d="M7 2.333a2.333 2.333 0 0 0-2.333 2.334v17.5a3.5 3.5 0 0 0 3.5 3.5h14a1.167 1.167 0 1 0 0-2.334h-2.334V21h2.334a1.167 1.167 0 0 0 1.166-1.167V4.667A2.333 2.333 0 0 0 21 2.333h-9.333V21H17.5v2.333H8.167a1.167 1.167 0 0 1 0-2.333h1.166V2.333H7Z"
            clipRule="evenodd"
        />
    </Svg>
);
export default BookSVG;
