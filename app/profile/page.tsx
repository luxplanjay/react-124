import UsernameSection from "@/components/UsernameSection";

export default function Profile() {
  console.log("Profile");

  return (
    <div>
      <h1>Profile</h1>
      <section>
        <h2>User data</h2>
        <p>info 1</p>
        <p>info 2</p>
        <p>info 3</p>
      </section>
      <UsernameSection />
    </div>
  );
}
