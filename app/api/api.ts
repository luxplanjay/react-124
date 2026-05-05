import axios, { AxiosError } from "axios";
import { NextResponse } from "next/server";

export const api = axios.create({
  baseURL: "https://next-v1-notes-api.goit.study",
  withCredentials: true,
});

export type ApiError = AxiosError<{ error: string }>;

export const createErrorResponse = (error: ApiError) => {
  return NextResponse.json(
    {
      error: error.response?.data?.error ?? error.message,
    },
    { status: error.status },
  );
};
