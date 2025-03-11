import Image from "next/image";
import styles from "./page.module.css";
import { GridHome } from "./component/gridHome/gridHome";

export default function Home() {
  return (
    <div className={styles.page}>

      <GridHome>
        <p>a</p>
        <p>a</p>
        <p>a</p>
        <p>a</p>
        <p>a</p>

      </GridHome>
    </div>
  );
}
