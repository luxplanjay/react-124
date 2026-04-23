import Link from "next/link";

export default function PlaylistLayout({
  children,
  queue,
  player,
}: Readonly<{
  children: React.ReactNode;
  queue: React.ReactNode;
  player: React.ReactNode;
}>) {
  return (
    <div style={{ backgroundColor: "lightblue", padding: 8 }}>
      <h2>Playlist layout (app/playlist/layout.tsx)</h2>
      <nav style={{ display: "flex", gap: 12, marginBottom: 16 }}>
        <Link href="/playlist">View mode</Link>
        <Link href="/playlist/edit">Edit mode</Link>
      </nav>

      {children}
      {queue}
      {player}
    </div>
  );
}

// {children}
// /playlist > children = page.tsx
// /playlist > queue = @queue/page.tsx
// /playlist > player = @player/page.tsx

// /playlist/edit > children = edit/page.tsx
// /playlist/edit > queue = @queue/default.tsx
// /playlist/edit > player = @player/default.tsx

// soft navigation
// hard navigation

// Ми ж перехоплюємо app/note/[id] - тоді чому створюємо паралельний маршрут для модалки на рівень вище?

// app/notes/[id]/page.tsx
// app/layout.tsx
// app/@modal/(.)notes/[id]/page.tsx

// @modal
