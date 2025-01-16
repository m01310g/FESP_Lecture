import Greeting from "@/components/index/greeting";
import Features from "@/components/index/features";
import styles from "./page.module.scss";

const Index = () => {
  console.log("haha");
  return (
    <main className={styles.main}>
      <Greeting />
      <Features />
    </main>
  );
};

export default Index;
