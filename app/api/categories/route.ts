import { NextResponse } from "next/server";
import { api, ApiError, createErrorResponse } from "@/app/api/api";

// locahost:3000/api/categories > https://next-v1-notes-api.goit.study/categories
export async function GET() {
  try {
    const { data } = await api.get("/categories");
    // Повертаємо те, що відповів бекенд через метод json
    return NextResponse.json(data);
  } catch (error) {
    // У випадку помилки — повертаємо обʼєкт з помилкою
    return createErrorResponse(error as ApiError);
  }
}
