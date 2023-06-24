import React from "react";

import {IconSvgProps} from "@/types";

export const Logo: React.FC<IconSvgProps> = ({
	size = 128,
	width,
	height,
	...props
}) => (
	<svg
		fill="none"
		height={size || height}
		viewBox="0 0 1300 300"
		width={size || height}
		{...props}
	>
        <defs>
            <linearGradient id="gradient" x1="0" x2="1" y1="0" y2="0.8">
                <stop offset="0%" stopColor="#19b5fe"/>
                <stop offset="100%" stopColor="#5333ed"/>
            </linearGradient>
        </defs>

		<g clipRule="evenodd">
	        <g fill="url(#gradient)">
		        <path d="M177.16,164.04L177.16,164.04c-14.63-10.25-18.19-30.42-7.94-45.05l61.85-88.33 c10.25-14.63,30.42-18.19,45.05-7.94l0,0c14.63,10.25,18.19,30.42,7.94,45.05l-61.85,88.33 C211.96,170.74,191.79,174.29,177.16,164.04z"/>
				<path d="M157.97,280.09L157.97,280.09c-16.19,7.55-35.44,0.55-42.99-15.65L32.95,88.54 C25.4,72.35,32.4,53.1,48.6,45.55l0,0C64.79,38,84.04,45.01,91.59,61.2l82.03,175.91C181.16,253.3,174.16,272.54,157.97,280.09z"/>
				<path d="M235.69,258.14L235.69,258.14c-17.87,0-32.35-14.48-32.35-32.35v0c0-17.87,14.48-32.35,32.35-32.35h0 c17.87,0,32.35,14.48,32.35,32.35v0C268.04,243.66,253.56,258.14,235.69,258.14z"/>
			</g>
	        <g>
		        <path fill="currentColor" d="M363.5,253.95V43.05h40.8v210.9H363.5z M491,253.95l-91.5-110.1l89.1-100.8h51l-99.3,109.5v-18.9l102.6,120.3 H491z"/>
		        <path fill="currentColor" d="M620.29,256.95c-14.6,0-27.75-3.35-39.45-10.05c-11.7-6.7-21-15.8-27.9-27.3 c-6.9-11.5-10.35-24.35-10.35-38.55c0-14.2,3.4-26.95,10.2-38.25c6.8-11.3,16.1-20.3,27.9-27c11.8-6.7,24.9-10.05,39.3-10.05 c14.8,0,28.05,3.35,39.75,10.05c11.7,6.7,20.95,15.7,27.75,27c6.8,11.3,10.2,24.05,10.2,38.25c0,14.2-3.4,27.05-10.2,38.55 c-6.8,11.5-16.05,20.6-27.75,27.3C648.04,253.6,634.89,256.95,620.29,256.95z M619.99,220.35c7.4,0,13.95-1.65,19.65-4.95 c5.7-3.3,10.1-7.9,13.2-13.8c3.1-5.9,4.65-12.65,4.65-20.25c0-7.6-1.6-14.3-4.8-20.1c-3.2-5.8-7.6-10.35-13.2-13.65 c-5.6-3.3-12.1-4.95-19.5-4.95c-7.2,0-13.6,1.65-19.2,4.95c-5.6,3.3-10,7.85-13.2,13.65c-3.2,5.8-4.8,12.5-4.8,20.1 c0,7.6,1.6,14.35,4.8,20.25c3.2,5.9,7.6,10.5,13.2,13.8C606.39,218.7,612.79,220.35,619.99,220.35z"/>
		        <path fill="currentColor" d="M706.69,143.55v-34.5h107.1v34.5H706.69z M740.59,253.95V48.75h39.3v205.2H740.59z"/>
		        <path fill="currentColor" d="M835.99,253.95v-144.9h39.3v144.9H835.99z M875.29,173.85l-15.3-10.2c1.8-17.8,7-31.85,15.6-42.15 c8.6-10.3,21-15.45,37.2-15.45c7,0,13.3,1.15,18.9,3.45c5.6,2.3,10.7,6.05,15.3,11.25l-24.6,28.2c-2.2-2.4-4.85-4.2-7.95-5.4 c-3.1-1.2-6.65-1.8-10.65-1.8c-8.4,0-15.25,2.65-20.55,7.95C877.94,155,875.29,163.05,875.29,173.85z"/>
		        <path fill="currentColor" d="M1017.49,256.95c-13.2,0-25.1-3.3-35.7-9.9c-10.6-6.6-18.9-15.6-24.9-27c-6-11.4-9-24.2-9-38.4 c0-14.4,3-27.3,9-38.7c6-11.4,14.3-20.4,24.9-27c10.6-6.6,22.5-9.9,35.7-9.9c10.4,0,19.7,2.1,27.9,6.3 c8.2,4.2,14.75,10.05,19.65,17.55c4.9,7.5,7.55,15.95,7.95,25.35v52.2c-0.4,9.6-3.05,18.1-7.95,25.5 c-4.9,7.4-11.45,13.25-19.65,17.55C1037.19,254.8,1027.89,256.95,1017.49,256.95z M1024.69,220.65c11,0,19.9-3.65,26.7-10.95 c6.8-7.3,10.2-16.75,10.2-28.35c0-7.6-1.55-14.35-4.65-20.25c-3.1-5.9-7.4-10.5-12.9-13.8c-5.5-3.3-11.95-4.95-19.35-4.95 c-7.2,0-13.55,1.65-19.05,4.95c-5.5,3.3-9.8,7.9-12.9,13.8c-3.1,5.9-4.65,12.65-4.65,20.25c0,7.8,1.55,14.65,4.65,20.55 c3.1,5.9,7.4,10.5,12.9,13.8C1011.14,219,1017.49,220.65,1024.69,220.65z M1059.49,253.95v-39l6.3-35.4l-6.3-34.8v-35.7h39v144.9 H1059.49z"/>
		        <path fill="currentColor" d="M1133.29,253.95v-144.9h39.3v144.9H1133.29z M1230.79,253.95v-83.1c0-8.6-2.7-15.6-8.1-21 c-5.4-5.4-12.4-8.1-21-8.1c-5.6,0-10.6,1.2-15,3.6c-4.4,2.4-7.85,5.8-10.35,10.2c-2.5,4.4-3.75,9.5-3.75,15.3l-15.3-7.8 c0-11.4,2.45-21.35,7.35-29.85c4.9-8.5,11.7-15.15,20.4-19.95c8.7-4.8,18.55-7.2,29.55-7.2c10.6,0,20.1,2.65,28.5,7.95 c8.4,5.3,15,12.2,19.8,20.7c4.8,8.5,7.2,17.65,7.2,27.45v91.8H1230.79z"/>
	        </g>
        </g>
	</svg>
);

export const NextUILogo: React.FC<IconSvgProps> = (props) => {
	const { width, height = 40 } = props;
  
	return (
	  <svg
		fill="none"
		height={height}
		viewBox="0 0 161 32"
		width={width}
		xmlns="http://www.w3.org/2000/svg"
		{...props}
	  >
		<path
		  className="fill-black dark:fill-white"
		  d="M55.6827 5V26.6275H53.7794L41.1235 8.51665H40.9563V26.6275H39V5H40.89L53.5911 23.1323H53.7555V5H55.6827ZM67.4831 26.9663C66.1109 27.0019 64.7581 26.6329 63.5903 25.9044C62.4852 25.185 61.6054 24.1633 61.0537 22.9582C60.4354 21.5961 60.1298 20.1106 60.1598 18.6126C60.132 17.1113 60.4375 15.6228 61.0537 14.2563C61.5954 13.0511 62.4525 12.0179 63.5326 11.268C64.6166 10.5379 65.8958 10.16 67.1986 10.1852C68.0611 10.1837 68.9162 10.3468 69.7187 10.666C70.5398 10.9946 71.2829 11.4948 71.8992 12.1337C72.5764 12.8435 73.0985 13.6889 73.4318 14.6152C73.8311 15.7483 74.0226 16.9455 73.9968 18.1479V19.0773H63.2262V17.4194H72.0935C72.1083 16.4456 71.8952 15.4821 71.4714 14.6072C71.083 13.803 70.4874 13.1191 69.7472 12.6272C68.9887 12.1348 68.1022 11.8812 67.2006 11.8987C66.2411 11.8807 65.3005 12.1689 64.5128 12.7223C63.7332 13.2783 63.1083 14.0275 62.6984 14.8978C62.2582 15.8199 62.0314 16.831 62.0352 17.8546V18.8476C62.009 20.0078 62.2354 21.1595 62.6984 22.2217C63.1005 23.1349 63.7564 23.9108 64.5864 24.4554C65.4554 24.9973 66.4621 25.2717 67.4831 25.2448C68.1676 25.2588 68.848 25.1368 69.4859 24.8859C70.0301 24.6666 70.5242 24.3376 70.9382 23.919C71.3183 23.5345 71.6217 23.0799 71.8322 22.5799L73.5995 23.1604C73.3388 23.8697 72.9304 24.5143 72.4019 25.0506C71.8132 25.6529 71.1086 26.1269 70.3314 26.4434C69.4258 26.8068 68.4575 26.9846 67.4831 26.9663V26.9663ZM78.8233 10.4075L82.9655 17.325L87.1076 10.4075H89.2683L84.1008 18.5175L89.2683 26.6275H87.103L82.9608 19.9317L78.8193 26.6275H76.6647L81.7711 18.5169L76.6647 10.4062L78.8233 10.4075ZM99.5142 10.4075V12.0447H91.8413V10.4075H99.5142ZM94.2427 6.52397H96.1148V22.3931C96.086 22.9446 96.2051 23.4938 96.4597 23.9827C96.6652 24.344 96.9805 24.629 97.3589 24.7955C97.7328 24.9548 98.1349 25.0357 98.5407 25.0332C98.7508 25.0359 98.9607 25.02 99.168 24.9857C99.3422 24.954 99.4956 24.9205 99.6283 24.8853L100.026 26.5853C99.8062 26.6672 99.5805 26.7327 99.3511 26.7815C99.0274 26.847 98.6977 26.8771 98.3676 26.8712C97.6854 26.871 97.0119 26.7156 96.3973 26.4166C95.7683 26.1156 95.2317 25.6485 94.8442 25.0647C94.4214 24.4018 94.2097 23.6242 94.2374 22.8363L94.2427 6.52397ZM118.398 5H120.354V19.3204C120.376 20.7052 120.022 22.0697 119.328 23.2649C118.644 24.4235 117.658 25.3698 116.477 26.0001C115.168 26.6879 113.708 27.0311 112.232 26.9978C110.759 27.029 109.302 26.6835 107.996 25.9934C106.815 25.362 105.827 24.4161 105.141 23.2582C104.447 22.0651 104.092 20.7022 104.115 19.319V5H106.08V19.1831C106.061 20.2559 106.324 21.3147 106.843 22.2511C107.349 23.1459 108.094 23.8795 108.992 24.3683C109.993 24.9011 111.111 25.1664 112.242 25.139C113.373 25.1656 114.493 24.9003 115.495 24.3683C116.395 23.8815 117.14 23.1475 117.644 22.2511C118.16 21.3136 118.421 20.2553 118.402 19.1831L118.398 5ZM128 5V26.6275H126.041V5H128Z"
		/>
		<path
		  className="fill-black dark:fill-white"
		  d="M23.5294 0H8.47059C3.79241 0 0 3.79241 0 8.47059V23.5294C0 28.2076 3.79241 32 8.47059 32H23.5294C28.2076 32 32 28.2076 32 23.5294V8.47059C32 3.79241 28.2076 0 23.5294 0Z"
		/>
		<path
		  className="fill-white dark:fill-black"
		  d="M17.5667 9.21729H18.8111V18.2403C18.8255 19.1128 18.6 19.9726 18.159 20.7256C17.7241 21.4555 17.0968 22.0518 16.3458 22.4491C15.5717 22.8683 14.6722 23.0779 13.6473 23.0779C12.627 23.0779 11.7286 22.8672 10.9521 22.4457C10.2007 22.0478 9.5727 21.4518 9.13602 20.7223C8.6948 19.9705 8.4692 19.1118 8.48396 18.2403V9.21729H9.72854V18.1538C9.71656 18.8298 9.88417 19.4968 10.2143 20.0868C10.5362 20.6506 11.0099 21.1129 11.5814 21.421C12.1689 21.7448 12.8576 21.9067 13.6475 21.9067C14.4374 21.9067 15.1272 21.7448 15.7169 21.421C16.2895 21.1142 16.7635 20.6516 17.0844 20.0868C17.4124 19.4961 17.5788 18.8293 17.5667 18.1538V9.21729ZM23.6753 9.21729V22.845H22.4309V9.21729H23.6753Z"
		/>
	  </svg>
	);
  };