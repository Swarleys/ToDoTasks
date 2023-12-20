import styles from "./HeaderTodos.module.css";

export default function HeaderTodos() {
  function handleLogout() {
    const exp = Date.now();
    document.cookie = `user-token=; exp=${exp}; path=/;`;
    localStorage.removeItem("todos");
    window.location.reload();
  }

  return (
    <>
      <div className={styles.flex}>
        <h1 className={styles.title}>ToDo Tasks for Sparta</h1>
        <button onClick={handleLogout} className={styles.logout}>
          Log out
        </button>
      </div>
      <p>Technical test for Sparta, using Next.js and TypeScript</p>
    </>
  );
}