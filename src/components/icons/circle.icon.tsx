import { useEffect, useState } from "react";

export default function CircleSVG() {
  const [isAnimated, setIsAnimated] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsAnimated(true);
    }, 50);
    return () => clearTimeout(timer);
  }, []);

  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 32 32"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle
        cx="16"
        cy="16"
        r="12"
        fill="none"
        stroke="currentColor"
        strokeWidth="4"
        strokeDasharray="75.398"
        strokeDashoffset={isAnimated ? 0 : 75.398}
        style={{
          transition: "stroke-dashoffset 0.5s ease",
        }}
      />
    </svg>
  );
}
