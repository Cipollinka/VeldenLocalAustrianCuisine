import * as React from 'react';
import Svg, { Path, Defs, LinearGradient, Stop } from 'react-native-svg';
const MountainSVG = (props) => (
    <Svg
        xmlns="http://www.w3.org/2000/svg"
        width={53}
        height={20}
        fill="none"
        {...props}
    >
        <Path
            fill="url(#a)"
            fillRule="evenodd"
            d="m26.946.79-.79-.79-.79.79-8.147 8.147-2.338-2.338-.79-.79-.79.79L.79 19.11 0 19.9h3.16L14.09 8.97l2.338 2.338.79.79.79-.79 8.147-8.147 7.357 7.357-3.128 3.127h3.16l2.337-2.338.79-.79 1.549-1.547L49.151 19.9h3.16l-.79-.79L39.01 6.6l-.79-.79-.79.79-2.337 2.338L26.946.79Z"
            clipRule="evenodd"
        />
        <Path
            stroke="#B0996C"
            strokeLinecap="square"
            strokeWidth={1.341}
            d="m26.363 5.809 3.352 3.351"
        />
        <Defs>
            <LinearGradient
                id="a"
                x1={17.228}
                x2={31.94}
                y1={-5.156}
                y2={28.922}
                gradientUnits="userSpaceOnUse"
            >
                <Stop stopColor="#B0996C" />
                <Stop offset={1} stopColor="#4A402D" />
            </LinearGradient>
        </Defs>
    </Svg>
);
export default MountainSVG;
