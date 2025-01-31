import axiosInstance from "@/config/axios";

export const postLoginService = async (credentials: {
  adminEmail: string;
  adminPassword: string;
}) => {
  const response = await axiosInstance.post("/admin/login", credentials);
  return response;
};

export const postLogoutService = async () => {
  const response = await axiosInstance.post("/admin/logout", {});
  return response;
};
