import Basket from "@/components/menus/basket";

const MenuLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      {children}
      <Basket />
    </>
  );
};

export default MenuLayout;
