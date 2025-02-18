import { createCookie } from "./actions/createCookie";

const create = () => {
    return (
        <main className="p:5 d:flex flex-direction:column gap:5">
            <nav className="bd n-panel">
                <h1 className="n-icon n-icon:bookmarks n-deco">
                    <span className="fw:bold fs:9">링크 목록</span>
                </h1>

                <div className="d:flex gap:5 mt:5">
                    <a href="/cookie/list">쿠키 조회</a>
                    <a href="/cookie/create">쿠키 생성</a>
                    <a href="/session/list">세션 목록</a>
                    <a href="/session/create">세션 생성</a>
                </div>
            </nav>
            <section className="bd n-panel">
                <h1 className="n-icon n-icon:add n-deco">
                    <span className="fw:bold fs:9">쿠키 생성</span>
                </h1>
                {/* 버튼을 누르면 POST 요청이 전달되도록 함 */}
                <form
                    action={createCookie}
                    method="POST"
                    className="n-form mt:5"
                    encType="multipart/form-data"
                >
                    <div>
                        <label>
                            <span>사용자 이름</span>
                            <input type="text" name="username" />
                        </label>
                    </div>
                    <div>
                        {/* onClick 말고 서버에 요청 */}
                        <button className="n-btn n-btn-color:main">
                            {/* 받는 데이터 없으니 POST 요청 */}
                            쿠키 생성
                        </button>
                    </div>
                </form>
            </section>
        </main>
    );
};

export default create;
