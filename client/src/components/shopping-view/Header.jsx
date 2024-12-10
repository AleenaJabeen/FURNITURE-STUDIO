import React, { useState ,useEffect} from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdClose } from "react-icons/io";
import { logo } from "../../assets";
import {
  fetchCartItems
} from "../../store/shop/cart-slice";
import "../../css/ShoppingCSS/Styles.css";
import { IoPersonOutline } from "react-icons/io5";
import { FaCartShopping } from "react-icons/fa6";
import { NavLink, useNavigate,useLocation,
  useSearchParams, } from "react-router-dom";
import { TiArrowSortedDown } from "react-icons/ti";
import { shoppingViewMenuItems } from "../../config";
import { useDispatch, useSelector } from "react-redux";
import { logoutUser } from "../../store/auth-slice";
import { Link } from "react-router-dom";

function MenuItems({handleToggle}) {

  return (
    <nav className="navbar navbar-expand-lg  py-0">
      <ul className="navbar-nav mx-auto py-0 ">
        {shoppingViewMenuItems.map((menuItem) => {
            // Render standard NavLink
            return (
              <li className="nav-item px-2" key={menuItem.id}>
                <NavLink
                  to={menuItem.path}
                  style={{fontSize:"1rem"}}
                  className={({ isActive }) =>
                    `nav-link  ${isActive ? "active" : ""}`
                  }
                  aria-current="page" 
                  onClick={handleToggle}
                >
                  {menuItem.label}
                </NavLink>
              </li>
            );
        })}
      </ul>
    </nav>
  );
}
function HeaderRight() {
  const { cartItems } = useSelector((state) => state.shopCart);
  const [isOpen, setIsOpen] = useState(false);
  const { user } = useSelector((state) => state.auth);
  const handleToggle = () => {
    setIsOpen(!isOpen);
  };
  const handleClose = () => {
    setIsOpen(false);
  };
  const dispatch = useDispatch();

  function handleLogout() {
    dispatch(logoutUser());
  }
  useEffect(() => {
    dispatch(fetchCartItems(user?.id));
  }, [dispatch]);
  const totalQuantity = cartItems?.items?.reduce((total, item) => total + item.quantity, 0);
  return (
    <>
      <ul className="navbar-nav header-right ms-auto py-0 align-items-center">
        <li className="nav-item px-2 ms-auto cart-icon position-relative mt-auto">
          <NavLink
            className={({ isActive }) => `nav-link cartLink ${isActive ? "active" : ""}`}
            to="/shop/cart"
            onClick={handleClose}
          >
            <FaCartShopping className="loginIcon" />
            <span className="position-absolute fw-bold text-sm rounded-circle d-flex justify-content-center align-items-center" style={{top: "-4px", right: "2px",backgroundColor:"var(--primary-color)", height:"25px",width:"25px"}}>{totalQuantity || 0}</span>

          </NavLink>
        </li>
        <li className="nav-item px-2 ms-auto">
          <NavLink
            className={({ isActive }) => `nav-link ${isActive ? "active" : ""}`}
            onClick={handleToggle}
          >
            <div className="UserValue text-white" onClick={handleToggle}>
              {user?.userName[0].toUpperCase()}
            </div>
            <ul className={`side ${isOpen ? "d-block" : "d-none"}`}>
              <li>Logging in as {user.userName.toUpperCase()}</li>
              <li className=""><Link to={"/shop/account"} className="text-decoration-none border-0 d-flex align-items-center gap-1" style={{color:"#caa571"}}>
              <span><IoPersonOutline className="fs-2 pe-2" /></span>
                <span>Account</span> </Link>
             </li>
              <li onClick={handleLogout}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-log-out"
                >
                  <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" />
                  <polyline points="16 17 21 12 16 7" />
                  <line x1="21" x2="9" y1="12" y2="12" />
                </svg>
                Logout
              </li>
            </ul>
          </NavLink>
        </li>
      </ul>
    </>
  );
}

function ShoppingHeader() {
  const { isAuthenticated, user } = useSelector((state) => state.auth);
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <header className="navbar navbar-expand-lg py-0">
        <div className="container-fluid navbarContainer">
          {/* Navbar Brand */}
          <div className="navbar-brand">
            <img src={logo} alt="Logo" />
            <span className="span">
              FURNITURE <br /> STUDIO
            </span>
          </div>

          {/* Toggler Button */}
          <button
            className="navbar-toggler my-auto border-0 outline-0 shadow-none"
            type="button"
            onClick={handleToggle}
            aria-controls="navbarNavDropdown"
            aria-expanded={isOpen ? "true" : "false"}
            aria-label="Toggle navigation"
          >
            <span>{isOpen ? <span className="Close"><IoMdClose /></span> : <GiHamburgerMenu />}</span>
          </button>

          {/* Collapsible Menu */}
          <div
            className={`collapse  navbar-collapse ${isOpen ? "show" : ""}`}
            id="navbarNavDropdown"
          >
            <MenuItems handleToggle={handleToggle} />
          </div>

          {/* Header Right */}
          <div className="header-right">
            <HeaderRight />
          </div>
        </div>
      </header>
    </>
  );
}

export default ShoppingHeader;
