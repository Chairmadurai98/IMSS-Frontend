import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import axios, { AxiosResponse } from "axios";
import { getServerSession, Session } from "next-auth";

const { API_BASE_URL } = process.env;

const AXIOSSERVER = axios.create({
  baseURL: API_BASE_URL,
});

AXIOSSERVER.interceptors.request.use(async (config) => {
  //Get Auth Token in server side using next-auth
  const session: Session | null = await getServerSession(authOptions);
  const token = session?.user?.token || null;
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

type Res = AxiosResponse["data"];

AXIOSSERVER.interceptors.response.use(
  (response) => Promise.resolve(response?.data) as Promise<Res>,
  (error) => {
    return Promise.reject(
      error?.response?.data || error?.response
    ) as Promise<Res>;
  }
);

export default AXIOSSERVER;
