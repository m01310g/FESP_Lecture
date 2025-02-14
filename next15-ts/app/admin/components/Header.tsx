"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useAuthStore } from "@/stores/authStore";

const Header = ({ onLogoutClick }: { onLogoutClick: () => void }) => {
  const router = useRouter();
  const { user, clearUser } = useAuthStore(); // Zustand에서 사용자 상태 및 메서드 가져오기

  const handleLogout = () => {
    clearUser(); // 상태 초기화 (로그아웃 처리)
    onLogoutClick(); // 로그아웃 중 상태 설정
    alert("로그아웃되었습니다.");
    router.push("/"); // 로그아웃 후 리다이렉트
  };

  return (
    <header className="">
      <div className="n-content xl:w:xlarge">
        <div>
          <label className="n-icon n-icon:list n-icon-size:6 mr:3 cursor:pointer">
            <span>사이드메뉴버튼</span>
            <input className="d:none n-aside-hider" type="checkbox" />
          </label>
        </div>
        <h1 className="n-heading:2">
          <Link href="/">NCafe</Link>
        </h1>
        <nav className="ml:auto">
          <h1 className="d:none">헤더메뉴</h1>
          <ul className="n-bar">
            {user ? (
              <>
                <li>
                  <Link className="n-btn" href="/admin/dashboard">
                    대시보드
                  </Link>
                </li>
                <li>
                  <button className="n-btn" onClick={handleLogout}>
                    로그아웃
                  </button>
                </li>
              </>
            ) : (
              <>
                <li>
                  <Link className="n-btn" href="/login">
                    로그인
                  </Link>
                </li>
                <li>
                  <Link className="n-btn" href="/signup">
                    회원가입
                  </Link>
                </li>
              </>
            )}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
