"use client";

import RootFooter from "@/app/(anon)/components/footer";
import RootHeader from "@/app/(anon)/components/header";

const AnonLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <RootHeader />
      {children}
      <RootFooter />
    </div>
  );
};

export default AnonLayout;
