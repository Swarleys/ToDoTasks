"use client";

import * as Form from "@radix-ui/react-form";
import styles from "./Login.module.css";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  function handleOnSubmit(
    e:
      | React.FormEvent<HTMLFormElement>
      | React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) {
    e.preventDefault();
    if (username && password) {
        router.push("/todos");
    }
  }

  return (
    <div className={styles.container}>
      <h1>Login to be able to do todos</h1>
      <Form.Root onSubmit={handleOnSubmit} className={styles.form_root}>
        <Form.Field className={styles.form_field} name="username">
          <div className={styles.input_wrapper}>
            <Form.Label className={styles.form_label}>Username</Form.Label>
            <Form.Message className={styles.form_message} match="valueMissing">
              Please enter your username
            </Form.Message>
          </div>
          <Form.Control asChild>
            <input
              className={styles.input}
              value={username}
              type="text"
              required
              onChange={(e) => setUsername(e.target.value)}
            />
          </Form.Control>
        </Form.Field>
        <Form.Field className={styles.form_field} name="password">
          <div className={styles.input_wrapper}>
            <Form.Label className={styles.form_label}>Password</Form.Label>
            <Form.Message className={styles.form_message} match="valueMissing">
              Please enter your password
            </Form.Message>
          </div>
          <Form.Control asChild>
            <input
              className={styles.input}
              value={password}
              type="password"
              required
              onChange={(e) => setPassword(e.target.value)}
            />
          </Form.Control>
        </Form.Field>
        <Form.Submit asChild>
          <button
            onClick={handleOnSubmit}
            className={styles.button}
            disabled={!username || !password}
          >
            Log in
          </button>
        </Form.Submit>
      </Form.Root>
    </div>
  );
}
