import { useEffect, useState } from "react";

export default function CrossSVG() {
  const [isAnimated, setIsAnimated] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsAnimated(true);
    }, 50);
    return () => clearTimeout(timer);
  }, []);

  return (
    <svg
      width="36"
      height="36"
      viewBox="0 0 32 32"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fill="none"
        d="M21.19 10.81L10.81 21.19M21.19 21.19L10.81 10.81"
        stroke="currentColor"
        strokeWidth="6"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeDasharray="40"
        strokeDashoffset={isAnimated ? 0 : 40}
        style={{
          transition: "stroke-dashoffset 0.5s ease",
        }}
      />
    </svg>
  );
}
