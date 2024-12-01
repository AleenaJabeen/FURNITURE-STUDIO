export const registerFormControls = [
    {
      name: "userName",
      placeholder: "Username",
      componentType: "input",
      type: "text",
    },
    {
      name: "email",
      placeholder: "Email",
      componentType: "input",
      type: "email",
    },
    {
      name: "password",
      placeholder: "Password",
      componentType: "input",
      type: "password",
    },
  ];
  export const loginFormControls = [
   
    {
      name: "email",
      placeholder: "Email",
      componentType: "input",
      type: "email",
    },
    {
      name: "password",
      placeholder: "Password",
      componentType: "input",
      type: "password",
    },
  ];

  export const addProductFormElements = [
    {
      label: "Title",
      name: "title",
      componentType: "input",
      type: "text",
      placeholder: "Enter product title",
    },
    {
      label: "Category",
      name: "category",
      componentType: "select",
      options: [
        { id: "lighting", label: "Lighting" },
        { id: "furniture", label: "Furniture" },
        { id: "accessories", label: "Accessories" }
      ],
    },
    {
      label: "Price",
      name: "price",
      componentType: "input",
      type: "number",
      placeholder: "Enter product price",
    },
    {
      label: "Sale Price",
      name: "salePrice",
      componentType: "input",
      type: "number",
      placeholder: "Enter sale price (optional)",
    },
    {
      label: "Total Stock",
      name: "totalStock",
      componentType: "input",
      type: "number",
      placeholder: "Enter total stock",
    },
  ];
  
  export const shoppingViewMenuItems=[
    {
      id:'Home',
      label:'Home',
      path:'/shop/home'
    },
    {
      id:'about us',
       label:'ABOUT US',
        path:'/shop/about'
    },
    { id:"categories",
      label:'CATEGORIES',
      path:'/shop/listing',
      categories:
       [{
      id:'furniture',
      label:'Luxury Furniture',
      path:'/shop/listing'
    },
    {
      id:'lighting',
      label:'Lighting',
      path:'/shop/listing'
    },
     {
      id:'accessories',
      label:'Accessories',
      path:'/shop/listing'
    }
  ]
  },
  {
    id:'contact',
     label:'CONTACT US',
      path:'/shop/contact'
  }


  ];
export const categoryOptionsMap={
  'furniture':'Luxury Furniture',
  'lighting':'Lighting',
  'accessories':'Accessories'
}
export  const filterOptions=
    {
      category:[
        {id:"furniture", label:"Luxury Furniture"},
        {id:"lighting", label:"Lighting"},
        {id:"accessories", label:"Accessories"},
      ]

    };
export const sortOptions=[
  {
    id:"price-lowtohigh",label:"Price:Low to High",
  },
  {
    id:"price-hightolow",label:"Price:High to Low",
  },
  {
    id:"title-atoz",label:"Title:A to Z",
  },
  {
    id:"title-ztoa",label:"Title:Z to A",
  }
]

  


