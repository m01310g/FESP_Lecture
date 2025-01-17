"use client"; // React

import FilterForm from "@/components/menus/list/filter-form";
import styles from "./page.module.scss";
import Pager from "@/components/menus/list/pager";
import { useEffect } from "react";

const List = () => {
    useEffect(() => {
        fetch("/api/menus"); // /api/menus = Adapter
    }, []);

    return (
        <main>
            <FilterForm />
            {/* === list =========================================== */}
            <div className={styles["menus-box"]}>
                <section className={styles["menus"]}>
                    <h1 className="d:none">메뉴 목록</h1>
                    <div className={styles["list"]}>
                        <section className={styles["menu-card"]}>
                            <div className={styles["img-box"]}>
                                <a href="detail.html?id=1">
                                    <img
                                        src="/image/product/americano.png"
                                        alt="아메리카노 이미지"
                                    />
                                </a>
                            </div>
                            <div className={styles["menu-info"]}>
                                <h1>
                                    <a href="detail.html?id=1">아메리카노</a>
                                </h1>
                                <h2>americano</h2>
                                <div className={styles["price"]}>4,000 원</div>
                                <div className={styles["like"]}>
                                    <label className="n-icon n-icon:heart">
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
                        {/* -------------------------------------- */}
                        <section className={styles["menu-card"]}>
                            <div className={styles["img-box"]}>
                                <a href="detail.html?id=1">
                                    <img
                                        src="/image/product/cafe_latte.svg"
                                        alt="카페라떼 이미지"
                                    />
                                </a>
                            </div>
                            <div className={styles["menu-info"]}>
                                <h1>
                                    <a href="detail.html?id=1">카페라떼</a>
                                </h1>
                                <h2>Cafe Latte</h2>
                                <div className={styles["price"]}>4,500 원</div>
                                <div className={styles["like"]}>
                                    <label className="n-icon n-icon:heart">
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
                        {/* -------------------------------------- */}
                        <section className={styles["menu-card"]}>
                            <div className={styles["img-box"]}>
                                <a href="detail.html?id=1">
                                    <img
                                        src="/image/product/americano.png"
                                        alt="아메리카노 이미지"
                                    />
                                </a>
                            </div>
                            <div className={styles["menu-info"]}>
                                <h1>
                                    <a href="detail.html?id=1">아메리카노</a>
                                </h1>
                                <h2>americano</h2>
                                <div className={styles["price"]}>4,000 원</div>
                                <div className={styles["like"]}>
                                    <label className="n-icon n-icon:heart">
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
                        {/* -------------------------------------- */}
                        <section className={styles["menu-card"]}>
                            <div className={styles["img-box"]}>
                                <a href="detail.html?id=1">
                                    <img
                                        src="/image/product/americano.png"
                                        alt="아메리카노 이미지"
                                    />
                                </a>
                            </div>
                            <div className={styles["menu-info"]}>
                                <h1>
                                    <a href="detail.html?id=1">아메리카노</a>
                                </h1>
                                <h2>americano</h2>
                                <div className={styles["price"]}>4,000 원</div>
                                <div className={styles["like"]}>
                                    <label className="n-icon n-icon:heart">
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
                        {/* -------------------------------------- */}
                        <section className={styles["menu-card"]}>
                            <div className={styles["img-box"]}>
                                <a href="detail.html?id=1">
                                    <img
                                        src="/image/product/americano.png"
                                        alt="아메리카노 이미지"
                                    />
                                </a>
                            </div>
                            <div className={styles["menu-info"]}>
                                <h1>
                                    <a href="detail.html?id=1">아메리카노</a>
                                </h1>
                                <h2>americano</h2>
                                <div className={styles["price"]}>4,000 원</div>
                                <div className={styles["like"]}>
                                    <label className="n-icon n-icon:heart">
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
                        {/* -------------------------------------- */}
                        <section className={styles["menu-card"]}>
                            <div className={styles["img-box"]}>
                                <a href="detail.html?id=1">
                                    <img
                                        src="/image/product/americano.png"
                                        alt="아메리카노 이미지"
                                    />
                                </a>
                            </div>
                            <div className={styles["menu-info"]}>
                                <h1>
                                    <a href="detail.html?id=1">아메리카노</a>
                                </h1>
                                <h2>americano</h2>
                                <div className={styles["price"]}>4,000 원</div>
                                <div className={styles["like"]}>
                                    <label className="n-icon n-icon:heart">
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
                    </div>
                </section>
                <Pager />
            </div>
        </main>
    );
};

export default List;
