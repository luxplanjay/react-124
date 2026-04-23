export default function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div style={{ backgroundColor: "lightyellow", padding: 8 }}>
      <h2>Auth layout (app/auth/layout.tsx)</h2>
      <div
        style={{
          backgroundColor: "lightblue",
          padding: 8,
          marginBottom: 8,
        }}
      >
        Auth banner
      </div>
      {children}
    </div>
  );
}

// http://localhost:3000/auth/login
// root layout > auth layout > login page
