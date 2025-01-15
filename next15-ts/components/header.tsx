import Link from "next/link";
import styles from "./header.module.css";

const Header = () => {
    return (
        <header className={styles.header}>
            <h1>
                <Link href="/">Rland</Link>
            </h1>
            <div className={styles["top-mobile-menu"]}>
                <Link
                    className="n-icon n-icon:list n-icon-color:base-1"
                    href="top-menu=1"
                >
                    숨김버튼
                </Link>
            </div>
            <div className={styles["top-menu"]}>
                <nav>
                    <h1 className="d:none">상단메뉴</h1>
                    <ul>
                        <li>
                            <Link
                                className="n-icon n-icon:home n-icon-color:base-1"
                                href="/"
                            >
                                홈
                            </Link>
                        </li>
                        <li>
                            <Link
                                className="n-icon n-icon:dashboard n-icon-color:base-1"
                                href="/admin/index.html"
                            >
                                대시보드
                            </Link>
                        </li>
                        <li>
                            <Link
                                href="/signin.html"
                                className="n-icon n-icon:sign_in n-icon-color:base-1"
                            >
                                로그인
                            </Link>
                        </li>
                    </ul>
                </nav>
                {/* <section>
<h1 class="d:none">로그아웃 폼</h1>
<form>
  <input type="hidden">
  <button class="n-icon n-icon:sign_out n-icon-color:base-1">로그아웃</button>
</form>
</section> */}
            </div>
        </header>
    );
};

export default Header;
