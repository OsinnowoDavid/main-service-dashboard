export default function StatusIndicator({
  statusIndicator,
  ...rest
}: {
  statusIndicator: string | boolean;
}) {
  const status = String(statusIndicator).toLowerCase();

  return (
    <button
      className={`rounded-md border-gray-500/50 bg-gray-500/10 px-2 py-1 text-xs capitalize text-gray-500 ${
        status === "default"
          ? "border-gray-500/50 bg-gray-500/10 text-gray-500"
          : status === "claimed"
            ? "bg-primary-500/10 border-primary-500/50 text-primary-500"
            : status === "false"
              ? "border-red-500/50 bg-red-500/10 text-red-500"
              : status === "true"
                ? "border-green-500/50 bg-green-500/10 text-green-500"
                : status === "unclaimed"
                  ? "border-red-500/50 bg-red-500/10 text-red-500"
                  : status === "approved"
                    ? "border-green-500/50 bg-green-500/10 text-green-500"
                    : status === "active"
                      ? "border-green-500/50 bg-green-500/10 text-green-500"
                      : status === "pending"
                        ? "border-yellow-500/50 bg-yellow-500/10 text-yellow-500"
                        : status === "declined"
                          ? "border-red-500/50 bg-red-500/10 text-red-500"
                          : status === "inactive"
                            ? "border-red-500/50 bg-red-500/10 text-red-500"
                            : null
      } `}
      {...rest}
    >
      {status}
    </button>
  );
}
