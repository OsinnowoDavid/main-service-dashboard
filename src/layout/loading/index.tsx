import SpinnerSemicircle from "@/components/svg/spinner-semicircle";

export const LoadingPopUp = () => {
  return (
    <div className="fixed inset-0 z-10 flex flex-col items-center bg-white/80">
      <div className="my-auto flex h-full max-h-96 w-full flex-col items-center justify-center gap-8 p-6">
        <SpinnerSemicircle className="animate-spin text-primary" />
      </div>
    </div>
  );
};
