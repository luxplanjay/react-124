# Заняття 8 - Форми з Formik

- Бібліотека [Formik](https://formik.org/)
- Контейнер форми `Formik` та `Form`
  - Пропс `initialValues`
  - Пропс `onSubmit`
- Поля форми `Field`
  - Атрибут `name`
- Стилізація компонентів `Formik`
- Типізація `initialValues`
- Параметри `values` та `actions` у `onSubmit`
- Типи полів через пропс `as`
- Доступ до властивостей `Formik` у JSX через Render Prop
- Валідація з [`Yup`](https://github.com/jquense/yup)
  - Схема валідаціі
  - Можливі аргументи функції-валідатора
  - Пропс `validationSchema`
- Компонент `ErrorMessage`
  - Пропс `component`

## Повна форма

```tsx
export default function OrderForm() {
  const fieldId = useId();

  return (
    <form className={css.form}>
      <button type="submit" className={css.button}>
        Place order
      </button>
    </form>
  );
}
```
