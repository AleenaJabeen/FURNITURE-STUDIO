    import React, { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdClose } from "react-icons/io";
import { logo } from '../../assets';
import "../../css/ShoppingCSS/Styles.css";
import { IoPersonOutline } from "react-icons/io5";
import { FaCartShopping } from "react-icons/fa6";
import { NavLink, useNavigate } from "react-router-dom";
import { TiArrowSortedDown } from "react-icons/ti";
import { useSelector } from "react-redux";
import { shoppingViewMenuItems } from "../../config";
import { useDispatch } from "react-redux";
import { logoutUser } from "../../store/auth-slice";

const handleClose = () => {
  setIsOpen(false);
};
function MenuItems() {
  const [dropdownVisible, setDropdownVisible] = useState(false);

  return (
    <nav className="navbar navbar-expand-lg ms-auto">
      <ul className="navbar-nav ms-auto">
        {shoppingViewMenuItems.map((menuItem) => {
          if (menuItem.id === "categories") {
  
            // Render dropdown for "Categories"
            return (
              <li
                className="nav-item categories px-2"
                key={menuItem.id}
                onMouseEnter={() => setDropdownVisible(true)}
                onMouseLeave={() => setDropdownVisible(false)}
              >
                <span className="nav-link">
                  {menuItem.label} <TiArrowSortedDown />
                </span>
                {dropdownVisible && (
                  <div className="custom-dropdown">
                    {menuItem.categories.map((subcategory) => (
                      <NavLink
                      className={({ isActive }) =>
                        `nav-link dropdown-item ${isActive ? "activate" : ""}`
                      }
                        to={subcategory.path}
                        key={subcategory.id}
                        onClick={handleClose}
                      >
                        {subcategory.label}
                      </NavLink>
                    ))}
                  </div>
                )}
              </li>
            );
          } else {
            // Render standard NavLink
            return (
              <li className="nav-item px-2" key={menuItem.id}>
                <NavLink
                  to={menuItem.path}
                  className={({ isActive }) =>
                    `nav-link ${isActive ? "active" : ""}`
                  }
                  aria-current="page"
                  onClick={handleClose}
                >
                  {menuItem.label}
                </NavLink>
              </li>
            );
          }
        })}
      </ul>
    </nav>
  );
}
function HeaderRight(){
  const [isOpen, setIsOpen] = useState(false);
const navigate=useNavigate();
  const {user}=useSelector((state)=>state.auth);
  const handleToggle = () => {
    setIsOpen(!isOpen);
  };
  const handleNavigate=()=>{
    navigate('/shop/account');
  }
  const dispatch = useDispatch();

  function handleLogout() {
    dispatch(logoutUser());
  }
  return(<>
  <ul className="navbar-nav ms-auto">
 <li className="nav-item px-2 ms-auto">
              <NavLink className={({ isActive }) =>
                `nav-link ${isActive ? "active" : ""}`
              } to="/" onClick={handleClose}>
                <FaCartShopping className="loginIcon" />
              </NavLink>
            </li>
            <div className="nav-item px-2 ms-auto">
              <NavLink className={({ isActive }) =>
                `nav-link ${isActive ? "active" : ""}`
              } onClick={handleToggle}>
                <div className="UserValue text-white" onClick={handleToggle}>{user?.userName[0].toUpperCase()}</div>
                <ul className={`side ${isOpen ? "d-block" : "d-none"}`} >
                  <li>Logging in as {user.userName.toUpperCase()}</li>
                  <li onClick={handleNavigate}> <IoPersonOutline className="loginIcon"/>Account</li>
                  <li onClick={handleLogout}><svg
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
            </svg>Logout</li></ul>
              </NavLink>
            </div>
            </ul>
  </>);
}

function ShoppingHeader() {
  const {isAuthenticated,user}=useSelector((state)=>state.auth);
  console.log("userb",user);
  const [isOpen, setIsOpen] = useState(false);
  const handleToggle = () => {
    setIsOpen(!isOpen);
  };
  
 

  return (
    <>
    <header className="navbar navbar-expand-lg">
    <div className="container-fluid">
     <div className="navbar-brand">
      <img src={logo} alt="Logo" />
      <span className="span">FURNITURE <br /> STUDIO</span>
      </div>
      <button
        className="navbar-toggler"
         type="button"
         onClick={handleToggle}
          aria-controls="navbarNavDropdown"
          aria-expanded={isOpen ? "true" : "false"}
         aria-label="Toggle navigation"
       >
         <span className="navbar-toggler-icon">
             {isOpen ? <IoMdClose /> : <GiHamburgerMenu />}
          </span>
      </button>
      <div
          className={`collapse navbar-collapse ${isOpen ? "show" : ""}`}
          id="navbarNavDropdown"
        >
        <MenuItems/>
        <HeaderRight/>
        </div>
    </div>

   <div className="d-none lg:d-block">
      <HeaderRight/>
    </div>
    </header>

    </>
    // <nav className="navbar navbar-expand-lg">
    //   <div className="container-fluid">
    //     <div className="navbar-brand">
    //       <img src={logo} alt="Logo" />
    //       <span className="span">FURNITURE <br /> STUDIO</span>
    //     </div>
    //     <button
    //       className="navbar-toggler"
    //       type="button"
    //       onClick={handleToggle}
    //       aria-controls="navbarNavDropdown"
    //       aria-expanded={isOpen ? "true" : "false"}
    //       aria-label="Toggle navigation"
    //     >
    //       <span className="navbar-toggler-icon">
    //         {isOpen ? <IoMdClose /> : <GiHamburgerMenu />}
    //       </span>
    //     </button>
    //     <div
    //       className={`collapse navbar-collapse ${isOpen ? "show" : ""}`}
    //       id="navbarNavDropdown"
    //     >
    //       <ul className="navbar-nav ms-auto">
    //         <li className="nav-item px-2">
    //           <NavLink
    //             to="/"
    //             className={({ isActive }) =>
    //               `nav-link ${isActive ? "active" : ""}`
    //             }
    //             aria-current="page"
    //             onClick={handleClose}
    //           >
    //             HOME
    //           </NavLink>
    //         </li>
    //         <li className="nav-item px-2">
    //           <NavLink className={({ isActive }) =>
    //             `nav-link ${isActive ? "active" : ""}`
    //           } to="/about" onClick={handleClose}>
    //             ABOUT US
    //           </NavLink>
    //         </li>
    //         <li
    //           className="nav-item categories px-2"
    //           onMouseEnter={() => setDropdownVisible(true)}
    //           onMouseLeave={() => setDropdownVisible(false)}
    //         >
    //           <Link className="nav-link" >
    //             CATEGORIES
    //             <TiArrowSortedDown />
    //           </Link>
    //           {dropdownVisible && (
    //             <div className="custom-dropdown">
    //               <NavLink className="dropdown-item" to="/category/Furniture" onClick={handleClose}>
    //                 Furniture
    //               </NavLink>
    //               <NavLink className="dropdown-item" to="/category/Lighting" onClick={handleClose}>
    //                 Lighting
    //               </NavLink>
    //               <NavLink className="dropdown-item" to="/category/Accessories" onClick={handleClose}>
    //                 Accessories
    //               </NavLink>
    //             </div>
    //           )}
    //         </li>
    //         <li className="nav-item px-2">
    //           <NavLink className={({ isActive }) =>
    //             `nav-link ${isActive ? "active" : ""}`
    //           } to="/contact" onClick={handleClose}>
    //             CONTACT US
    //           </NavLink>
    //         </li>
            // <li className="nav-item px-2">
            //   <NavLink className={({ isActive }) =>
            //     `nav-link ${isActive ? "active" : ""}`
            //   } to="/cart" onClick={handleClose}>
            //     <FaCartShopping className="loginIcon" />
            //   </NavLink>
            // </li>
            // <li className="nav-item px-2">
            //   <NavLink className={({ isActive }) =>
            //     `nav-link ${isActive ? "active" : ""}`
            //   } to="/login" onClick={handleClose}>
            //     <IoPersonOutline className="loginIcon" />
            //   </NavLink>
            // </li>
    //       </ul>
    //     </div>
    //   </div>
    // </nav>
  );
}

export default ShoppingHeader;
