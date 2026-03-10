/**
 * - Типізація масивів: тип[] та Array<тип>
 * - Підказки методів та властивостей
 * - Типізація масиву об'єктів
 */

/***************** 1 *****************/
const planets: string[] = [
  "Mercury",
  "Venus",
  "Earth",
  "Mars",
  "Jupiter",
  "Saturn",
  "Uranus",
  "Neptune",
];

/***************** 2 *****************/

interface Order {
  email: string;
  total: number;
}

const orders: Order[] = [
  { email: "j.mercer@mail.com", total: 120 },
  { email: "emily.watts@mail.com", total: 85 },
  { email: "liam.smith@mail.com", total: 200 },
  { email: "sophia.jones@mail.com", total: 150 },
  { email: "noah.brown@mail.com", total: 95 },
];

orders.push({ email: "my@mail.com", total: 5 });

const emails = orders.map((singleOrder) => singleOrder.email);

const bigOrders = orders.filter((singleOrder) => singleOrder.total > 100);
