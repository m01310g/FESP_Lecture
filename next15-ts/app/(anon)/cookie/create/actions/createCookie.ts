// 페이지의 요청을 파일 이름으로 설정

"use server";

import { cookies } from "next/headers";

export const createCookie = async (formData: FormData) => {
    const username = formData.get("username") as string | null;
    console.log("formData", formData);
    console.log("username", username);

    const cookieStore = await cookies(); // 클라이언트가 가지고 있는 쿠키 가져옴
    cookieStore.set("username", username as string);
};

// export default create일 경우 create 함수의 이름을 변경해서 사용 가능
