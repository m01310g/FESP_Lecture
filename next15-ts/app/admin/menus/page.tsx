import Link from "next/link";

const List = () => {
  return (
    <main>
      <h2>관리자 메뉴 목록</h2>
      <ul>
        <li>
          <Link href="/">home</Link>
        </li>
        <li>
          <Link href="./">대시보드</Link>
        </li>
        <li>
          <Link href="menus/new">메뉴등록</Link>
        </li>
      </ul>
    </main>
  );
};

export default List;
