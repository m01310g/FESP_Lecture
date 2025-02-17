import { CategoryDto } from "@/application/usecases/category/dto/CategoryDto";
import styles from "./filter-form.module.css";
import Link from "next/link";

// query 계층화
interface FilterFormProps {
    query: {
        categoryId: string | string[] | undefined;
        searchWord: string | string[] | undefined;
    };
}

const FilterForm = async ({ query }: FilterFormProps) => {
    const currentCategory = query.categoryId || "";

    const res = await fetch("http://localhost:3000/api/admin/categories");
    const categories: CategoryDto[] = await res.json();

    return (
        <div className={styles["menu-filter-box"]}>
            <section className={styles["search-form"]}>
                <h1 className="d:none">Menu Filter Panel</h1>
                <h2>NCafe Menu</h2>
                <form method="get">
                    {/* key가 있어야 함 */}
                    <input
                        type="text"
                        placeholder="검색어를 입력하세요"
                        name="s"
                        value={query.searchWord}
                    />
                    <button type="submit" className="n-icon n-icon:search">
                        검색
                    </button>
                </form>
            </section>
            <section className={styles["category-menu"]}>
                <h1>카테고리 메뉴</h1>
                <ul className={styles["category-list"]}>
                    {/* "전체" 카테고리 (c 값이 없을 때 active) /} */}
                    <li className={!currentCategory ? styles["active"] : ""}>
                        <Link href="/menus">전체</Link>
                    </li>
                    {/* 동적으로 카테고리 목록 렌더링 */}
                    {categories.map((category) => (
                        <li
                            key={category.id}
                            className={
                                currentCategory === String(category.id)
                                    ? styles["active"]
                                    : ""
                            }
                        >
                            <Link href={`/menus?c=${category.id}`}>
                                {category.name}
                            </Link>
                            {/* <a href={/menus?c=${category.id}}>{category.name}</a> */}
                        </li>
                    ))}
                </ul>
            </section>
        </div>
    );
};

export default FilterForm;
