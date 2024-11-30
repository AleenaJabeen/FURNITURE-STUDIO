import { useRef,useEffect } from "react";
import style from "../../css/AdminCSS/Product.module.css";
import axios from 'axios';

function ProductImageUpload({
  imageFile,
  setImageFile,
  imageLoadingState,
  uploadedImageUrl,
  setUploadedImageUrl,
  setImageLoadingState,
  isEditMode,
  isCustomStyling = false,
}) {
  const inputRef = useRef(null);

  function handleImageFileChange(event) {
    console.log(event.target.files, "event.target.files");
    const selectedFile = event.target.files?.[0];
    console.log(selectedFile);

    if (selectedFile) setImageFile(selectedFile);
  }

  function handleDragOver(event) {
    event.preventDefault();
  }

  function handleDrop(event) {
    event.preventDefault();
    const droppedFile = event.dataTransfer.files?.[0];
    if (droppedFile) setImageFile(droppedFile);
  }
  function handleRemoveImage() {
    setImageFile(null);
    if (inputRef.current) {
      inputRef.current.value = "";
    }
  }

  async function uploadImageToCloudinary() {
    setImageLoadingState(true);
    const data = new FormData();
    data.append("my_file", imageFile);
    const response = await axios.post(
      "http://localhost:5000/api/admin/products/upload-image",
      data
    );
    console.log(response, "response");

    if (response?.data?.success) {
      setUploadedImageUrl(response.data.result.url);
      console.log(uploadedImageUrl)
      setImageLoadingState(false);
    }
  }

  useEffect(() => {
    if (imageFile !== null) uploadImageToCloudinary();
  }, [imageFile]);

  return (
    <div className="mx-auto w-100 mt-2" style={{ maxWidth: "448px" }}>
      <label
        className="fs-5 fw-semibold mb-2 d-block"
        style={{ color: "var(--primary-color)" }}
      >
        Upload Image
      </label>
      <div onDragOver={handleDragOver} onDrop={handleDrop} className={`py-3 ${
          isEditMode ? "opacity-50" : ""
        } `}>
        <input
          id="image-upload"
          type="file"
          className={`visually-hidden mb-3 ${style.fileInput}`}
          ref={inputRef}
          onChange={handleImageFileChange}
          disabled={isEditMode}
        />
        {!imageFile ? (
          <label
            htmlFor="image-upload"
            className="d-flex flex-column align-items-center justify-content-center "
            style={{
              height: "128px",
              cursor: "pointer",
              color: "var(--primary-color)",
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="70"
              height="70"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-cloud-upload"
            >
              <path d="M12 13v8" />
              <path d="M4 14.899A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.5 8.242" />
              <path d="m8 17 4-4 4 4" />
            </svg>
            <span>Drag & drop or click to upload image</span>
          </label>
        ) : (
          <div className="d-flex justify-content-between align-items-center" style={{ color: "var(--primary-color)" }}>
            <div
              className="d-flex align-items-center"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="lucide lucide-file"
              >
                <path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z" />
                <path d="M14 2v4a2 2 0 0 0 2 2h4" />
              </svg>
            </div>
            <p
              className="fs-4 fw-medium mb-0"
              style={{ color: "var(--primary-color)" }}
            >
              {imageFile.name}
            </p>
            <button
              style={{ backgroundColor: "transparent", color:"var(--primary-color)" }}
              className="border-0 outline-0"
              onClick={handleRemoveImage}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="lucide lucide-x"
              >
                <path d="M18 6 6 18" />
                <path d="m6 6 12 12" />
              </svg>
              <span className="visually-hidden">Remove File</span>
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default ProductImageUpload;
