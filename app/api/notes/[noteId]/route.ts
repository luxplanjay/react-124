import { NextRequest, NextResponse } from "next/server";
import { api, ApiError, createErrorResponse } from "@/app/api/api";

type Props = {
  params: Promise<{ noteId: string }>;
};

// locahost:3000/api/notes/:noteId > https://next-v1-notes-api.goit.study/notes/:noteId
export async function GET(request: NextRequest, { params }: Props) {
  try {
    const { noteId } = await params;
    const { data } = await api.get(`/notes/${noteId}`);
    return NextResponse.json(data);
  } catch (error) {
    return createErrorResponse(error as ApiError);
  }
}
