"use client";

import * as Form from "@radix-ui/react-form";
import styles from "./page.module.css";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { SignJWT } from "jose";
import { nanoid } from "nanoid";
import { getJwtSecretKey } from "@/lib/auth";

export default function Login() {
  const [account, setAccount] = useState({ username: "", password: "" });
  const router = useRouter();
  
  useEffect(() => {
    localStorage.removeItem("todos");
  }, []);

  async function handleOnSubmit(
    e:
      | React.FormEvent<HTMLFormElement>
      | React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) {
    e.preventDefault();
    if (account.username && account.password) {
      const token = await new SignJWT({})
        .setProtectedHeader({ alg: "HS256" })
        .setJti(nanoid())
        .setIssuedAt()
        .setExpirationTime("10m")
        .sign(new TextEncoder().encode(getJwtSecretKey()));

      document.cookie = `user-token=${token}; path=/;`;
      router.push("/todos");
    }
  }

  return (
    <div className={styles.container}>
      <h1>Login to be able to do todos</h1>
      <p>Once logged your session will expire in 10 minutes</p>
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
              value={account.username}
              type="text"
              required
              onChange={(e) =>
                setAccount((prev) => ({ ...prev, username: e.target.value }))
              }
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
              value={account.password}
              type="password"
              required
              onChange={(e) =>
                setAccount((prev) => ({ ...prev, password: e.target.value }))
              }
            />
          </Form.Control>
        </Form.Field>
        <Form.Submit asChild>
          <button
            onClick={handleOnSubmit}
            className={styles.button}
            disabled={!account.username || !account.password}
          >
            Log in
          </button>
        </Form.Submit>
      </Form.Root>
    </div>
  );
}
