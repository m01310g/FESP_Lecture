import Image from "next/image";
import styles from "./greeting.module.scss";
import Link from "next/link";

const Greeting = () => {
  return (
    <div className={styles["greeting-box"]}>
      <section className={styles["greeting"]}>
        <header>
          <h1>알랜드에 오신 것을 환영합니다.</h1>
          <h2>부안에 오면 꼭 들리는 카페</h2>
          <div>
            {/* 리엑트 문제 :  스타일을 주는 방식이 여러가지 불편 */}
            <Link href="/menus" className="n-btn n-btn-color:main">
              주문하기
            </Link>
          </div>
        </header>
        <div>
          <Image
            src="/image/assets/main-top.png"
            alt="알랜드 환영이미지"
            width={865}
            height={1153}
            priority={true}
          />
        </div>
        <footer>
          <h2>Rland Coffee</h2>
          <div>
            <Image
              src="/image/assets/logo-badge.svg"
              alt="알랜드 badge"
              width={96}
              height={92}
              style={{ width: "auto", height: "auto" }}
              priority={true}
            />
          </div>
        </footer>
      </section>
    </div>
  );
};

export default Greeting;
