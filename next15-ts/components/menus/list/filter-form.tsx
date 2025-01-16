import { useState } from "react";
import styles from "./filter-form.module.css";
import Link from "next/link";

const FilterForm = () => {
  const [value, setValue] = useState("");

  return (
    <div className={styles["menu-filter-box"]}>
      <section className={styles["search-form"]}>
        <h1 className="d:none">Menu Filter Panel</h1>
        <h2>Rland Menu</h2>
        <form>
          <input
            type="text"
            placeholder="검색어를 입력하세요"
            value={value}
            // onChange={queryInputHandler}
            onChange={(event) => setValue(event.target.value)}
          />
          <button type="submit" className="n-icon n-icon:search">
            검색
          </button>
        </form>
      </section>
      <section className={styles["category-menu"]}>
        <h1>카테고리 메뉴</h1>
        <ul className={styles["category-list"]}>
          <li className={styles["active"]}>
            <a href="">전체</a>
          </li>
          <li>
            <Link href="menus?c=1">커피</Link>
          </li>
          <li>
            <Link href="menus?c=1">수제청</Link>
          </li>
          <li>
            <Link href="menus?c=2">샌드위치</Link>
          </li>
          <li>
            <Link href="menus?c=3">쿠키</Link>
          </li>
        </ul>
      </section>
    </div>
  );
};

export default FilterForm;
