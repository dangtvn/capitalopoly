import { Component } from "solid-js";
import styles from "./board.module.scss";

const Board: Component = (props) => {
    return (
        <div class={styles.board}>
            <div class={styles.start}>1</div>
            <div class={styles.top}>2</div>
            <div class={styles.jail}>3</div>
            <div class={styles.left}>4</div>
            <div class={styles.center}>5</div>
            <div class={styles.right}>6</div>
            <div class={styles.gotojail}>7</div>
            <div class={styles.bottom}>8</div>
            <div class={styles.sleep}>9</div>
        </div>
      );
}

export default Board;