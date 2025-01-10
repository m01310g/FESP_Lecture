const Pager: React.FC = () => {
    return (
        <div className="mt:4 text-align:center">
            <ul className="n-bar">
                <li>
                    <a className="n-btn active">1</a>
                </li>
                <li>
                    <a className="n-btn">2</a>
                </li>
                <li>
                    <a className="n-btn">3</a>
                </li>
                <li>
                    <a className="n-btn">4</a>
                </li>
                <li>
                    <a className="n-btn">5</a>
                </li>
            </ul>
        </div>
    );
};

export default Pager;
