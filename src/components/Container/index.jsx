// Import CSS
import styles from "./Container.module.css";

// eslint-disable-next-line react/prop-types
const Container = ({ children }) => {
    return <section className={styles.container}>{children}</section>;
};

export default Container;
