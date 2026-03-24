import { useId } from "react";
import type { Order } from "../../types/order";
import css from "./OrderForm.module.css";

interface OrderFormProps {
  onOrder: (newOrder: Order) => void;
}

export default function OrderForm({ onOrder }: OrderFormProps) {
  const id = useId();

  const handleSubmit = (formData: FormData) => {
    const values: Order = {
      username: formData.get("username") as string,
      email: formData.get("email") as string,
      delivery: formData.get("delivery") as string,
    };

    onOrder(values);
  };

  return (
    <form className={css.form} action={handleSubmit}>
      <fieldset className={css.fieldset}>
        <legend className={css.legend}>Client info:</legend>
        <label className={css.label} htmlFor={`username-${id}`}>
          Name
        </label>
        <input
          className={css.input}
          type="text"
          name="username"
          id={`useranme-${id}`}
        />

        <label className={css.label} htmlFor={`email-${id}`}>
          Email
        </label>
        <input
          className={css.input}
          type="email"
          name="email"
          id={`email-${id}`}
        />
      </fieldset>

      <fieldset className={css.fieldset}>
        <legend className={css.legend}>Delivery method:</legend>
        <label className={css.option}>
          <input type="radio" name="delivery" value="pickup" defaultChecked />
          Pickup
        </label>
        <label className={css.option}>
          <input type="radio" name="delivery" value="courier" />
          Courier
        </label>
        <label className={css.option}>
          <input type="radio" name="delivery" value="drone" />
          Drone delivery
        </label>
      </fieldset>

      <button type="submit" className={css.button}>
        Place order
      </button>
    </form>
  );
}
