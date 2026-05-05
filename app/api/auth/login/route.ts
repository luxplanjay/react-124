import { NextRequest, NextResponse } from "next/server";
import { api, ApiError, createErrorResponse } from "../../api";
import { parse } from "cookie";
import { cookies } from "next/headers";

// localhost:3000/api/auth/login > POST https://next-v1-notes-api.goit.study/auth/login
export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    // Виконуємо запит до API
    const apiRes = await api.post("auth/login", body);

    // Ініціалізуємо cookieStore
    const cookieStore = await cookies();
    // Дістаємо set-cookie з хедерів відповіді
    const setCookie = apiRes.headers["set-cookie"];

    if (setCookie) {
      // Якщо set-cookie — масив, беремо як є, інакше примусово робимо масив
      const cookieArray = Array.isArray(setCookie) ? setCookie : [setCookie];

      // Проходимо по кожному cookie
      for (const cookieStr of cookieArray) {
        const parsed = parse(cookieStr);

        // Створюємо опції для cookie
        const options = {
          expires: parsed.Expires ? new Date(parsed.Expires) : undefined,
          path: parsed.Path,
          maxAge: Number(parsed["Max-Age"]),
        };

        // Встановлюємо токени
        if (parsed.accessToken) {
          cookieStore.set("accessToken", parsed.accessToken, options);
        }
        if (parsed.refreshToken) {
          cookieStore.set("refreshToken", parsed.refreshToken, options);
        }
      }
      return NextResponse.json(apiRes.data);
    }

    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  } catch (error) {
    return createErrorResponse(error as ApiError);
  }
}
