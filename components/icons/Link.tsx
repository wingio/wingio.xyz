import { FunctionComponent, SVGProps } from "react";


const Link: FunctionComponent<SVGProps<SVGSVGElement>> = (props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
      viewBox="0 0 50 50" 
      {...props}
    >
      <path d=" M 37.45 37.45 L 12.55 37.45 L 12.55 12.55 L 25 12.55 L 25 8.993 L 12.55 8.993 C 10.585 8.993 8.993 10.585 8.993 12.55 L 8.993 37.45 C 8.993 39.415 10.585 41.007 12.55 41.007 L 37.45 41.007 C 39.407 41.007 41.007 39.407 41.007 37.45 L 41.007 25 L 37.45 25 L 37.45 37.45 Z  M 28.557 8.993 L 28.557 12.55 L 34.942 12.55 L 17.459 30.033 L 19.967 32.541 L 37.45 15.058 L 37.45 21.443 L 41.007 21.443 L 41.007 8.993 L 28.557 8.993 Z " fill="rgb(0,0,0)"/>
    </svg>
  );
}

export default Link;