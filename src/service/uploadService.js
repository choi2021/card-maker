class UploadService {
  constructor(key) {
    this.key = key;
  }
  async postUpload(file) {
    const data = new FormData();
    data.append("file", file);
    data.append("upload_preset", "a5ycegdn");
    const response = await fetch(
      `https://api.cloudinary.com/v1_1/${process.env.REACT_APP_CLOUD_NAME}/image/upload`,
      {
        method: "post",
        body: data,
      }
    );
    return response.json();
  }
}

export default UploadService;
