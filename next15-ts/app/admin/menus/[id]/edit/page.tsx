"use client";

import { MenuUpdateDto } from "@/application/usecases/admin/menu/dto/MenuUpdateDto";
import { useEffect, useState } from "react";
import { useParams } from "next/navigation";

const Edit = () => {
  const { id } = useParams();
  const [menu, setMenu] = useState<MenuUpdateDto>();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchMenus = async () => {
      try {
        const res = await fetch("/api/admin/menus/" + id);
        const data: MenuUpdateDto = await res.json();
        console.log("==== Edit Data ====");
        console.log("data", data);
        console.log("====================");
        setMenu(data);
      } catch (error) {
        console.log("Error fetching menus:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchMenus();
  }, []);

  function handleImageInput(event: React.ChangeEvent<HTMLInputElement>): void {
    console.log("이미지 추가", event.target.files);
  }

  return (
    <main className="">
      {isLoading ? <div>Loading...</div> : <></>}
      <section className="">
        <header className="n-bar">
          <h1 className="n-heading:5">제품관리 / 메뉴관리</h1>
          <div className="ml:3 d:flex ai:center">
            <a
              href="list.html"
              className="n-icon n-icon:arrow_back n-btn n-btn:rounded n-btn-size:small"
            >
              추가
            </a>
          </div>
        </header>
        <section className="n-frame:rounded-shadow">
          <header>
            <h1>
              <span className="n-icon n-icon:edit_square n-deco">메뉴수정</span>
            </h1>
          </header>
          <form className="n-form n-label-pos:left">
            <div>
              <label>
                <span>한글명</span>
                <input type="text" value={menu?.korName} />
              </label>
            </div>
            <div>
              <label>
                <span>영문명</span>
                <input type="text" value={menu?.engName} />
              </label>
            </div>
            <div>
              <label>
                <span>가격</span>
                <input type="text" value={menu?.price} />
              </label>
            </div>
            <div>
              <label>
                <span>설명</span>
                <textarea defaultValue={""} />
              </label>
            </div>
            <div className="fl-dir:row jc:end">
              <button className="n-btn n-btn-color:main">저장</button>
              <a href="detail.html" className="n-btn">
                취소
              </a>
            </div>
          </form>
        </section>
        {/* -- 이미지 추가 프레임-------------------- */}
        <section className="n-frame:rounded-shadow">
          <header>
            <h1>이미지 추가</h1>
            <div className="n-message:error-7 ml:3">
              - 사진이 서버에 저장되었습니다.
            </div>
            <div className="h:4 w:100p mt:3 bg-color:main-1a position:relative">
              <div className="w:8p bg-color:main-1 position:absolute text-align:end color:base-1">
                88%
              </div>
              <label className="d:flex h:100p ai:center jc:center">
                <span className="n-icon n-icon:add">사진선택</span>
                <input
                  className="d:none"
                  type="file"
                  onInput={handleImageInput}
                />
              </label>
            </div>
          </header>
          <ul className="n-bar">
            <li className="w:3 position:relative">
              <form className="position:absolute right:0 top:0">
                <input type="hidden" defaultValue={1} />
                <button className="n-icon n-icon:delete n-icon-color:main-1 n-btn:rounded">
                  삭제
                </button>
              </form>
              <img
                className="h:3 w:100p obj-fit:cover"
                src="/image/product/latte.svg"
              />
            </li>
            <li className="w:3 position:relative">
              <form className="position:absolute right:0 top:0">
                <input type="hidden" defaultValue={1} />
                <button className="n-icon n-icon:delete n-icon-color:main-1 n-btn:rounded">
                  삭제
                </button>
              </form>
              <img
                className="h:3 w:100p obj-fit:cover"
                src="/image/product/latte.svg"
              />
            </li>
            <li className="w:3 position:relative">
              <form className="position:absolute right:0 top:0">
                <input type="hidden" defaultValue={1} />
                <button className="n-icon n-icon:delete n-icon-color:main-1 n-btn:rounded">
                  삭제
                </button>
              </form>
              <img
                className="h:3 w:100p obj-fit:cover"
                src="/image/product/latte.svg"
              />
            </li>
          </ul>
        </section>
        {/* --/ 이미지 추가 프레임-------------------- */}
      </section>
    </main>
  );
};

export default Edit;
