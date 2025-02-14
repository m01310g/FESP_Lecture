"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useAuthStore } from "@/stores/authStore";
import Link from "next/link";
import styles from "./page.module.scss";

const Login = () => {
  const router = useRouter();

  // 상태 관리
  const { setUser } = useAuthStore();

  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  const [error, setError] = useState("");

  // 입력값 변경 처리
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // 폼 제출 처리
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault(); // 기본 폼 제출 동작 막기
    setError(""); // 에러 초기화

    try {
      // POST 요청 보내기
      const response = await fetch("/api/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        const { message } = await response.json();
        throw new Error(message || "로그인 실패");
      }

      // 성공 시 리다이렉트
      const authenticatedMember = await response.json();
      console.log("로그인 성공:", authenticatedMember);

      // /api/members/newlec@namoolab.com

      // 로그인 상태 업데이트
      setUser(authenticatedMember);

      alert("로그인 성공!");

      router.push(localStorage.getItem("returnUrl") || "/"); // returnUrl이 있으면 returnUrl로 이동

      // console.log("===로그인 후===");
      // console.log("returnUrl:", localStorage.getItem("returnUrl"));
      // localStorage.removeItem("returnUrl"); // returnUrl 삭제
      // console.log(localStorage.getItem("returnUrl"));
      // console.log("===============");
    } catch (err: unknown) {
      if (err instanceof Error) {
        console.error("로그인 에러:", err.message);
        setError(err.message);
      } else {
        console.error("로그인 에러:", err);
        setError("알 수 없는 에러 발생");
      }
    }
  };

  return (
    <main>
      <div className={styles["login-form-box"]}>
        <section className={styles["login-form"]}>
          <h1>NCafe Login</h1>
          <form onSubmit={handleSubmit}>
            <div className={styles["input-box"]}>
              <label>ID</label>
              <input
                type="text"
                name="username"
                placeholder="아이디"
                value={formData.username}
                onChange={handleChange}
                required
              />
            </div>
            <div className={styles["input-box"]}>
              <label>Password</label>
              <input
                type="password"
                name="password"
                placeholder="비밀번호"
                value={formData.password}
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <button type="submit">Login</button>
            </div>
            {error && <p className={styles["error"]}>{error}</p>}{" "}
            {/* 에러 메시지 */}
            <div>또는</div>
            <div>
              <Link
                href="/"
                className="n-btn btn-google-login n-icon n-icon:google_logo n-deco"
              >
                구글로 로그인
              </Link>
            </div>
            <div>
              <Link
                href="/"
                className="n-btn btn-google-login n-icon n-icon:google_logo n-deco"
              >
                카카오 로그인
              </Link>
            </div>
            <div className={styles["link-box"]}>
              <Link href="signup">회원가입</Link>
              <a href="">비밀번호 찾기</a>
            </div>
          </form>
        </section>
      </div>
    </main>
  );
};

export default Login;
