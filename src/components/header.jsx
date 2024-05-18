import styles from "./header.module.css";

function Header() {
  return (
    <div className={styles.container}>
      <h1>| CONTACT US |</h1>
      <p>
        <a href="#">monaByte</a>
      </p>
    </div>
  );
}

export default Header;
