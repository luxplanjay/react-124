export default async function QueuePage() {
  await new Promise((resolve) => setTimeout(resolve, 1500));

  return (
    <div style={{ backgroundColor: "lightgreen", padding: 8 }}>
      <h2>Queue</h2>
      <ul>
        <li>Next: Intro</li>
        <li>Then: Sunset Lover</li>
        <li>Then: Nightcall</li>
      </ul>
    </div>
  );
}
