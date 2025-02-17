import { MenuListDto } from "@/application/usecases/menu/dto/MenuListDto";
import styles from "./page.module.scss";

import Link from "next/link";
import FilterForm from "./components/filter-form";

const List = async ({
    params,
    searchParams,
}: {
    params: Promise<{ params: string }>;
    searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) => {
    const query = await searchParams;
    const queryObject = { categoryId: query.c, searchWord: query.s };

    let queryString = "";

    if (query.c) {
        queryString = `?c=${query.c}`;
    }

    if (query.s) {
        queryString = `?keyword=${query.s}`;
    }

    const res = await fetch(`http://localhost:3000/api/menus${queryString}`);
    const data: MenuListDto = await res.json();

    return (
        <main>
            <FilterForm query={queryObject} />
            <div className={styles["menus-box"]}>
                <section className={styles["menus"]}>
                    <h1 className="d:none">메뉴 목록</h1>
                    <div className={styles["list"]}>
                        {data?.menus.map((m) => (
                            <section key={m.id} className={styles["menu-card"]}>
                                <div className={styles["img-box"]}>
                                    <Link href={`menus/${m.id}`}>
                                        <img
                                            src={`/image/product/${m.img}`}
                                            alt={`${m.korName} 이미지`}
                                        />
                                    </Link>
                                </div>
                                <div className={styles["menu-info"]}>
                                    <h1>
                                        <Link href={`menus/${m.id}`}>
                                            {m.korName}
                                        </Link>
                                    </h1>
                                    <h2>{m.engName}</h2>
                                    <div className={styles["price"]}>
                                        {m.price} 원
                                    </div>
                                    <div className={styles["like"]}>
                                        <label className="n-icon n-icon:favorite">
                                            좋아요
                                            <input
                                                className="d:none"
                                                type="checkbox"
                                                defaultValue={1}
                                            />
                                        </label>
                                        <span>12</span>
                                    </div>
                                    <div className={styles["pay"]}>
                                        <button className="n-icon n-icon:shopping_cart n-btn n-btn:rounded n-btn-color:main">
                                            장바구니에 담기
                                        </button>
                                        <button className="n-icon n-icon:credit_card n-btn n-btn:rounded n-btn-color:sub">
                                            주문하기
                                        </button>
                                    </div>
                                </div>
                            </section>
                        ))}
                    </div>
                </section>
            </div>
        </main>
    );
};

export default List;
