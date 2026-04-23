export default async function PlaylistPage() {
  await new Promise((resolve) => setTimeout(resolve, 1000));

  return (
    <div style={{ backgroundColor: "lightcyan", padding: 8 }}>
      <h3>Playlist Page (app/playlist/page.tsx)</h3>
      <ol>
        <li>Midnight City</li>
        <li>Time</li>
        <li>Dreams</li>
        <li>Blinding Lights</li>
      </ol>
    </div>
  );
}
