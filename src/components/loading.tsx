import React, { useContext } from "react";
import { ThemeContext } from "styled-components";

const SVG = () => {
  const theme = useContext(ThemeContext);
  return (
    <svg
      width={theme.dotSize}
      height={theme.dotSize}
      preserveAspectRatio="xMidYMid"
      viewBox="0 0 100 100"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle
        cx="50"
        cy="50"
        r="17.567"
        fill="none"
        stroke={theme.primaryColor}
        strokeWidth="8"
      >
        <animate
          attributeName="r"
          begin="-1.282051282051282s"
          calcMode="spline"
          dur="2.564102564102564s"
          keySplines="0 0.2 0.8 1"
          keyTimes="0;1"
          repeatCount="indefinite"
          values="0;35"
        />
        <animate
          attributeName="opacity"
          begin="-1.282051282051282s"
          calcMode="spline"
          dur="2.564102564102564s"
          keySplines="0.2 0 0.8 1"
          keyTimes="0;1"
          repeatCount="indefinite"
          values="1;0"
        />
      </circle>
      <circle
        cx="50"
        cy="50"
        r="32.83"
        fill="none"
        stroke={theme.secondaryColor}
        strokeWidth="8"
      >
        <animate
          attributeName="r"
          calcMode="spline"
          dur="2.564102564102564s"
          keySplines="0 0.2 0.8 1"
          keyTimes="0;1"
          repeatCount="indefinite"
          values="0;35"
        />
        <animate
          attributeName="opacity"
          calcMode="spline"
          dur="2.564102564102564s"
          keySplines="0.2 0 0.8 1"
          keyTimes="0;1"
          repeatCount="indefinite"
          values="1;0"
        />
      </circle>
    </svg>
  );
};

export default SVG;
