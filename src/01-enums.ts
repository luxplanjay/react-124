/**
 * Перелічення (enum) - це список іменованих констант, які можна використовувати як значення, а не тип.
 *
 * - Union type (наприклад: "pending" | "fulfilled") - легший і часто кращий вибір,
 *   якщо вам потрібен тільки набір допустимих типів.
 * - Enum створює реальний об'єкт в рантаймі (корисно для значень, які
 *   потрібно перевіряти або передавати як значення в коді).
 *
 * Правило: якщо не потрібен runtime-об'єкт - візьміть union type.
 */

/* ---------- 1. Union type vs Enum (строкові значення) ---------- */
// Рекомендується починати з union type:
type StatusUnion = "pending" | "fulfilled" | "rejected";

// Використання union type (тип лише для перевірки компілятором):
let s1: StatusUnion = "fulfilled";
// s1 = "unknown"; // помилка: невалідне значення

// Якщо потрібен runtime-об'єкт (наприклад для перебору або передачі в коді):
enum StatusEnum {
  Pending = "pending",
  Fulfilled = "fulfilled",
  Rejected = "rejected",
}

// Використання enum (є значення в runtime):
let s2: StatusEnum = StatusEnum.Pending;

/* ---------- 2. Numeric enums ---------- */

enum HTTPCode {
  Success = 200,
  Created = 201,
  BadRequest = 400,
  ServerError = 500,
}

const code: HTTPCode = HTTPCode.Created;

/* ---------- 3. String enums (стабільні і зрозумілі) ---------- */
enum Role {
  Admin = "admin",
  User = "user",
  Guest = "guest",
}

interface User {
  username: string;
  role: Role; // використовуємо enum як тип і як значення
}

const user: User = {
  username: "jacob",
  role: Role.Guest,
};

if (user.role === Role.Admin) {
  console.log("User is admin");
}
