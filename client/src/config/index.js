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
  