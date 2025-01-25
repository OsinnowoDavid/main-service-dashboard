export default function Truck({ className }: { className?: string }) {
  return (
    <>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="1em"
        height="1em"
        viewBox="0 0 256 256"
        className={className}
      >
        <path
          fill="currentColor"
          d="m253.57 117.78l-14-35a13.93 13.93 0 0 0-13-8.8H190V64a6 6 0 0 0-6-6H32a14 14 0 0 0-14 14v112a14 14 0 0 0 14 14h18.6a30 30 0 0 0 58.8 0h53.2a30 30 0 0 0 58.8 0H240a14 14 0 0 0 14-14v-64a6 6 0 0 0-.43-2.22M190 86h36.58a2 2 0 0 1 1.86 1.26l10.7 26.74H190ZM30 72a2 2 0 0 1 2-2h146v68H30Zm50 138a18 18 0 1 1 18-18a18 18 0 0 1-18 18m82.6-24h-53.2a30 30 0 0 0-58.8 0H32a2 2 0 0 1-2-2v-34h148v15.48A30.1 30.1 0 0 0 162.6 186m29.4 24a18 18 0 1 1 18-18a18 18 0 0 1-18 18m50-26a2 2 0 0 1-2 2h-18.6a30.05 30.05 0 0 0-29.4-24c-.67 0-1.34 0-2 .07V126h52Z"
        ></path>
      </svg>
    </>
  );
}
