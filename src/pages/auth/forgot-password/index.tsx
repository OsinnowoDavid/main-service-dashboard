import Input from "@/components/input";
import { IInputState } from "@/components/input/useInput";
import Logo from "@/components/svg/logo";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function ForgotPassword() {
  const [email, setEmail] = useState<IInputState>({ value: "" });

  return (
    <div>
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div className="flex flex-col items-center justify-center gap-5 sm:mx-auto sm:w-full sm:max-w-sm">
          <Link to={"/dashboard"}>
            <Logo className="w-48 py-3 text-primary" />
          </Link>
          <h2 className="text-center text-2xl/9 font-bold tracking-tight">Forgot Password</h2>
          <p className="text-center text-sm/6 text-textcolor/90">
            Enter your email address and we'll send you a link to reset your password
          </p>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form action="#" method="POST" className="space-y-6">
            <div>
              <label htmlFor="email" className="block text-sm/6 font-medium">
                Email address
              </label>
              <div className="mt-2">
                <Input
                  setState={setEmail}
                  state={email}
                  name="email"
                  type="email"
                  required={true}
                  placeholder="Email address"
                  autoComplete="email"
                />
              </div>
            </div>

            <div>
              <button type="submit" className="btn-primary">
                Submit
              </button>
            </div>
          </form>

          <p className="mt-10 text-center text-sm/6 text-gray-500">
            Already Have an Account?{" "}
            <Link to="/login" className="font-semibold text-primary hover:text-primary/75">
              Login
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
