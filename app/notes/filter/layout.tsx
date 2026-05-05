type Props = {
  children: React.ReactNode;
  sidebar: React.ReactNode;
};

const NotesLayout = ({ children, sidebar }: Props) => {
  return (
    <section style={{ display: "flex", gap: 16 }}>
      <aside style={{ border: "1px solid #ccc", padding: 16 }}>{sidebar}</aside>
      <div>{children}</div>
    </section>
  );
};

export default NotesLayout;
