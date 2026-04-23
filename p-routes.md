# Prompt

```text
You are an expert Next.js 16+ tutor helping me learn Parallel Routes in the App Router.

Your job:
- Teach me Parallel Routes step by step, assuming I know React and basic Next.js App Router fundamentals.
- Focus only on modern Next.js 16+ behavior and terminology.
- Prefer official current Next.js conventions over older blog posts or outdated examples.
- Explain things simply, but do not skip important details.

What to teach me about Parallel Routes:
- What Parallel Routes are
- What a slot is
- Why slots use the `@folder` convention
- Why slots do not affect the URL
- How slots are passed into a shared `layout.tsx`
- How to render multiple route trees at the same time
- When to use Parallel Routes in real apps, especially dashboards and modals
- The difference between Parallel Routes and normal nested routes
- The relationship between Parallel Routes and Intercepting Routes
- How modals are built with Parallel Routes + Intercepting Routes
- How navigation and refresh behavior works with slots
- Why `default.tsx` / `default.js` is required in Next.js 16+
- What happens on soft navigation vs hard navigation / refresh
- Common mistakes and how to debug them

How you should teach:
- Start with the mental model first.
- Then show the folder structure.
- Then show the layout props.
- Then show a minimal working example.
- Then show a realistic modal example.
- Then give me a few small exercises.
- After each explanation, check my understanding with 1 short question.
- When showing code, always explain which file it belongs to.
- Keep examples small and realistic.
- Warn me when something is outdated or was true in older Next.js versions but changed in 16+.
- If I ask something incorrect, correct me directly.

Code style:
- Use TypeScript.
- Use App Router only.
- Use `layout.tsx`, `page.tsx`, `default.tsx`.
- Keep examples minimal but production-shaped.
- Add comments only when they actually help understanding.

Important rules:
- Do not mix Parallel Routes with unrelated advanced topics unless needed.
- Do not assume Pages Router.
- Do not give vague answers like “it just works”.
- Always explain why a file or folder exists.
- If there are multiple valid approaches, say which one is most idiomatic in Next.js 16+.

Use Ukrainian language during this session.
```

## Parallel Routes

У Next.js Parallel Routes — це спосіб одночасно або умовно рендерити кілька сторінок у межах одного layout, використовуючи іменовані слоти через папки формату @folder. Це часто застосовують у дашбордах, складних layout-композиціях і модалках.

## Ментальна модель: що таке Parallel Routes

Спочатку найважливіше.

У звичайних вкладених маршрутах ти мислиш так:

URL визначає один ланцюжок route segment-ів, і цей ланцюжок рендериться як дерево layout → page.

У Parallel Routes мислення інше:

Один layout може мати кілька незалежних областей UI, і кожна з них може рендерити своє власне route-дерево.

Тобто layout уже не обмежується тільки children. Він може отримати, наприклад:

- children
- team
- analytics
- modal

і показати їх одночасно в різних місцях інтерфейсу. Саме це Next.js і називає Parallel Routes.

Просте порівняння

Звичайний nested route:

- є одна основна гілка маршруту;
- URL прямо описує структуру сторінки.

Parallel Routes:

- є кілька іменованих слотів;
- layout вирішує, де який слот показати;
- слот не додає новий сегмент у URL.

⸻

## Що таке slot

У документації Next.js slot — це іменована область усередині layout, яка створюється через папку з префіксом @, наприклад @team або @modal. Потім Next.js передає цей слот у layout.tsx як prop з відповідною назвою.

Приклад ідеї:

- app/dashboard/@team/page.tsx → слот team
- app/dashboard/@analytics/page.tsx → слот analytics

У app/dashboard/layout.tsx ти отримаєш:

```tsx
team: React.ReactNode;
analytics: React.ReactNode;
```

Тобто папка @team не означає “новий URL-сегмент team”.
Вона означає: “у цього layout є іменований слот team”. ￼

Контрольне питання:
Як ти зараз це розумієш: @team — це частина URL чи назва слота для layout?

⸻

## Чому використовується @folder

Конвенція @folder потрібна, щоб Next.js міг відрізнити звичайний route segment від slot. Іменовані слоти створюються саме через @folder, і це офіційна file-system convention для Parallel Routes. ￼

Наприклад:

```text
app/dashboard/@analytics/page.tsx
```

Тут:

- dashboard — це route segment;
- @analytics — це не segment URL, а slot.

Це важливо, бо без такої конвенції Next.js не міг би зрозуміти, чи це ще один маршрут, чи окрема область layout. ￼

⸻

## Чому slots не впливають на URL

Це одна з ключових ідей.

Next.js прямо вказує, що slots не є route segments і не впливають на URL-структуру. Вони існують для композиції layout, а не для побудови адреси сторінки. ￼

Тобто якщо в тебе є така структура:

```text
app/
  dashboard/
    layout.tsx
    page.tsx
    @team/
      page.tsx
    @analytics/
      page.tsx
```

URL не стане таким: `/dashboard/team/analytics`

Ні. URL залишається маршрутом, який визначається звичайними segment-ами, а не слотами. Слоти просто дають layout додаткові React-вузли для рендеру. ￼

Окремо важливий нюанс для майбутнього: в Intercepting Routes вирази типу (.) або (..) рахуються відносно route segment-ів, а не файлової структури, і @slot при цьому не враховується як segment. Це ще раз підкреслює, що слот — не частина URL.

Контрольне питання:
Чому @modal не з’являється в адресному рядку браузера?

⸻

## Як slots передаються в layout.tsx

Коли ти створюєш slot, Next.js передає його в layout як prop. Це офіційна модель роботи Parallel Routes.

Структура папок

```text
app/
  dashboard/
    layout.tsx
    page.tsx
    @team/
      page.tsx
      default.tsx
    @analytics/
      page.tsx
      default.tsx
```

Файл app/dashboard/layout.tsx

```tsx
// app/dashboard/layout.tsx
import type { ReactNode } from "react";

type DashboardLayoutProps = {
  children: ReactNode;
  team: ReactNode;
  analytics: ReactNode;
};

export default function DashboardLayout({
  children,
  team,
  analytics,
}: DashboardLayoutProps) {
  return (
    <div>
      <main>{children}</main>
      <aside>{team}</aside>
      <section>{analytics}</section>
    </div>
  );
}
```

Що тут відбувається

- children — це звичайний дочірній маршрут;
- team — вміст зі слота @team;
- analytics — вміст зі слота @analytics.

Тобто один layout може одночасно рендерити кілька незалежних route tree. Саме в цьому й суть Parallel Routes. ￼

⸻

6. Мінімальний робочий приклад

Ось найменший приклад без модалок, лише щоб відчути механіку.

Структура

```text
app/
  dashboard/
    layout.tsx
    page.tsx
    @team/
      page.tsx
      default.tsx
    @analytics/
      page.tsx
      default.tsx
```

Файл app/dashboard/page.tsx

```tsx
// app/dashboard/page.tsx
export default function DashboardPage() {
  return <h1>Dashboard main content</h1>;
}
```

Файл app/dashboard/@team/page.tsx

```tsx
// app/dashboard/@team/page.tsx
export default function TeamSlotPage() {
  return <div>Team panel</div>;
}
```

Файл app/dashboard/@analytics/page.tsx

```tsx
// app/dashboard/@analytics/page.tsx
export default function AnalyticsSlotPage() {
  return <div>Analytics panel</div>;
}
```

Файл app/dashboard/@team/default.tsx

```tsx
// app/dashboard/@team/default.tsx
export default function Default() {
  return null;
}
```

Файл app/dashboard/@analytics/default.tsx

```tsx
// app/dashboard/@analytics/default.tsx
export default function Default() {
  return null;
}
```

Файл app/dashboard/layout.tsx

```tsx
// app/dashboard/layout.tsx
import type { ReactNode } from "react";

type DashboardLayoutProps = {
  children: ReactNode;
  team: ReactNode;
  analytics: ReactNode;
};

export default function DashboardLayout({
  children,
  team,
  analytics,
}: DashboardLayoutProps) {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "2fr 1fr 1fr",
        gap: "16px",
      }}
    >
      <main>{children}</main>
      <aside>{team}</aside>
      <aside>{analytics}</aside>
    </div>
  );
}
```

Що побачиш

На маршруті /dashboard layout зрендерить:

- основний контент із page.tsx,
- контент слота team,
- контент слота analytics.

Тобто в одному view одночасно показуються кілька незалежних частин маршрутизації. Це і є базовий Parallel Routes use case. ￼

Контрольне питання:
У цьому прикладі team і analytics — це окремі сторінки URL чи окремі props для layout.tsx?

⸻

## Навіщо потрібен default.tsx у Next.js 16+

Це вже дуже важливий сучасний момент.

У Next.js 16 всі слоти Parallel Routes мають мати явний default.js / default.tsx, інакше збірка падає з помилкою. Це окремо зазначено і в upgrade guide, і в повідомленні про помилку.

Чому це потрібно

Під час soft navigation Next.js пам’ятає активний стан кожного слота.
Але під час hard navigation / full page load / refresh Next.js не завжди може відновити активний стан для слотів. У такому випадку він використовує default.tsx як fallback.

Офіційно документація каже:

- default.js використовується як fallback у Parallel Routes;
- під час soft navigation active state slot-ів зберігається;
- під час hard navigation цей state може бути недоступний, тому потрібен fallback.

Що зазвичай повертають у default.tsx

У Next.js 16 офіційно радять два типові варіанти:

- return null;
- або виклик notFound();

Залежно від того, хочеш ти “нічого не показати” чи спеціально зламати невідповідний стан як 404. ￼

⸻

## Soft navigation vs hard navigation / refresh

Це критично для розуміння слотів.

Soft navigation

Це коли ти переходиш усередині застосунку клієнтською навігацією, наприклад через Link. У такому випадку Next.js зберігає активний subpage/state для кожного слота. ￼

Hard navigation / refresh

Це коли:

- ти оновлюєш сторінку;
- відкриваєш URL напряму;
- робиш повне завантаження сторінки.

Тоді Next.js не завжди може зрозуміти, що саме мало бути активним у кожному слоті, і використовує default.tsx для тих слотів, чий стан неможливо відновити. ￼

Саме тому default.tsx у Next.js 16+ вже не опціональний для Parallel Routes — тепер він обов’язковий. ￼

Контрольне питання:
Коли саме Next.js найчастіше звертається до default.tsx: під час soft navigation чи під час hard refresh?

⸻

## Коли реально використовувати Parallel Routes

Офіційна документація та glossary прямо називають типові сценарії:

- dashboards
- modals
- complex layouts ￼

Хороші приклади

1. Дашборд
   Ліва колонка — навігація, центр — головний контент, справа — аналітика або activity feed.
2. Модалки
   Основна сторінка лишається на місці, а модальний контент рендериться в окремому слоті поверх неї.
3. Складні панелі
   Наприклад, admin UI, де різні області інтерфейсу можуть жити напівнезалежно одна від одної.

Коли не треба

Якщо тобі просто потрібен звичайний route hierarchy типу:

- /posts
- /posts/[id]
- /posts/[id]/edit

то найчастіше це звичайні nested routes, а не Parallel Routes. Parallel Routes потрібні тоді, коли layout має декілька одночасних областей рендеру, а не одну. ￼

⸻

## Зв’язок із Intercepting Routes

Поки що коротко, без занурення.

Parallel Routes відповідають на питання:

Де в layout показати альтернативний або додатковий контент?

Intercepting Routes відповідають на питання:

Як завантажити маршрут з іншої частини застосунку всередині поточного layout-контексту?

Офіційна документація каже, що Intercepting Routes можна комбінувати з Parallel Routes для створення модалок, які підтримують deep linking, refresh, back/forward navigation. ￼

Тобто:

- Parallel Routes дають тобі slot, наприклад @modal;
- Intercepting Routes дозволяють підхопити інший маршрут і показати його в цьому слоті, а не як повний перехід сторінки. ￼

⸻

## Типові помилки

### Думати, що @slot — це URL segment

Ні. Це slot для layout, а не частина адреси. ￼

### Забути default.tsx

У Next.js 16+ це вже призводить до build error. ￼

### Плутати Parallel Routes зі звичайною вкладеністю

Якщо тобі не треба кілька незалежних областей layout, то, швидше за все, Parallel Routes не потрібні. ￼

### Плутати файлову структуру з route segment-ами

Особливо це вилізе пізніше з intercepting routes: @slot не рахується як route segment. ￼

⸻

## Що важливо запам’ятати прямо зараз

Parallel Routes — це не “магія для модалок”.
Це базовий механізм, який дозволяє одному layout рендерити кілька іменованих route tree одночасно через props-слоти. Слоти створюються через @folder, не входять у URL і в Next.js 16+ потребують default.tsx для fallback на hard navigation або refresh. ￼

Маленькі вправи

1. Подивись на таку структуру і скажи, які props отримає layout.tsx:

```tsx
app/
  inbox/
    layout.tsx
    page.tsx
    @list/
      page.tsx
      default.tsx
    @preview/
      page.tsx
      default.tsx
```

2. Скажи своїми словами, чому @preview не додає /preview до URL.
3. Скажи, навіщо в Next.js потрібен default.tsx.
