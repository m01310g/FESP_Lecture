// type: void
const Header = () => {
    return (
        <header>
            <div className="n-content xl:w:xlarge">
                <div>
                    <label className="n-icon n-icon:list n-icon-size:6 mr:3 cursor:pointer">
                        <span>사이드메뉴버튼</span>
                        <input
                            className="d:none n-aside-hider"
                            type="checkbox"
                        />
                    </label>
                </div>
                <h1 className="n-heading:2">
                    <a href="/">Rland</a>
                </h1>
                <nav className="ml:auto">
                    <h1 className="d:none">헤더메뉴</h1>
                    <ul className="n-bar">
                        <li>
                            <a className="n-btn">대시보드</a>
                        </li>
                        <li>
                            <a className="n-btn">로그아웃</a>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    );
};

export default Header;
