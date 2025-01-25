export default function CheckedCircle({ className }: { className?: string }) {
  return (
    <>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="1em"
        height="1em"
        viewBox="0 0 24 24"
        className={className}
      >
        <g fill="none" stroke="currentColor">
          <circle cx={12} cy={12} r={9}></circle>
          <path d="m8 12l3 3l5-6"></path>
        </g>
      </svg>
    </>
  );
}
