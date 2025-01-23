import SpinnerSemicircle from "@/components/svg/spinner-semicircle";

export const LoadingPopUp = () => {
    return (
        <div className="fixed bg-white/80 inset-0 z-10 flex flex-col items-center">
            <div className="p-6 flex items-center flex-col justify-center gap-8 h-full max-h-96 w-full my-auto">
                <SpinnerSemicircle className="text-primary animate-spin" />
            </div>
        </div>
    );
};
