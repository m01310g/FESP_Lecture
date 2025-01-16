import Link from "next/link";

const Index = () => {
  return (
    <main>
      <h1>Admin Dashboard</h1>
      <ul>
        <li>
          <Link href="/">home</Link>
        </li>
        <li>
          <Link href="admin/menus">메뉴목록</Link>
        </li>
      </ul>
    </main>
  );
};

export default Index;
