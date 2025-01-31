import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { IInputState } from "@/components/input/useInput";
import Input from "@/components/input";
import Logo from "@/components/svg/logo";
import { useAppDispatch } from "@/store/hooks/hook";
import { postLoginApi } from "@/store/slices/auth/auth.api";

export default function Login() {
  const [password, setPassword] = useState<IInputState>({ value: "" });
  const [email, setEmail] = useState<IInputState>({ value: "" });
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(postLoginApi({ adminEmail: email.value, adminPassword: password.value })).then(
      (res) => {
        if (res.meta.requestStatus === "rejected") return;
        navigate("/overview");
      },
    );
  };

  return (
    <div>
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div className="flex flex-col items-center justify-center gap-5 sm:mx-auto sm:w-full sm:max-w-sm">
          <Link to={"/dashboard"}>
            <Logo className="w-48 py-3 text-primary" />
          </Link>
          <h2 className="text-center text-2xl/9 font-bold tracking-tight">Login</h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form onSubmit={handleSubmit} className="space-y-6">
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
              <div className="flex items-center justify-between">
                <label htmlFor="password" className="block text-sm/6 font-medium">
                  Password
                </label>
                <div className="text-sm">
                  <Link
                    to="/forgot-password"
                    className="font-semibold text-primary hover:text-primary/80"
                  >
                    Forgot password?
                  </Link>
                </div>
              </div>
              <div className="mt-2">
                <Input
                  setState={setPassword}
                  state={password}
                  name="password"
                  type="password"
                  required
                  minLength={5}
                  placeholder="Password"
                  autoComplete="current-password"
                />
              </div>
            </div>

            <div>
              <button type="submit" className="btn-primary">
                Sign in
              </button>
            </div>
          </form>

          {/* <p className="mt-10 text-center text-sm/6 text-gray-500">
                        Not an member?{" "}
                        <a
                            href="#"
                            className="font-semibold text-indigo-600 hover:text-indigo-500"
                        >
                            Contact us
                        </a>
                    </p> */}
        </div>
      </div>
    </div>
  );
}
