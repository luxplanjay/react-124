export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div style={{ backgroundColor: "lightcyan", padding: 8 }}>
      <h2>Dashboard layout (app/dashboard/layout.tsx)</h2>
      {children}
    </div>
  );
}

// http://localhost:3000/dashboard
