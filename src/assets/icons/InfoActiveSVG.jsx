import * as React from 'react';
import Svg, { Path } from 'react-native-svg';
const InfoActiveSVG = (props) => (
    <Svg
        xmlns="http://www.w3.org/2000/svg"
        width={20}
        height={20}
        fill="none"
        {...props}
    >
        <Path
            fill="#B0996C"
            fillRule="evenodd"
            d="M10 1.667a8.333 8.333 0 1 0 0 16.666 8.333 8.333 0 0 0 0-16.666Zm0 15A6.674 6.674 0 0 1 3.333 10 6.674 6.674 0 0 1 10 3.333 6.674 6.674 0 0 1 16.667 10 6.674 6.674 0 0 1 10 16.666Zm1.044-10c0 .604-.44 1.041-1.036 1.041-.619 0-1.048-.437-1.048-1.053 0-.592.441-1.03 1.048-1.03.596 0 1.036.438 1.036 1.042Zm-1.875 2.5h1.666v5H9.17v-5Z"
            clipRule="evenodd"
        />
    </Svg>
);
export default InfoActiveSVG;
