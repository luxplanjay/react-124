/**
 * - Типізація об'єктів
 * - Використання interface
 * - Опціональні (?) та readonly поля
 */

interface User {
  readonly id: string;
  username: string;
  email: string;
  isOnline: boolean;
  friendsCount?: number;
  age: number;
}

const jacob: User = {
  id: "id-123", // тільки для читання
  username: "Jacob",
  email: "j.mercer@mail.com",
  isOnline: false,
  friendsCount: 100, // опціональне поле
  age: 30,
};

const poly: User = {
  id: "id-456", // тільки для читання
  username: "Poly",
  email: "p.makko@mail.com",
  isOnline: true,
  age: 20,
};
