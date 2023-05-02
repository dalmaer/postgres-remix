import { useLocation, useNavigate } from "@remix-run/react";
import { useTransition } from "react";

export default function RefreshButton() {
  const location = useLocation();
  const navigate = useNavigate();
  const [isPending, startTransition] = useTransition();

  return (
    <button
      className={`${
        isPending ? "cursor-not-allowed text-gray-400" : ""
      } text-sm text-gray-500 hover:text-gray-900`}
      disabled={isPending}
      onClick={() => {
        startTransition(() => {
          navigate(location.pathname, { replace: true });
        });
      }}
    >
      {isPending ? "Refreshing..." : "Refresh"}
    </button>
  );
}
