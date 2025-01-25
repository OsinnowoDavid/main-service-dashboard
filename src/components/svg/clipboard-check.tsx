export default function ClipboardCheck({ className }: { className?: string }) {
  return (
    <>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="1em"
        height="1em"
        viewBox="0 0 20 20"
        className={className}
      >
        <g fill="currentColor">
          <path
            fillRule="evenodd"
            d="M6.175 2.5a.5.5 0 0 1 .5-.5h6.643a.5.5 0 0 1 .5.5v3.875a.5.5 0 0 1-.5.5H6.675a.5.5 0 0 1-.5-.5zm1 .5v2.875h5.643V3z"
            clipRule="evenodd"
          ></path>
          <path d="M4.5 5v12h11V5h-2V4h2a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1h-11a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1h2v1z"></path>
          <path
            fillRule="evenodd"
            d="M12.284 9.088a.5.5 0 0 1 .128.696l-1.767 2.564a1 1 0 0 1-1.437.222l-1.515-1.175a.5.5 0 1 1 .614-.79L9.82 11.78l1.767-2.564a.5.5 0 0 1 .696-.128"
            clipRule="evenodd"
          ></path>
        </g>
      </svg>
    </>
  );
}
