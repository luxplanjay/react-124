# Заняття 15

- Layout Metadata (Global SEO setup)
  - title
  - description
- [Open graph tags](https://socialsharepreview.com/)
  - title
  - description
  - type
  - url
  - siteName
  - [opengraph-image](https://nextjs.org/docs/app/api-reference/file-conventions/metadata/opengraph-image)
- Metadata for individual pages
- Dynamic pages SEO with generateMetadata
- [Sitemap](https://nextjs.org/docs/app/api-reference/file-conventions/metadata/sitemap)
- [Robots](https://nextjs.org/docs/app/api-reference/file-conventions/metadata/robots)

## Data fetching

### SSG (Static Site Generation)

Фетчить дані в момент білда проєкта і зберігає звичайну статичну сторінку на хостингу, яку і віддає браузеру.

Для сторінок якім майже не потрібно оновлення. Наприклад сторінка поста блога або сторінка для маркетингу якогось продукта.

```text
cache: force-cahce
```

Обов'яково кешує дані.

### SSR (Server Side Rendering)

Фечить дані на кожному запиті до сервера, кожен раз створює нову сторінку.

Добре підходить для сторінок які оновлюються часто та залежать від даних корустивача.

```text
cache: no-store
```

Каже нексту не кешувати дані.

### ISR (Incremental Static REgeneration)

Гібрид між двома попередніми, добре підходить для сторінок які можуть змінюватись з часом, але не на кожен запит.

Наприклад сторінка розкладу івентів.

```text
next: { revalidate: 10 }
```
