import { FunctionComponent, SVGProps } from "react";


const About: FunctionComponent<SVGProps<SVGSVGElement>> = (props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
      viewBox="0 0 50 50" 
      {...props}
    >
      <path d=" M 22.917 35.417 L 27.083 35.417 L 27.083 22.917 L 22.917 22.917 L 22.917 35.417 Z  M 25 4.167 C 13.5 4.167 4.167 13.5 4.167 25 C 4.167 36.5 13.5 45.833 25 45.833 C 36.5 45.833 45.833 36.5 45.833 25 C 45.833 13.5 36.5 4.167 25 4.167 Z  M 25 41.667 C 15.813 41.667 8.333 34.188 8.333 25 C 8.333 15.813 15.813 8.333 25 8.333 C 34.188 8.333 41.667 15.813 41.667 25 C 41.667 34.188 34.188 41.667 25 41.667 Z  M 22.917 18.75 L 27.083 18.75 L 27.083 14.583 L 22.917 14.583 L 22.917 18.75 Z " fill="rgb(0,0,0)"/>
    </svg>
  );
}

export default About;