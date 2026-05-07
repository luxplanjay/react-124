import { getServerMe } from '@/lib/api/serverApi';

export default async function Profile() {
  const user = await getServerMe();
  return (
    <div>
      <h1>Welcome to your profile page, {user.email}!</h1>
    </div>
  );
}
