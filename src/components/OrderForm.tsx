import { useId } from "react";
import { Formik, Form, Field, type FormikHelpers, ErrorMessage } from "formik";
// namespace import
import * as Yup from "yup";
import css from "./OrderForm.module.css";

interface FormValues {
  username: string;
  email: string;
  delivery: "pickup" | "courier" | "drone";
  restrictions: ("vegan" | "gluten-free" | "nut-free")[];
  deliveryTime: "" | "morning" | "afternoon" | "evening";
  message: string;
}

const OrderFormSchema = Yup.object().shape({
  username: Yup.string()
    .min(3, "Username too short")
    .required("This is a required field!"),
  email: Yup.string().email().required("Please enter email!!!"),
  delivery: Yup.string()
    .oneOf(["pickup", "courier", "drone"], "Invalid delivery method")
    .required(),
  restrictions: Yup.array().of(Yup.string()),
  deliveryTime: Yup.string()
    .oneOf(["morning", "afternoon", "evening"])
    .required("Please select delivery time"),
  message: Yup.string().min(10).max(200),
});

const initialValues: FormValues = {
  username: "",
  email: "",
  delivery: "pickup",
  restrictions: [],
  deliveryTime: "",
  message: "",
};

export default function OrderForm() {
  const fieldId = useId();

  const handleSubmit = (
    values: FormValues,
    formikHelpers: FormikHelpers<FormValues>,
  ) => {
    console.log("Submit", values);
    formikHelpers.resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={OrderFormSchema}
      onSubmit={handleSubmit}
    >
      <Form className={css.form}>
        <fieldset className={css.fieldset}>
          <legend className={css.legend}>Client Info</legend>
          <label htmlFor={`${fieldId}-username`} className={css.label}>
            Name
          </label>
          <Field
            type="text"
            name="username"
            id={`${fieldId}-username`}
            className={css.input}
          />
          <ErrorMessage
            name="username"
            component="span"
            className={css.error}
          />
          <label htmlFor={`${fieldId}-email`} className={css.label}>
            Email
          </label>
          <Field
            type="email"
            name="email"
            id={`${fieldId}-email`}
            className={css.input}
          />
          <ErrorMessage name="email" component="span" className={css.error} />
        </fieldset>

        <fieldset className={css.fieldset}>
          <legend className={css.legend}>Delivery method</legend>

          <label className={css.option}>
            <Field type="radio" name="delivery" value="pickup" />
            Pickup
          </label>
          <label className={css.option}>
            <Field type="radio" name="delivery" value="courier" />
            Courier
          </label>
          <label className={css.option}>
            <Field type="radio" name="delivery" value="drone" />
            Drone delivery
          </label>
          <ErrorMessage
            name="delivery"
            component="span"
            className={css.error}
          />
        </fieldset>

        <fieldset className={css.fieldset}>
          <legend className={css.legend}>Dietary restrictions</legend>

          <label className={css.option}>
            <Field type="checkbox" name="restrictions" value="vegan" />
            Vegan
          </label>
          <label className={css.option}>
            <Field type="checkbox" name="restrictions" value="gluten-free" />
            Gluten-free
          </label>
          <label className={css.option}>
            <Field type="checkbox" name="restrictions" value="nut-free" />
            Nut-free
          </label>
          <ErrorMessage
            name="restrictions"
            component="span"
            className={css.error}
          />
        </fieldset>

        <label htmlFor={`${fieldId}-deliveryTime`} className={css.label}>
          Preferred delivery time
        </label>
        <Field
          as="select"
          name="deliveryTime"
          id={`${fieldId}-deliveryTime`}
          className={css.input}
        >
          <option value="" disabled>
            -- Choose delivery time --
          </option>
          <option value="morning">Morning (8:00-12:00)</option>
          <option value="afternoon">Afternoon (12:00-16:00)</option>
          <option value="evening">Evening (16:00-20:00)</option>
        </Field>
        <ErrorMessage
          name="deliveryTime"
          component="span"
          className={css.error}
        />

        <label htmlFor={`${fieldId}-message`} className={css.label}>
          Additional message
        </label>
        <Field
          as="textarea"
          name="message"
          rows={4}
          id={`${fieldId}-message`}
          className={css.textarea}
        ></Field>
        <ErrorMessage name="message" component="span" className={css.error} />

        <button type="submit" className={css.button}>
          Place order
        </button>
      </Form>
    </Formik>
  );
}
