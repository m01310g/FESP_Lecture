"use client";

import Greeting from "@/app/(anon)/components/greeting";
import Features from "@/app/(anon)/components/features";
import styles from "./page.module.scss";

const Index = () => {
  // console.log("haha");
  return (
    <main className={styles.main}>
      <Greeting />
      <Features />
    </main>
  );
};

export default Index;
