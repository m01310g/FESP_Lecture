"use client";

import { useSearchParams } from "next/navigation";
import Link from "next/link";
import style from "./pager.module.css";

type PagerProps = {
  totalPages: number;
  hasPreviousPage: boolean;
  hasNextPage: boolean;
  pages: number[];
};

const Pager = ({
  totalPages,
  hasPreviousPage,
  hasNextPage,
  pages,
}: PagerProps) => {
  const searchParams = useSearchParams();
  const currentPage = Number(searchParams.get("p")) || 1;

  const list: number[] = pages.filter((num) => num <= totalPages);

  return (
    <section className={style["pager"]}>
      <h1>페이지</h1>
      <div className={style["page-list-box"]}>
        <div>
          {hasPreviousPage ? (
            <Link href={`menus?p=${currentPage - 1}`}>이전</Link>
          ) : (
            <span className={style["disabled"]}>이전</span>
          )}
        </div>
        <ul>
          {
            // pages
            // .filter((num) => num <= totalPages) // totalPages를 초과하지 않도록 필터링
            list.map((num) => (
              <li
                key={num}
                className={num === currentPage ? style["active"] : undefined} // 현재 페이지에 active 클래스 추가
              >
                <Link href={`menus?p=${num}`}>{num}</Link>
              </li>
            ))
          }
        </ul>
        <div>
          {hasNextPage ? (
            <Link href={`menus?p=${currentPage + 1}`}>다음</Link>
          ) : (
            <span className={style["disabled"]}>다음</span>
          )}
        </div>
      </div>
    </section>
  );
};

export default Pager;
