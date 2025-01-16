import Link from "next/link";

const New = () => {
  return (
    <main>
      <h2>관리자 메뉴 추가</h2>
      <ul>
        <li>
          <Link href="/">home</Link>
        </li>
        <li>
          <Link href="/menus">/menus</Link>
        </li>
        <li>
          <Link href="/admin/menus">/admin/menus</Link>
        </li>
      </ul>
      <div>
        <button>등록</button>
      </div>
    </main>
  );
};

export default New;
