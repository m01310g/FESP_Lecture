"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import styles from "./page.module.scss";

const SignUp = () => {
  const router = useRouter();

  const [formData, setFormData] = useState({
    name: "",
    username: "",
    email: "",
    password: "",
    password1: "",
  });

  const [error, setError] = useState(""); // 에러 메시지
  const [loading, setLoading] = useState(false); // 로딩 상태

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    const { name, username, email, password, password1 } = formData;

    if (password !== password1) {
      setError("비밀번호가 일치하지 않습니다.");
      setLoading(false);
      return;
    }

    try {
      const response = await fetch("/api/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, username, email, password }),
      });

      if (!response.ok) {
        const { message } = await response.json();
        throw new Error(message || "회원가입 실패");
      }

      alert("회원가입 성공! 로그인 페이지로 이동합니다.");
      router.push("/login");
    } catch (err: unknown) {
      if (err instanceof Error) {
        console.error("회원가입 실패:", err.message);
        setError(err.message);
      } else {
        console.error("회원가입 실패:", err);
        setError("알 수 없는 오류가 발생했습니다.");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <main>
      <div className={styles["reg-form-box"]}>
        <section className={styles["reg-form"]}>
          <h1>NCafe 회원가입</h1>
          <form onSubmit={handleSubmit}>
            <div className={styles["input-box"]}>
              <label>이름</label>
              <input
                type="text"
                name="name"
                placeholder="아름"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            <div className={styles["input-box"]}>
              <label>아이디</label>
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
              <label>이메일</label>
              <input
                type="email"
                name="email"
                placeholder="이메일"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className={styles["input-box"]}>
              <label>비밀번호</label>
              <input
                type="password"
                name="password"
                placeholder="비밀번호"
                value={formData.password}
                onChange={handleChange}
                required
              />
            </div>
            <div className={styles["input-box"]}>
              <label>비밀번호 확인</label>
              <input
                type="password"
                name="password1"
                placeholder="비밀번호 확인"
                value={formData.password1}
                onChange={handleChange}
                required
              />
            </div>
            {error && <p className={styles["error"]}>{error}</p>}
            <div>
              <button type="submit" disabled={loading}>
                {loading ? "가입 중..." : "가입하기"}
              </button>
            </div>
            <div className={styles["link-box"]}>
              <Link href="/login">로그인하기</Link>
            </div>
          </form>
        </section>
      </div>
    </main>
  );
};

export default SignUp;
