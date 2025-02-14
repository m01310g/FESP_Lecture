"use client";

import Header from "./components/Header";
import Footer from "./components/Footer";
import Aside from "./components/Aside";
import { useAuthStore } from "@/stores/authStore";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const AdminLayout = ({ children }: { children: React.ReactNode }) => {
  const router = useRouter();
  const pathname = usePathname();
  const { user } = useAuthStore();
  const [isLoading, setIsLoading] = useState(true); // 상태 복원 대기 상태 추가
  const [isLoggingOut, setIsLoggingOut] = useState(false); // 로그아웃 중인지 확인

  useEffect(() => {
    const checkAuth = async () => {
      if (isLoggingOut) {
        return; // 로그아웃 중이면 리다이렉트 처리 방지
      }

      if (!user) {
        const storedUser = JSON.parse(
          localStorage.getItem("auth-storage") || "{}"
        ).state?.user;

        if (storedUser) {
          // 상태가 복원된 경우 `user`를 설정
          useAuthStore.getState().setUser(storedUser);
        } else {
          // 상태가 복원되지 않은 경우 로그인 페이지로 리다이렉트
          localStorage.setItem("returnUrl", pathname);
          router.push("/login");
        }
      }
      setIsLoading(false); // 상태 확인 후 로딩 종료
    };

    checkAuth();
  }, [user, router, pathname, isLoggingOut]);

  // 상태 복원 중 로딩 화면 표시
  if (isLoading) {
    return <div>Loading...</div>;
  }

  // 로그인 상태가 없는 경우 렌더링 중단 (리다이렉트 처리됨)
  if (!user && !isLoggingOut) {
    return null;
  }

  return (
    <div className="n-layout n-aside-size:full1 n-aside-float1 n-aside-pos:right1">
      <Header onLogoutClick={() => setIsLoggingOut(true)} />
      <div className="xl:w:xlarge">
        <Aside />
        {children}
      </div>
      <Footer />
    </div>
  );
};

export default AdminLayout;
