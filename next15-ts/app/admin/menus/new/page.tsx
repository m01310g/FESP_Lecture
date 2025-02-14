"use client";

import { useState } from "react";
import { useRouter } from "next/navigation"; // Next.js Router Import (useRouter)
import Link from "next/link";

const New = () => {
  const router = useRouter();

  // 폼 데이터 상태 관리
  const [formData, setFormData] = useState({
    categoryId: "1", // 기본 카테고리 ID
    korName: "",
    engName: "",
    price: "",
    description: "",
  });

  // 입력값 변경 처리
  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // 폼 제출 처리
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // 입력값 검증
    if (!formData.korName || !formData.engName || !formData.price) {
      alert("필수 입력값을 모두 입력해주세요.");
      return;
    }

    try {
      // API 요청
      const response = await fetch("/api/menus", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          korName: formData.korName,
          engName: formData.engName,
          price: Number(formData.price), // 숫자로 변환
          description: formData.description,
          categoryId: Number(formData.categoryId), // 숫자로 변환
        }),
      });

      if (!response.ok) {
        throw new Error("메뉴 등록 실패");
      }

      const data = await response.json();
      alert("메뉴 등록 성공!");
      console.log("등록된 메뉴:", data);

      // 성공 시 목록 페이지로 이동
      router.push("/menus"); // 올바른 경로로 수정
    } catch (error) {
      console.error("Error submitting menu:", error);
      alert("메뉴 등록 중 오류가 발생했습니다.");
    }
  };

  return (
    <main>
      <section>
        <header className="n-bar">
          <h1 className="n-heading:5">제품관리 / 메뉴관리</h1>
          <div className="ml:3 d:flex ai:center">
            <Link
              href="/menus"
              className="n-icon n-icon:arrow_back n-btn n-btn:rounded n-btn-size:small"
            >
              추가
            </Link>
          </div>
        </header>
        <section className="n-frame:rounded-shadow">
          <header>
            <h1>
              <span className="n-icon n-icon:post_add n-deco">메뉴등록</span>
            </h1>
          </header>
          <form className="n-form n-label-pos:left" onSubmit={handleSubmit}>
            <div>
              <label>
                <span>카테고리</span>
                <select
                  name="categoryId"
                  value={formData.categoryId}
                  onChange={handleChange}
                >
                  <option value="1">커피</option>
                  <option value="2">수제청</option>
                  <option value="3">샌드위치</option>
                  <option value="4">쿠키</option>
                </select>
              </label>
            </div>
            <div>
              <label>
                <span>한글명</span>
                <input
                  type="text"
                  name="korName"
                  value={formData.korName}
                  onChange={handleChange}
                  required
                />
              </label>
            </div>
            <div>
              <label>
                <span>영문명</span>
                <input
                  type="text"
                  name="engName"
                  value={formData.engName}
                  onChange={handleChange}
                  required
                />
              </label>
            </div>
            <div>
              <label>
                <span>가격</span>
                <input
                  type="number"
                  name="price"
                  value={formData.price}
                  onChange={handleChange}
                  required
                />
              </label>
            </div>
            <div>
              <label>
                <span>설명</span>
                <textarea
                  name="description"
                  value={formData.description}
                  onChange={handleChange}
                />
              </label>
            </div>
            <div className="fl-dir:row jc:end">
              <button className="n-btn n-btn-color:main" type="submit">
                등록
              </button>
              <a href="edit.html" className="n-btn n-btn-color:main">
                등록 후 이미지 추가
              </a>
              <a href="list.html" className="n-btn">
                취소
              </a>
            </div>
          </form>
        </section>
      </section>
    </main>
  );
};

export default New;
