import { Link } from "react-router-dom";

const Aside = () => {
    return (
        <aside>
            <header className="n-aside-menu">
                <h1 className="d:none">
                    <a>관리자 메뉴</a>
                </h1>
                <ul>
                    <li>
                        <Link
                            to="/"
                            className="n-icon n-icon:dashboard n-deco n-deco-pos:top lg:n-deco-pos:left"
                        >
                            대시보드
                        </Link>
                    </li>
                </ul>
            </header>
            <nav className="n-aside-menu">
                <h1>재품관리</h1>
                <ul>
                    <li className="active">
                        <a
                            className="n-icon n-icon:local_cafe n-deco n-deco-pos:top lg:n-deco-pos:left"
                            href="/admin/menu/list.html"
                        >
                            메뉴관리
                        </a>
                    </li>
                    <li>
                        <Link
                            to="/login"
                            className="n-icon n-icon:garage_home n-deco n-deco-pos:top lg:n-deco-pos:left"
                        >
                            비품관리
                        </Link>
                    </li>
                </ul>
            </nav>
            <nav className="n-aside-menu">
                <h1>고객관리</h1>
                <ul>
                    <li>
                        <a
                            className="n-icon n-icon:notifications n-deco n-deco-pos:top lg:n-deco-pos:left"
                            href="/admin/notice/list.html"
                        >
                            공지관리
                        </a>
                    </li>
                    <li>
                        <a
                            className="n-icon n-icon:group n-deco n-deco-pos:top lg:n-deco-pos:left"
                            href="/admin/member/list.html"
                        >
                            회원관리
                        </a>
                    </li>
                </ul>
            </nav>
            <nav className="n-aside-menu">
                <h1>통계관리</h1>
                <ul>
                    <li>
                        <a className="n-icon n-icon:cardio_load n-deco n-deco-pos:top lg:n-deco-pos:left">
                            좋아요
                        </a>
                    </li>
                    <li>
                        <a className="n-icon n-icon:bookmarks n-deco n-deco-pos:top lg:n-deco-pos:left">
                            찜목록
                        </a>
                    </li>
                </ul>
            </nav>
        </aside>
    );
};

export default Aside;
