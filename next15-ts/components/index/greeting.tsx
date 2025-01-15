import styles from "./greeting.module.css";
import Link from "next/link";

const Greeting = () => {
    return (
        <div className={styles["greeting-box"]}>
            <section className={styles["greeting"]}>
                <header>
                    <h1>알랜드에 오신 것을 환영합니다.</h1>
                    <h2>부안에 오면 꼭 들리는 카페</h2>
                    <div>
                        <Link
                            href="/menu/list.html"
                            className="n-btn n-btn-color:main"
                        >
                            주문하기
                        </Link>
                    </div>
                </header>
                <div>
                    <img
                        src="/image/assets/main-top.png"
                        alt="알랜드 환영이미지"
                    />
                </div>
                <footer>
                    <h2>Rland Coffee</h2>
                    <div>
                        <img
                            src="/image/assets/logo-badge.svg"
                            alt="알랜드 badge"
                        />
                    </div>
                </footer>
            </section>
        </div>
    );
};

export default Greeting;
