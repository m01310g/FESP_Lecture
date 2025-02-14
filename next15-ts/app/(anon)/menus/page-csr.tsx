"use client";

import styles from "./page.module.scss";

import { useEffect, useState } from "react";
import Link from "next/link";
import { MenuListDto } from "@/application/usecases/menu/dto/MenuListDto";
import { Menu, useBasketStore } from "@/stores/basketStroe";
import FilterForm from "./components/filter-form";
import Pager from "./components/pager";

const List = () => {
    const [listData, setListData] = useState<MenuListDto>();
    const [isLoading, setIsLoading] = useState(true);
    const addItemToBasket = useBasketStore((state) => state.addItem); // 장바구니에 아이템 추가 함수 가져오기

    useEffect(() => {
        const fetchMenus = async () => {
            setIsLoading(true);

            try {
                const res = await fetch("/api/menus");
                const data = await res.json();
                setListData(data);
            } catch (error) {
                console.error("Error fetching menus:", error);
            } finally {
                setIsLoading(false);
            }
        };

        fetchMenus();
    }, []);

    const searchHandler = async (keyword: string) => {
        setIsLoading(true);

        try {
            const res = await fetch(`/api/menus?keyword=${keyword}`);
            const data = await res.json();
            setListData(data);
        } catch (error) {
            console.error("Error fetching menus:", error);
        } finally {
            setIsLoading(false);
        }
    };

    const handleAddToBasket = (menu: Menu) => {
        addItemToBasket(menu); // basketStore의 addItem 함수 호출
        // alert(`${menu.korName}이(가) 장바구니에 추가되었습니다.`);
    };

    const handleCategoryChange = async (categoryId: number) => {
        setIsLoading(true);

        try {
            const url =
                categoryId === 0 ? "/api/menus" : `/api/menus?c=${categoryId}`;
            const res = await fetch(url);
            const data = await res.json();
            setListData(data);
        } catch (error) {
            console.error("Error fetching menus by category:", error);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <main>
            {isLoading ? <div>Loading...</div> : <></>}
            <FilterForm
                onSearch={searchHandler}
                onCategoryChange={handleCategoryChange}
            />
            <div className={styles["menus-box"]}>
                <section className={styles["menus"]}>
                    <h1 className="d:none">메뉴 목록</h1>
                    <div className={styles["list"]}>
                        {listData?.menus.map((m) => (
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
                                        <button
                                            className="n-icon n-icon:shopping_cart n-btn n-btn:rounded n-btn-color:main"
                                            onClick={() =>
                                                handleAddToBasket({
                                                    ...m,
                                                    amount: 1,
                                                })
                                            } // 버튼 클릭 시 장바구니에 추가
                                        >
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
                {listData && (
                    <Pager
                        totalPages={listData.totalPages}
                        hasPreviousPage={listData.hasPreviousPage}
                        hasNextPage={listData.hasNextPage}
                        pages={listData.pages}
                    />
                )}
            </div>
        </main>
    );
};

export default List;
