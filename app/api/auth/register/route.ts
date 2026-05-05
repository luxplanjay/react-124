import { NextRequest, NextResponse } from "next/server";
import { api, ApiError, createErrorResponse } from "@/app/api/api";
import { cookies } from "next/headers";
import { parse } from "cookie";

// localhost:3000/api/auth/register > POST https://next-v1-notes-api.goit.study/auth/register
export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const res = await api.post("auth/register", body);

    // Отримуємо інстанс для роботи з cookies
    const cookieStore = await cookies();
    // Отримуємо значення set-cookie з хедерів
    const setCookie = res.headers["set-cookie"];

    // Додаємо перевірку існування setCookie
    if (setCookie) {
      // Примусово робимо масив
      const cookieArray = Array.isArray(setCookie) ? setCookie : [setCookie];
      /**
       * [
       * "accessToken=eyJhb...; Path=/; Max-Age=900; Expires=Fri, 01 Sep 2025 13:44:59 GMT; HttpOnly",
       * "refreshToken=eyJhb...; Path=/; Max-Age=900; Expires=Fri, 01 Sep 2025 13:44:59 GMT; HttpOnly",
       * ]
       */

      // Проходимось по масиву та парсимо кожне значення
      // щоб отримати результат у вигляді обʼєкту
      for (const cookieStr of cookieArray) {
        const parsed = parse(cookieStr);
        // { accessToken: "qweqe", Path: "/"}

        // Створюємо налаштування для cookies
        const options = {
          expires: parsed.Expires ? new Date(parsed.Expires) : undefined,
          path: parsed.Path,
          maxAge: Number(parsed["Max-Age"]),
        };

        // Методом cookieStore.set додаємо кукі до нашого запиту
        if (parsed.accessToken) {
          // cookieStore.set('імʼя ключа',  'значення токену',  додаткові налаштування)
          cookieStore.set("accessToken", parsed.accessToken, options);
        }
        if (parsed.refreshToken) {
          cookieStore.set("refreshToken", parsed.refreshToken, options);
        }
      }

      // Тільки якщо є setCookie повертаємо результат
      return NextResponse.json(res.data);
    }
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  } catch (error) {
    return createErrorResponse(error as ApiError);
  }
}
