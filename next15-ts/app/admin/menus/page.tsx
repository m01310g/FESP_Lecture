// 데이터를 가져올 때 클라이언트에서는 mount, load
"use client";
import { useEffect, useState } from "react";

const List = () => {
    const [menus, setMenus] = useState([]);
    // 데이터를 가져오는 부분은 Service를 호출하지 않고 Adapter 사용
    useEffect(() => {
        // Service의 대안으로 Adapter 호출
        const fetchData = async () => {
            const response = await fetch("/api/menus");
            const data = await response.json();
            setMenus(data);
        };
        fetchData();
    }, []);

    return (
        <div>
            <h2>Admin Menu List Page</h2>
            <pre>{JSON.stringify(menus, null, 2)}</pre>
        </div>
    );
};

export default List;
