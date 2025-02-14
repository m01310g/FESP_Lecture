import { useBasketStore } from "@/stores/basketStroe";
import styles from "./basket.module.css";

const Basket = () => {
  const items = useBasketStore((state) => state.items); // 장바구니 아이템 가져오기
  const clearBasket = useBasketStore((state) => state.clearBasket); // 장바구니 초기화 함수 가져오기
  const totalAmount = useBasketStore((state) => state.totalAmount); // 총 수량 가져오기
  const totalPrice = useBasketStore((state) => state.totalPrice);
  console.log("items", items);
  console.log("totalAmount", totalAmount());
  console.log("totalPrice", totalPrice());

  // 총 금액 계산
  // const totalPrice = items.reduce((sum, item) => sum + item.price, 0);

  return (
    <div className={styles["basket-box"]}>
      <section className={styles["basket"]}>
        <h1>장바구니</h1>
        {items.length > 0 ? (
          <>
            {/* {items.map((item: Menu) => (
              <div key={item.id} className={styles["basket-item"]}>
                <div>
                  <span>{item.korName}</span> - <span>{item.price} 원</span>
                </div>
              </div>
            ))} */}
            <div className={styles["total"]}>
              <div>금액 : {totalPrice().toLocaleString()} 원</div>
              <div className={styles["amount-box"]}>
                <span className="price d:none">수량</span>
                <span className={styles["amount"]}>
                  {totalAmount().toLocaleString()}
                </span>
              </div>
              <div className={styles["button-box"]}>
                <button
                  onClick={clearBasket}
                  className={`${styles["clear-button"]} n-icon n-icon:delete n-icon-color:main-1`}
                >
                  장바구니 비우기
                </button>
              </div>
            </div>
          </>
        ) : (
          <p>장바구니가 비어 있습니다.</p>
        )}
      </section>
    </div>
  );
};

export default Basket;
