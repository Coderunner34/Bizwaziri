export function MantaRayLogo({ className = "w-10 h-10" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Manta Ray Body */}
      <path
        d="M50 30 C30 30, 20 40, 15 50 C10 60, 12 70, 18 75 C24 80, 35 82, 50 80 C65 82, 76 80, 82 75 C88 70, 90 60, 85 50 C80 40, 70 30, 50 30 Z"
        fill="currentColor"
        opacity="0.9"
      />
      
      {/* Left Wing */}
      <path
        d="M15 50 C10 48, 5 46, 2 48 C-1 50, -2 54, 1 58 C4 62, 10 64, 15 62 C18 60, 18 55, 15 50 Z"
        fill="currentColor"
      />
      
      {/* Right Wing */}
      <path
        d="M85 50 C90 48, 95 46, 98 48 C101 50, 102 54, 99 58 C96 62, 90 64, 85 62 C82 60, 82 55, 85 50 Z"
        fill="currentColor"
      />
      
      {/* Head/Mouth Area */}
      <ellipse cx="50" cy="35" rx="12" ry="8" fill="currentColor" opacity="0.7" />
      
      {/* Eyes */}
      <circle cx="43" cy="38" r="2" fill="white" />
      <circle cx="57" cy="38" r="2" fill="white" />
      
      {/* Tail */}
      <path
        d="M50 80 Q48 88, 50 95 M50 80 Q52 88, 50 95"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        fill="none"
      />
      
      {/* Decorative Spots */}
      <circle cx="40" cy="55" r="3" fill="white" opacity="0.3" />
      <circle cx="60" cy="55" r="3" fill="white" opacity="0.3" />
      <circle cx="50" cy="60" r="2" fill="white" opacity="0.3" />
    </svg>
  );
}
