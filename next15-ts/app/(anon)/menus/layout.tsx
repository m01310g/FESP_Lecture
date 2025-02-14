"use client";

import Basket from "@/app/(anon)/menus/components/basket";

const MenuLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      {children}
      <Basket />
    </>
  );
};

export default MenuLayout;
