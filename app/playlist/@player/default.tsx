export default async function PlayerPage() {
  await new Promise((resolve) => setTimeout(resolve, 1000));

  return (
    <div style={{ backgroundColor: "lightsalmon", padding: 8 }}>
      <h2>Player</h2>
      <p>Now playing</p>
      <strong>Midnight City</strong>
      <p>01:12 / 04:03</p>
    </div>
  );
}
