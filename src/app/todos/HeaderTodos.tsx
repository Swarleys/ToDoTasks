"use client";
import styles from "./HeaderTodos.module.css";
import { useRouter } from "next/navigation";

export default function HeaderTodos() {
  const router = useRouter();
  function handleLogout() {
    const exp = Date.now();
    document.cookie = `user-token=; exp=${exp}; path=/;`;
    router.push("/");
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