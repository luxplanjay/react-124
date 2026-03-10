/**
 * - Union
 * - Літеральні типи
 */

type PromiseStatus = "pending" | "fulfilled" | "rejected";

let promiseStatus: PromiseStatus;

promiseStatus = "rejected";

/***************** 1 *****************/

type OrderStatus = "pending" | "shipped" | "delivered" | "canceled";

let status: OrderStatus = "shipped";

/***************** 2 *****************/

// delivery: "drone", "courier", "pickup"
// deliveryTime: "morning", "afternoon", "evening"

type Delivery = "drone" | "courier" | "pickup";
type DeliveryTime = "morning" | "afternoon" | "evening";

interface Order {
  username: string;
  email: string;
  total: number;
  delivery: Delivery;
  deliveryTime: DeliveryTime;
  status: OrderStatus;
}

const order: Order = {
  username: "Jacob",
  email: "j.mercer@mail.com",
  total: 120,
  delivery: "courier",
  deliveryTime: "afternoon",
  status: "shipped",
};
