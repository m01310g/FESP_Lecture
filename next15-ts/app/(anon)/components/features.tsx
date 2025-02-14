import Image from "next/image";
import styles from "./features.module.scss";
import mainRoastingImage from "@/public/image/assets/main-roasting.png";
import Link from "next/link";

const Features = () => {
  return (
    <section className={styles["features-box"]}>
      <h1 className={styles["title"]}>뉴카페만의 특별함</h1>
      <div className={styles["features"]}>
        <Link href="menus/3">
          <section className={styles["feature"]}>
            <Image
              src="/image/assets/main-fruit.png"
              alt="과일청"
              className={styles["feature-image"]}
              width={300}
              height={247}
            />
            <div>
              <h1 className={styles["feature-title"]}>
                <span className={styles["feature-highlight"]}>직접 만든</span>{" "}
                과일청을 맛보세요. 깔끔하고 달콤함을 즐길 수 있습니다.
              </h1>
              <p className={styles["feature-description"]}>
                신선한 과일과 뉴카페만의 레시피로 과일향의 풍미를 충분히 느낄 수
                있는 수제청을 드셔보세요.
              </p>
            </div>
          </section>
        </Link>
        <Link href="menu/detail?c=2">
          <section className={styles["feature"]}>
            <Image
              src={mainRoastingImage}
              alt="쿠키"
              className={styles["feature-image"]}
              width={370}
              height={247}
            />
            <div>
              <h1 className={styles["feature-title"]}>
                <span className={styles["feature-highlight"]}>우리가 구운</span>{" "}
                수제 쿠키를 만나보세요.
              </h1>
              <p className={styles["feature-description"]}>
                신선한 버터 그리고 견과류를 이용하여 바삭함을 더해 매일마다 직접
                구운 맛난 쿠키를 만나보세요.
              </p>
            </div>
          </section>
        </Link>

        <Link href="menu/detail?c=1">
          <section className={styles["feature"]}>
            <Image
              src="/image/assets/main-roasting.png"
              alt="로스팅"
              className={styles["feature-image"]}
              width={370}
              height={247}
              style={{ objectFit: "cover" }} // Replace the legacy prop
              priority // LCP(Largest Contentful Paint - 페이지의 주요 콘텐츠로 인식됨) 최적화를 위해 추가
            />
            <div>
              <h1 className={styles["feature-title"]}>
                <span className={styles["feature-highlight"]}>
                  다양한 로스팅으로
                </span>
                다채로운 맛을 느껴보세요.
              </h1>
              <p className={styles["feature-description"]}>
                신선한 버터 그리고 견과류를 이용하여 바삭함을 더해 매일마다 직접
                구운 맛난 쿠키를 만나보세요.
              </p>
            </div>
          </section>
        </Link>
      </div>
    </section>
  );
};

export default Features;
