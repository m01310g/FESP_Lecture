import RootFooter from "@/components/footer";
import RootHeader from "@/components/header";

const AnonLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <RootHeader />
      {children}
      <RootFooter />
    </>
  );
};

export default AnonLayout;
