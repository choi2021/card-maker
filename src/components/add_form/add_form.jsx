import React, { memo, useRef, useState } from "react";
import Button from "../button/button";
import styles from "./add_form.module.css";

const AddForm = memo(({ onAdd, ImgFileInput }) => {
  const nameRef = useRef();
  const formRef = useRef();
  const companyRef = useRef();
  const themeRef = useRef();
  const jobRef = useRef();
  const emailRef = useRef();
  const commentRef = useRef();

  const [file, setFile] = useState({
    name: "",
    url: "",
  });

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
      fileName: file.name || "",
      fileURL: file.url || "",
    };
    formRef.current.reset();
    setFile({
      name: "",
      url: "",
    });
    onAdd(card);
  };

  const onFileChange = (obj) => {
    setFile({
      name: obj.name,
      url: obj.url,
    });
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
        <ImgFileInput
          fileName={file.name}
          onFileChange={onFileChange}
        ></ImgFileInput>
      </div>
      <div className={styles.add}>
        <Button name="Add" onClick={handleSubmit}></Button>
      </div>
    </form>
  );
});

export default AddForm;
