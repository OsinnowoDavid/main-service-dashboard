export default function DashboardSquares({
    className,
}: {
    className?: string;
}) {
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
                    d="M104 44H56a12 12 0 0 0-12 12v48a12 12 0 0 0 12 12h48a12 12 0 0 0 12-12V56a12 12 0 0 0-12-12m4 60a4 4 0 0 1-4 4H56a4 4 0 0 1-4-4V56a4 4 0 0 1 4-4h48a4 4 0 0 1 4 4Zm92-60h-48a12 12 0 0 0-12 12v48a12 12 0 0 0 12 12h48a12 12 0 0 0 12-12V56a12 12 0 0 0-12-12m4 60a4 4 0 0 1-4 4h-48a4 4 0 0 1-4-4V56a4 4 0 0 1 4-4h48a4 4 0 0 1 4 4Zm-100 36H56a12 12 0 0 0-12 12v48a12 12 0 0 0 12 12h48a12 12 0 0 0 12-12v-48a12 12 0 0 0-12-12m4 60a4 4 0 0 1-4 4H56a4 4 0 0 1-4-4v-48a4 4 0 0 1 4-4h48a4 4 0 0 1 4 4Zm92-60h-48a12 12 0 0 0-12 12v48a12 12 0 0 0 12 12h48a12 12 0 0 0 12-12v-48a12 12 0 0 0-12-12m4 60a4 4 0 0 1-4 4h-48a4 4 0 0 1-4-4v-48a4 4 0 0 1 4-4h48a4 4 0 0 1 4 4Z"
                ></path>
            </svg>
        </>
    );
}
