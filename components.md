## Playlist

```tsx

```

```tsx

```

## Player

```tsx

```

```tsx

```

```tsx
export default function Default() {
  return <p>Player is not available in this mode.</p>;
}
```

```tsx

```

## Queue

```tsx

```

```tsx

```

```tsx

```

## Layout

```tsx
import Link from "next/link";
import type { ReactNode } from "react";

type PlaylistLayoutProps = {
  children: ReactNode;
  queue: ReactNode;
  player: ReactNode;
};

export default function PlaylistLayout({
  children,
  queue,
  player,
}: PlaylistLayoutProps) {
  return (
    <div style={{ padding: 24, fontFamily: "sans-serif" }}>
      <h1>Playlist</h1>
      <nav style={{ display: "flex", gap: 12, marginBottom: 16 }}>
        <Link href="/playlist">View mode</Link>
        <Link href="/playlist/edit">Edit mode</Link>
      </nav>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1.6fr 1fr 1fr",
          gap: 16,
        }}
      >
        <section style={{ border: "1px solid #ccc", padding: 16 }}>
          <h2>Tracks</h2>
          {children}
        </section>

        <aside style={{ border: "1px solid #ccc", padding: 16 }}>
          <h2>Queue</h2>
          {queue}
        </aside>

        <aside style={{ border: "1px solid #ccc", padding: 16 }}>
          <h2>Player</h2>
          {player}
        </aside>
      </div>
    </div>
  );
}
```
