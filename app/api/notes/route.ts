import { NextRequest, NextResponse } from "next/server";
import { api, ApiError, createErrorResponse } from "@/app/api/api";

// GET localhost:300/api/notes > https://next-v1-notes-api.goit.study/notes
export async function GET(request: NextRequest) {
  try {
    const categoryId = request.nextUrl.searchParams.get("categoryId");
    const { data } = await api.get("/notes", {
      params: { categoryId },
    });
    return NextResponse.json(data);
  } catch (error) {
    return createErrorResponse(error as ApiError);
  }
}

// POST localhost:300/api/notes > POST https://next-v1-notes-api.goit.study/notes
export async function POST(request: NextRequest) {
  try {
    // Отримуємо дані з тіла запиту
    const body = await request.json();
    // Передаємо їх далі на бекенд нотаток
    const { data } = await api.post("/notes", body);
    return NextResponse.json(data);
  } catch (error) {
    return createErrorResponse(error as ApiError);
  }
}
