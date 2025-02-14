// 상태 관리 설정 (Zustand)
import MemberAuthenticatedDto from "@/application/usecases/auth/dto/MemberAuthenticatedDto";
import { create } from "zustand";
import { persist } from "zustand/middleware";

interface AuthState {
    user: MemberAuthenticatedDto | null; // 사용자 정보
    setUser: (user: MemberAuthenticatedDto) => void; // 사용자 정보 설정
    clearUser: () => void; // 사용자 정보 초기화
}

export const useAuthStore = create<AuthState>()(
    persist(
        (set) => ({
            user: null,
            setUser: (user) => set({ user }),
            clearUser: () => set({ user: null }),
        }),
        { name: "auth-storage" } // LocalStorage 키 이름
    )
);
// export default useAuthStore;

// middleware를 사용하지 않는 경우 =================

// export const useAuthStore = create<AuthState>((set) => ({
//     user: null,
//     setUser: (user) => set({ user }),
//     clearUser: () => set({ user: null }),
// }));
// ================================================




