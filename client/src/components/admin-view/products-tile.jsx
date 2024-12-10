
function AdminProductTile({
  product,
  setFormData,
  setOpenCreateProductsDialog,
  setCurrentEditedId,
  handleDelete,
}) {
  return (
    <div className="card w-100 col-md-4 mx-auto" style={{backgroundColor:"var(--tm-secondary-bg)"}}>
      <div>
        <div className="position-relative">
          <img
            src={product?.image}
            alt={product?.title}
            className="w-100 img-fluid rounded-top"
            style={{height:"300px" }}         />
        </div>
        <div className="card-body">
          <h2 className="fs-5 fw-bold mb-2 mt-2"
          style={{color:"var(--text-color)"}}>{product?.title}</h2>
          <div className="d-flex justify-content-between align-items-center mb-2">
            <span
              className={`${
                product?.salePrice > 0 ? "text-decoration-line-through" : ""
              } fs-6 fw-semibold`}
              style={{color:"var(--primary-color)"}}
            >
              Rs. {product?.price}
            </span>
            {product?.salePrice > 0 ? (
              <span className="fs-6 fw-bold" style={{color:"var(--primary-color)"}}>Rs. {product?.salePrice}</span>
            ) : null}
          </div>
        
        <div className="d-flex justify-content-between align-items-center">
          <button
            onClick={() => {
              setOpenCreateProductsDialog(true);
              setCurrentEditedId(product?._id);
              setFormData(product);
            }}
            className="rounded border-0 outline-0 py-1 px-4" style={{backgroundColor:"var(--primary-color)"}}
          >
            Edit
          </button>
          <button onClick={() => handleDelete(product?._id)} className="rounded border-0 outline-0 py-1 px-4" style={{backgroundColor:"var(--primary-color)"}}>Delete</button>
        </div>
        </div>
      </div>
    </div>
  );
}

export default AdminProductTile;