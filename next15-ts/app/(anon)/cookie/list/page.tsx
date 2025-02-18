import { cookies } from "next/headers";

const list = async () => {
    const cookieStore = await cookies();
    const username = cookieStore.get("username")?.value || "";

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
                    <span className="fw:bold fs:9">쿠키 조회</span>
                </h1>
                <div className="mt:5">username: {username}</div>
            </section>
        </main>
    );
};

export default list;
