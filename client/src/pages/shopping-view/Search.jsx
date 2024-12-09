import React,{useState,useEffect} from 'react'
import { useDispatch, useSelector } from "react-redux";
import { useSearchParams } from "react-router-dom";
import { addToCart, fetchCartItems } from "../../store/shop/cart-slice";
import {
  getSearchResults,
  resetSearchResults,
} from "../../store/shop/search-slice";
import { ProductTile } from '../../components';
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


function Search() {
  const [keyword, setKeyword] = useState("");
  const dispatch = useDispatch();
  const [searchParams, setSearchParams] = useSearchParams();
  const { searchResults } = useSelector((state) => state.shopSearch);
  // const { productDetails } = useSelector((state) => state.shopProducts);

  const { user } = useSelector((state) => state.auth);

  const { cartItems } = useSelector((state) => state.shopCart);
  useEffect(() => {
    if (keyword && keyword.trim() !== "" && keyword.trim().length > 3) {
      setTimeout(() => {
        setSearchParams(new URLSearchParams(`?keyword=${keyword}`));
        dispatch(getSearchResults(keyword));
      }, 1000);
    } else {
      setSearchParams(new URLSearchParams(`?keyword=${keyword}`));
      dispatch(resetSearchResults());
    }
  }, [keyword]);

  function handleAddtoCart(getCurrentProductId, getTotalStock) {
    console.log(cartItems);
    let getCartItems = cartItems.items || [];

    if (getCartItems.length) {
      const indexOfCurrentItem = getCartItems.findIndex(
        (item) => item.productId === getCurrentProductId
      );
      if (indexOfCurrentItem > -1) {
        const getQuantity = getCartItems[indexOfCurrentItem].quantity;
        if (getQuantity + 1 > getTotalStock) {
          const message = `Only ${getQuantity} quantity can be added for this item`;
          toast.error(message, {
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

          return;
        }
      }
    }

    dispatch(
      addToCart({
        userId: user?.id,
        productId: getCurrentProductId,
        quantity: 1,
      })
    ).then((data) => {
      if (data?.payload?.success) {
        dispatch(fetchCartItems(user?.id));
        const message = "Product is added to cart successfully!";
          toast.success(message, {
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
  console.log(searchResults,"results");
  return (
    <>

    <div className='container-fluid p-2 bg-dark'>
      <div className='container' style={{width:"100%"}}>
        <div className='col-12'>
         <input className='w-100 p-2 mx-auto'  onChange={(event) => setKeyword(event.target.value)} type="text" name="keyword"  placeholder='Search Products...' style={{background:"transparent",border:"2px solid #caa571",color:"white"}}/>
        </div>
      </div>
      <div className='p-4 fs-4 text-white'>Search Results</div>
      {!searchResults.length ? (
        <h1 className="text-5xl font-extrabold">No result found!</h1>
      ) : null}

        <div className="row">
        {searchResults.map((item) => (
          <ProductTile
            handleAddtoCart={handleAddtoCart}
            products={item}
            // handleGetProductDetails={handleGetProductDetails}
          />
        ))}        </div>
      </div>
      
    </>
  )
}

export default Search
