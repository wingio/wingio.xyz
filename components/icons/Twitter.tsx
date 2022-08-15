import { FunctionComponent, SVGProps } from "react";


const Twitter: FunctionComponent<SVGProps<SVGSVGElement>> = (props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
      viewBox="0 0 50 50" 
      {...props}
    >
        <circle vectorEffect="non-scaling-stroke" cx="25.00000000000002" cy="24.999999999999908" r="25.00000000000003" fill="rgb(255,255,255)"/>
        <path d=" M 41.644 15.301 C 40.495 15.812 39.257 16.156 37.958 16.313 C 39.298 15.509 40.3 14.247 40.78 12.76 C 39.52 13.508 38.14 14.034 36.702 14.318 C 34.715 12.194 31.548 11.673 28.985 13.046 C 26.421 14.418 25.1 17.343 25.765 20.174 C 20.603 19.914 15.793 17.474 12.534 13.462 C 11.962 14.443 11.662 15.56 11.665 16.696 C 11.665 18.921 12.797 20.885 14.521 22.035 C 13.501 22.005 12.504 21.73 11.612 21.233 L 11.612 21.314 C 11.613 24.369 13.765 27.002 16.76 27.609 C 16.209 27.76 15.641 27.835 15.07 27.833 C 14.655 27.833 14.254 27.795 13.862 27.718 C 14.702 30.332 17.111 32.124 19.856 32.175 C 17.583 33.961 14.775 34.929 11.884 34.921 C 11.364 34.921 10.857 34.893 10.356 34.836 C 13.291 36.72 16.706 37.72 20.195 37.715 C 32.002 37.715 38.459 27.934 38.459 19.457 C 38.459 19.175 38.454 18.898 38.44 18.62 C 39.7 17.716 40.785 16.592 41.644 15.301 Z " fill="rgb(0,0,0)"/>
    </svg>
  );
}

export default Twitter;