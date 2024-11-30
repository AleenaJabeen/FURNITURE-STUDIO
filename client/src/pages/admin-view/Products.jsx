import React, { Fragment, useEffect, useState } from "react";
import styles from "../../css/AdminCSS/AdminLayout.module.css";
import AdminProductTile from "../../components/admin-view/products-tile";
import CommonForm from "../../components/common/form";
import ProductImageUpload from "../../components/admin-view/image-upload";
import { addProductFormElements } from "../../config";
import style from "../../css/AdminCSS/Product.module.css";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {
  addNewProduct,
  deleteProduct,
  editProduct,
  fetchAllProducts,
} from "../../store/admin/products-slice";

const initialFormData = {
  image: null,
  title: "",
  category: "",
  price: "",
  salePrice: "",
  totalStock: "",
};

function Products() {
  const [openCreateProductsDialog, setOpenCreateProductsDialog] =
    useState(false);
  const [formData, setFormData] = useState(initialFormData);
  const [imageFile, setImageFile] = useState(null);
  const [uploadedImageUrl, setUploadedImageUrl] = useState("");
  const [imageLoadingState, setImageLoadingState] = useState(false);
  const [currentEditedId, setCurrentEditedId] = useState(null);

  const { productList } = useSelector((state) => state.adminProducts);
  const dispatch = useDispatch();

  function onSubmit(event) {
    event.preventDefault();

    currentEditedId !== null
      ? dispatch(
          editProduct({
            id: currentEditedId,
             formData,
          })
        ).then((data) => {
          console.log(data, "edit");

          if (data?.payload?.success) {
            dispatch(fetchAllProducts());
            setFormData(initialFormData);
            setOpenCreateProductsDialog(false);
            setCurrentEditedId(null);
          }
        })
      :
    dispatch(
      addNewProduct({
        ...formData,
        image: uploadedImageUrl,
      })
    ).then((data) => {
      if (data?.payload?.success) {
        dispatch(fetchAllProducts());
        setOpenCreateProductsDialog(false);
        setImageFile(null);
        setFormData(initialFormData);
        toast.success("Product Added Successfully", {
          position: "bottom-right",
          autoClose: 3000,
          style: {
            fontSize: "16px",
            fontWeight: "bold",
            fontFamily: "'Arial', sans-serif",
            padding: "15px",
            color: "#caa571",
            backgroundColor: "#000000",
            textAlign: "center",
          },
        });
      }
    });
  }

  function handleDelete(getCurrentProductId) {
    dispatch(deleteProduct(getCurrentProductId)).then((data) => {
      if (data?.payload?.success) {
        dispatch(fetchAllProducts());
      }
    });
  }

  function isFormValid() {
    return Object.keys(formData)
      .map((key) => formData[key] !== "")
      .every((item) => item);
  }

  useEffect(() => {
    dispatch(fetchAllProducts());
  }, [dispatch]);

  console.log(formData, "productList");

  return (
    <Fragment>
      <div className="mb-5 w-100 d-flex justify-content-end">
        <button
          className="p-2 border-0 outline-0 rounded-2 fs-5 fw-medium "
          style={{
            backgroundColor: "var(--primary-color)",
            color: "var(--tm-secondary-bg)",
          }}
          onClick={() => setOpenCreateProductsDialog(true)}
        >
          Add New Product
        </button>
      </div>
      <div className="row g-4">
        {productList && productList.length > 0
          ? productList.map((productItem, index) => (
              <div key={index} className="col-lg-4 col-6">
                <AdminProductTile
                  setFormData={setFormData}
                  setOpenCreateProductsDialog={setOpenCreateProductsDialog}
                  product={productItem}
                  handleDelete={handleDelete}
                  setCurrentEditedId={setCurrentEditedId}
                />
              </div>
            ))
          : null}
      </div>
      <div
        className={`flex-column p-3 ${
          openCreateProductsDialog ? "d-flex" : "d-none"
        } `}
        style={{
          width: "25rem",
          height: "100vh",
          backgroundColor: "var(--footer-bg)",
          position: "fixed",
          top: 0,
          right: 0,
          zIndex: 1000,
          transition: "0.3s",
          overflowY: "auto",
        }}
      >
        <div
          className={`d-flex cursor-pointer mb-4 justify-content-between align-items-center gap-2 ${styles.mainheading}`}
        >
          <h1 className="fs-2 fw-bolder mb-0">{currentEditedId !== null ? "Edit Product" : "Add New Product"}</h1>
          <svg
            onClick={() =>{ setOpenCreateProductsDialog(false);
              setCurrentEditedId(null);
          setFormData(initialFormData);}
            }
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="lucide lucide-x"
          >
            <path d="M18 6 6 18" />
            <path d="m6 6 12 12" />
          </svg>
        </div>
        <ProductImageUpload
          imageFile={imageFile}
          setImageFile={setImageFile}
          uploadedImageUrl={uploadedImageUrl}
          setUploadedImageUrl={setUploadedImageUrl}
          setImageLoadingState={setImageLoadingState}
          imageLoadingState={imageLoadingState}
          isEditMode={currentEditedId !== null}
        />
        <div className={`${style.addProductForm} py-1`}>
          <CommonForm
            onSubmit={onSubmit}
            formData={formData}
            setFormData={setFormData}
            buttonText={currentEditedId !== null ? "Edit" : "Add"}
            formControls={addProductFormElements}
            isBtnDisabled={!isFormValid()}
          />
        </div>
      </div>
    </Fragment>
  );
}

export default Products;
