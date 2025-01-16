import style from "./pager.module.css";

const Pager = () => {
  return (
    <section className={style["pager"]}>
      <h1>페이저</h1>
      <div className={style["page-list-box"]}>
        <div>
          <a href="list?p=0">이전</a>
        </div>
        <ul>
          <li className="active">
            <a href="menus?p=1">1</a>
          </li>
          <li>
            <a href="menus?p=2">2</a>
          </li>
          <li>
            <a href="list.html?p=3">3</a>
          </li>
          <li>
            <a href="list.html?p=4">4</a>
          </li>
          <li>
            <a href="list.html?p=5">5</a>
          </li>
        </ul>
        <div>
          <a href="list?p=6">다음</a>
        </div>
      </div>
    </section>
  );
};

export default Pager;
