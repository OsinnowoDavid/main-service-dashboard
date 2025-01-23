/* eslint-disable @typescript-eslint/no-explicit-any */
import useInput, { IInputProps, ITextAreaProps } from "./useInput";
import { DetailedHTMLProps, TextareaHTMLAttributes } from "react";
import { formatNumber } from "@/utils/format-number";
import Eye from "../svg/eye";
import EyeOff from "../svg/eye-off";

export default function Input({
    type,
    name,
    placeholder,
    required = false,
    minLength,
    maxLength,
    state,
    setState,
    ...rest
}: IInputProps) {
    const { seePassword, inputType, validateOnBlur, setSeePassword } = useInput(
        type,
        state,
        required,
        setState,
        minLength,
        maxLength
    );

    return (
        <div className="relative w-full h-full">
            {type === "text-area" ? (
                <>
                    {/* //* TEXT AREA */}
                    <TextArea
                        name={name}
                        state={state}
                        setState={setState}
                        placeholder={placeholder}
                        required={required}
                        minLength={minLength}
                        maxLength={maxLength}
                        {...rest}
                    />
                </>
            ) : (
                <>
                    {/* //* INPUT */}
                    <input
                        type={inputType}
                        className={`block w-full rounded-md bg-white px-3 py-1.5 text-base text-textcolor outline-primary -outline-offset-1 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 border-2 focus:ring-2 ring-primary/25 sm:text-sm/6 ${
                            state.error ? "border-red-600" : "border-dark/20"
                        } ${type === "password" ? "pr-12" : "pr-3"}`}
                        name={name}
                        id={name}
                        {...rest}
                        placeholder={placeholder}
                        required={required}
                        value={state.value}
                        onChange={(e) => {
                            setState((prev: any) => ({
                                ...prev,
                                value:
                                    type === "amount"
                                        ? formatNumber(e.target.value)
                                        : e.target.value,
                                error: false,
                                dirty: true,
                            }));
                        }}
                        onBlur={validateOnBlur}
                        // eslint-disable-next-line @typescript-eslint/no-unused-vars
                        onFocus={(_e) =>
                            setState((prev: any) => ({ ...prev, dirty: true }))
                        }
                    />
                </>
            )}

            {/* //* PASSWORD EYE */}
            {type === "password" && (
                <div
                    onClick={() => setSeePassword(!seePassword)}
                    className={`absolute right-3 top-2 h-6 w-6 cursor-pointer rounded-2xl ${
                        state.message ? "top-2" : "top-2"
                    }`}
                >
                    {seePassword ? (
                        <Eye className="h-6 w-6" />
                    ) : (
                        <EyeOff className="h-6 w-6" />
                    )}
                </div>
            )}
            {/* //* ERROR MESSAGE */}
            <p className="text-sm text-red-600">{state.message}</p>
        </div>
    );
}

function TextArea({
    name,
    placeholder,
    required = false,
    minLength,
    maxLength,
    state,
    setState,
    ...rest
}: ITextAreaProps) {
    const { validateOnBlur } = useInput(
        "text",
        state,
        required,
        setState,
        minLength,
        maxLength
    );
    return (
        <>
            <textarea
                className={`w-full resize-none rounded-md border border-dark/20 bg-light px-4 py-3 outline-none ring-secondary/30 focus:ring-4 ${
                    state.error ? "border-red-600" : "border-dark/20"
                }`}
                name={name}
                id={name}
                placeholder={placeholder}
                required={required}
                rows={5}
                value={state.value}
                onChange={(e) => {
                    setState((prev: any) => ({
                        ...prev,
                        value: e.target.value,
                        error: false,
                        dirty: true,
                    }));
                }}
                onBlur={validateOnBlur}
                // eslint-disable-next-line @typescript-eslint/no-unused-vars
                onFocus={(_e: any) =>
                    setState((prev: any) => ({ ...prev, dirty: true }))
                }
                {...(rest as DetailedHTMLProps<
                    TextareaHTMLAttributes<HTMLTextAreaElement>,
                    HTMLTextAreaElement
                >)}
            />
        </>
    );
}
