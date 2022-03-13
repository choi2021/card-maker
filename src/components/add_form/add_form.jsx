import React, { useRef, useState } from "react";
import Button from "../button/button";
import ImgFileInput from "../img_file_input/img_file_input";
import styles from "./add_form.module.css";

const AddForm = ({ onAdd }) => {
  const nameRef = useRef();
  const formRef = useRef();
  const companyRef = useRef();
  const themeRef = useRef();
  const jobRef = useRef();
  const emailRef = useRef();
  const commentRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    const card = {
      id: Date.now(),
      name: nameRef.current.value || "",
      company: companyRef.current.value || "",
      theme: themeRef.current.value,
      job: jobRef.current.value || "",
      email: emailRef.current.value || "",
      comment: commentRef.current.value || "",
      fileName: "",
      fileURL: "",
    };
    formRef.current.reset();
    onAdd(card);
  };

  return (
    <form className={styles.form} ref={formRef}>
      <input
        ref={nameRef}
        className={styles.input}
        name="name"
        placeholder="name"
        type="text"
      />
      <input
        ref={companyRef}
        className={styles.input}
        name="company"
        placeholder="company"
        type="text"
      />
      <select ref={themeRef} name="theme" className={styles.select}>
        <option value="Light">Light</option>
        <option value="Dark">Dark</option>
        <option value="Colorful">Colorful</option>
      </select>
      <input
        ref={jobRef}
        className={styles.input}
        name="job"
        placeholder="job"
        type="text"
      />
      <input
        ref={emailRef}
        className={styles.input}
        name="email"
        placeholder="email"
        type="text"
      />
      <textarea
        ref={commentRef}
        name="comment"
        placeholder="comment"
        className={styles.textarea}
      ></textarea>
      <div className={styles.fileInput}>
        <ImgFileInput name={"No file"}></ImgFileInput>
      </div>
      <div className={styles.add}>
        <Button name="Add" onClick={handleSubmit}></Button>
      </div>
    </form>
  );
};

export default AddForm;
