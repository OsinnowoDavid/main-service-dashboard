export default function AtmCard({ className }: { className?: string }) {
  return (
    <>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="1em"
        height="1em"
        viewBox="0 0 32 32"
        className={className}
      >
        <path
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M11 20h8M3 13h26m-6 7h2M5 7C4 7 3 8 3 9v14c0 1 1 2 2 2h22c1 0 2-1 2-2V9c0-1-1-2-2-2z"
        ></path>
      </svg>
    </>
  );
}
