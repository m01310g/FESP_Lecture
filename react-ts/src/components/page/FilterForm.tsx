import { useState } from "react";

type FilterFormProps = {
    query: string;
    onSearch: (searchWord: string) => void;
};

const FilterForm = ({ query, onSearch }: FilterFormProps) => {
    const [searchWord, setSearchWord] = useState<string>(""); // 데이터를 안전하게 만듦

    const searchHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        onSearch(searchWord);
    };

    return (
        <section className="n-frame:rounded-shadow">
            <header>
                <h1>
                    <span className="n-icon n-icon:search n-deco">검색</span>
                </h1>
                <div className="ml:auto">
                    <label className="n-icon n-icon:arrow_drop_down cursor:pointer">
                        <span>확장버튼</span>
                        <input
                            className="d:none n-panel-expander"
                            type="checkbox"
                        />
                    </label>
                </div>
            </header>
            <form className="n-form n-label-pos:left">
                <div>
                    <label>
                        <span>한글명</span>
                        <input
                            type="text"
                            value={searchWord}
                            onChange={(e) => setSearchWord(e.target.value)}
                        />
                    </label>
                    <div className="d:flex justify-content:end">
                        <button
                            className="n-btn n-btn-color:main"
                            onClick={(e) => searchHandler(e)}
                        >
                            검색
                        </button>
                        <button className="n-btn ml:1">취소</button>
                    </div>
                </div>
            </form>
        </section>
    );
};

export default FilterForm;
