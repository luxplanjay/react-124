import { NextResponse } from 'next/server';
import { api, ApiError, createErrorResponse } from '../../api';
import { cookies } from 'next/headers';

export async function GET() {
  const cookieStore = await cookies();

  try {
    const { data } = await api.get('/auth/me', {
      headers: {
        Cookie: cookieStore.toString(),
      },
    });

    return NextResponse.json(data);
  } catch (error) {
    return createErrorResponse(error as ApiError);
  }
}
