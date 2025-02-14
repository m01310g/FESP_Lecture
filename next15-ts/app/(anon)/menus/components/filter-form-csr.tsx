"use client";
import { useState, FormEvent, useEffect, MouseEventHandler } from "react";
import styles from "./filter-form.module.css";
import Link from "next/link";
import { Category } from "@/domain/entities/Category";

interface FilterFormProps {
  onSearch: (value: string) => void;
  onCategoryChange: (categoryId: number) => void;
}

const FilterForm: React.FC<FilterFormProps> = ({
  onSearch,
  onCategoryChange,
}) => {
  const [value, setValue] = useState<string>("");
  const [categories, setCategories] = useState<Category[]>([]);
  const [currentCategory, setCurrentCategory] = useState<number>(0);

  useEffect(() => {
    const fetchMenus = async () => {
      const res = await fetch("/api/categories");
      const data = await res.json();
      setCategories(data);
    };

    fetchMenus();
  }, []);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault(); // Prevent default form submission
    if (onSearch) {
      console.log("value", value);
      onSearch(value); // Pass the search value to the parent component
    }
  };

  function handleCategoryChange(
    id: number
  ): MouseEventHandler<HTMLAnchorElement> | undefined {
    return (event) => {
      event.preventDefault();
      onCategoryChange(id);
      setCurrentCategory(id);
    };
  }

  return (
    <div className={styles["menu-filter-box"]}>
      <section className={styles["search-form"]}>
        <h1 className="d:none">Menu Filter Panel</h1>
        <h2>NCafe Menu</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="검색어를 입력하세요"
            value={value}
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
          <li className={currentCategory === 0 ? styles["active"] : ""}>
            <a href="" onClick={handleCategoryChange(0)}>
              전체
            </a>
          </li>
          {categories.map((category) => (
            <li
              key={category.id}
              className={
                currentCategory === category.id ? styles["active"] : ""
              }
            >
              <Link
                href={`/menus?c=${category.id}`}
                onClick={handleCategoryChange(category.id)}
              >
                {category.name}
              </Link>
            </li>
          ))}
          {/* <li>
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
          </li> */}
        </ul>
      </section>
    </div>
  );
};

export default FilterForm;
