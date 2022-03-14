import React, { useRef, useState } from "react";
import styles from "./img_file_input.module.css";

const ImgFileInput = ({ card, fileName, onFileChange, upload }) => {
  const [isLoading, setIsLoading] = useState(false);

  const inputRef = useRef();

  const handleClick = (e) => {
    e.preventDefault();
    inputRef.current.click();
  };
  const handleChange = async (e) => {
    const fileName = e.target.files[0];
    setIsLoading(true);
    const uploaded = await upload.postUpload(fileName);
    setIsLoading(false);
    console.log(uploaded.original_filename);

    onFileChange({
      name: uploaded.original_filename,
      url: uploaded.url,
    });
  };

  return (
    <section className={`${styles.container} `}>
      <input
        name={"file"}
        className={styles.fileUpload}
        type="file"
        ref={inputRef}
        onChange={handleChange}
        accept="image/*"
      ></input>
      {!isLoading && (
        <button
          className={`${styles.button} ${
            fileName ? styles.onFile : styles.default
          }`}
          onClick={handleClick}
        >
          {fileName || "No file"}
        </button>
      )}
      {isLoading && <div className={styles.spinner}></div>}
    </section>
  );
};

export default ImgFileInput;
