import Link from "next/link";
import styles from "./header.module.scss";
import { useAuthStore } from "@/stores/authStore"; // Zustand 스토어를 import
import { useRouter } from "next/navigation";

const Header = () => {
  // Zustand의 상태 및 메서드 가져오기
  const { user, clearUser } = useAuthStore();

  const router = useRouter();

  // 로그아웃 핸들러
  const handleLogout = () => {
    clearUser(); // 전역 상태 초기화
    alert("로그아웃되었습니다."); // 로그아웃 메시지 (선택 사항)
    router.push("/"); // index로 이동
  };

  return (
    <header className={styles.header}>
      <h1 className={styles.h1}>
        <Link href="/">NCafe</Link>
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
              <Link className="n-icon n-icon:home n-icon-color:base-1" href="/">
                홈
              </Link>
            </li>
            <li>
              <Link
                className="n-icon n-icon:dashboard n-icon-color:base-1"
                href="/admin"
              >
                대시보드
              </Link>
            </li>
            {user ? (
              // 사용자가 로그인 상태일 때: 로그아웃 버튼 표시
              <li>
                <button
                  onClick={handleLogout}
                  className="n-icon n-icon:sign_out n-icon-color:base-1"
                  style={{
                    background: "none",
                    border: "none",
                    color: "inherit",
                    cursor: "pointer",
                  }}
                >
                  로그아웃
                </button>
              </li>
            ) : (
              // 사용자가 비로그인 상태일 때: 로그인 링크 표시
              <li>
                <Link
                  href="/login"
                  className="n-icon n-icon:login n-icon-color:base-1"
                >
                  로그인
                </Link>
              </li>
            )}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
