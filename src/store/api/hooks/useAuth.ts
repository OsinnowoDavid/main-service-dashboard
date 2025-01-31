import { useMutation } from "@tanstack/react-query";
import { useAppDispatch } from "@/store/hooks/redux-hook";
import { postLoginService, postLogoutService } from "../services/auth.service";
import toast from "react-hot-toast";
import { AxiosResponse } from "axios";
import { clearAuth, I_auth, setAuth, T_authRoles } from "@/store/slices/auth/auth.slice";

interface I_UserData {
  adminName: string;
  adminEmail: string;
  adminRole: T_authRoles;
  isVerified: boolean;
  updatedAt: string;
  _id: string;
}

interface I_ApiResponseData {
  success: boolean;
  message: string;
  token: string;
  userData: I_UserData;
}

export type T_ApiResponse<T = unknown> = AxiosResponse<T>;

export const useLogin = () => {
  const dispatch = useAppDispatch();

  return useMutation({
    mutationFn: postLoginService,
    onSuccess: (res: T_ApiResponse<I_ApiResponseData>) => {
      const { userData, token } = res.data;
      const auth: I_auth = {
        adminName: userData.adminName,
        adminEmail: userData?.adminEmail,
        adminRole: userData?.adminRole,
        isVerified: userData?.isVerified,
        updatedAt: userData?.updatedAt,
        _id: userData?._id,
        token,
      };
      dispatch(setAuth(auth));
      toast.success("Login successful!");
    },
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    onError: (error: any) => {
      console.log(error);
      const errorMessage = error?.response?.data?.message || "Something went wrong";
      toast.error(errorMessage);
    },
  });
};

export const useLogout = () => {
  const dispatch = useAppDispatch();

  return useMutation({
    mutationFn: postLogoutService,
    onSuccess: () => {
      dispatch(clearAuth());
      toast.success("Logout Success");
    },
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    onError: (error: any) => {
      console.log(error);
      const errorMessage = error?.response?.data?.message || "Something went wrong";
      toast.error(errorMessage);
    },
  });
};
