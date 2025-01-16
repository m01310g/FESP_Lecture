import styles from "./basket.module.css";

const Basket = () => {
  return (
    <div className={styles["basket-box"]}>
      <section className={styles["basket"]}>
        <h1>장바구니</h1>
        <div>
          <div>금액 : 12,000 원</div>
          <div>
            <span className="price d:none">수량</span>
            <span className={styles["amount"]}>7</span>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Basket;
