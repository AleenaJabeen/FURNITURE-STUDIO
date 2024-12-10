// const stripe = require("../../helpers/stripe");
// const Order = require("../../models/Order");

// const Cart = require("../../models/Cart");
// const Product = require("../../models/Product");

// const createOrder = async (req, res) => {
//   try {
//     const {
//       userId,
//       cartItems,
//       addressInfo,
//       orderStatus,
//       paymentMethod,
//       paymentStatus,
//       totalAmount,
//       orderDate,
//       orderUpdateDate,
//       paymentId,
//       payerId,
//       cartId,
//     } = req.body;

//     const params={
//         submit_type: 'pay',
//         mode :"payment",
//         payment_method: "card"
//     }

//     const create_payment_json = {
//       mode: 'payment',
//       payer: {
//         payment_method: "card",
//       },
//       redirect_urls: {
//         return_url: `${YOUR_DOMAIN}?success=true`,
//         cancel_url: `${YOUR_DOMAIN}?canceled=true`,
//       },
//       transactions: [
//         {
//           line_items: {
//             items: cartItems.map((item) => ({
//               name: item.title,
//               sku: item.productId,
//               price: item.price.toFixed(2),
//               currency: "USD",
//               quantity: item.quantity,
//             })),
//           },
//           amount: {
//             currency: "USD",
//             total: totalAmount.toFixed(2),
//           },
//           description: "description",
//         },
//       ],
//     };

//     const session = await stripe.checkout.sessions.create(create_payment_json)

//     res.status(303).json(session)
//     // paypal.payment.create(create_payment_json, async (error, paymentInfo) => {
//     //   if (error) {
//     //     console.log(error);

//     //     return res.status(500).json({
//     //       success: false,
//     //       message: "Error while creating paypal payment",
//     //     });
//     //   } else {
//     //     const newlyCreatedOrder = new Order({
//     //       userId,
//     //       cartId,
//     //       cartItems,
//     //       addressInfo,
//     //       orderStatus,
//     //       paymentMethod,
//     //       paymentStatus,
//     //       totalAmount,
//     //       orderDate,
//     //       orderUpdateDate,
//     //       paymentId,
//     //       payerId,
//     //     });

//     //     await newlyCreatedOrder.save();

//     //     const approvalURL = paymentInfo.links.find(
//     //       (link) => link.rel === "approval_url"
//     //     ).href;

//     //     res.status(201).json({
//     //       success: true,
//     //       approvalURL,
//     //       orderId: newlyCreatedOrder._id,
//     //     });
//     //   }
//     // });
//   } catch (e) {
//     console.log(e);
//     res.status(500).json({
//       success: false,
//       message: "Some error occured!",
//     });
//   }
// };

// const capturePayment = async (req, res) => {
//   try {
//     const { paymentId, payerId, orderId } = req.body;

//     let order = await Order.findById(orderId);

//     if (!order) {
//       return res.status(404).json({
//         success: false,
//         message: "Order can not be found",
//       });
//     }

//     order.paymentStatus = "paid";
//     order.orderStatus = "confirmed";
//     order.paymentId = paymentId;
//     order.payerId = payerId;

//     for (let item of order.cartItems) {
//       let product = await Product.findById(item.productId);

//       if (!product) {
//         return res.status(404).json({
//           success: false,
//           message: `Not enough stock for this product ${product.title}`,
//         });
//       }

//       product.totalStock -= item.quantity;

//       await product.save();
//     }

//     const getCartId = order.cartId;
//     await Cart.findByIdAndDelete(getCartId);

//     await order.save();

//     res.status(200).json({
//       success: true,
//       message: "Order confirmed",
//       data: order,
//     });
//   } catch (e) {
//     console.log(e);
//     res.status(500).json({
//       success: false,
//       message: "Some error occured!",
//     });
//   }
// };

// const getAllOrdersByUser = async (req, res) => {
//   try {
//     const { userId } = req.params;

//     const orders = await Order.find({ userId });

//     if (!orders.length) {
//       return res.status(404).json({
//         success: false,
//         message: "No orders found!",
//       });
//     }

//     res.status(200).json({
//       success: true,
//       data: orders,
//     });
//   } catch (e) {
//     console.log(e);
//     res.status(500).json({
//       success: false,
//       message: "Some error occured!",
//     });
//   }
// };

// const getOrderDetails = async (req, res) => {
//   try {
//     const { id } = req.params;

//     const order = await Order.findById(id);

//     if (!order) {
//       return res.status(404).json({
//         success: false,
//         message: "Order not found!",
//       });
//     }

//     res.status(200).json({
//       success: true,
//       data: order,
//     });
//   } catch (e) {
//     console.log(e);
//     res.status(500).json({
//       success: false,
//       message: "Some error occured!",
//     });
//   }
// };

// module.exports = {
//   createOrder,
//   capturePayment,
//   getAllOrdersByUser,
//   getOrderDetails,
// };

const stripe = require("../../helpers/stripe");
const Order = require("../../models/Order");
const Cart = require("../../models/Cart");
const Product = require("../../models/Product");

const createOrder = async (req, res) => {
  try {
    const {
      userId,
      cartItems,
      addressInfo,
      orderStatus,
      paymentMethod,
      paymentStatus,
      totalAmount,
      orderDate,
      orderUpdateDate,               
      //paymentId,
      payerId,
      cartId,
    } = req.body;

    // Create Stripe Checkout session
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      line_items: cartItems.map((item) => ({
        price_data: {
          currency: "pkr",
          product_data: {
            name: item.title,
            images: [item.image], 
          },
          unit_amount: Math.round( item.price*100), // Amount in cents
        },
        quantity: item.quantity,
      })),
      mode: "payment",
      success_url: `http://localhost:5173/shop/order-completed?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `http://localhost:5173/shop/checkout`,
      metadata: {
        userId: userId.toString(),
        cartId: cartId.toString()
      },
    });

    // Create a preliminary order
    const newlyCreatedOrder = new Order({
      userId,
      cartId,
      cartItems,
      addressInfo,
      orderStatus,
      paymentMethod,
      paymentStatus,
      totalAmount,
      orderDate,
      orderUpdateDate,
      paymentId: session.id, // Store Stripe session ID
      payerId,
    });

    await newlyCreatedOrder.save();

    res.status(201).json({
      success: true,
      sessionId: session.id,
      orderId: newlyCreatedOrder._id,
    });
  } catch (error) {
    console.error("Error creating Stripe session:", error.message);

    res.status(500).json({
      success: false,
      message: "Failed to create order. Please try again.",
    });
  }
};


const capturePayment = async (req, res) => {
  try {
    const { sessionId,orderId } = req.body;

    // Retrieve the Stripe session
    const session = await stripe.checkout.sessions.retrieve(sessionId);

    if (!session || session.payment_status !== "paid") {
      return res.status(400).json({
        success: false,
        message: "Payment not completed",
      });
    }

    let order = await Order.findById(orderId);

    if (!order) {
      return res.status(404).json({
        success: false,
        message: "Order not found",
      });
    }

    // Update the order status
    order.paymentStatus = "paid";
    order.orderStatus = "confirmed";
    order.paymentId = sessionId;
    // order.payerId = payerId;

    // Reduce stock for each item
    for (let item of order.cartItems) {
      let product = await Product.findById(item.productId);

      if (!product) {
        return res.status(404).json({
          success: false,
          message: `Product ${item.title} not found`,
        });
      }

      product.totalStock -= item.quantity;
      await product.save();
    }

    // Delete the associated cart
    const getCartId = order.cartId;
    await Cart.findByIdAndDelete(getCartId);

    await order.save();

    res.status(200).json({
      success: true,
      message: "Order confirmed",
      data: order,
    });
  } catch (e) {
    console.log(e);
    res.status(500).json({
      success: false,
      message: "Some error occurred!",
    });
  }
};

const getAllOrdersByUser = async (req, res) => {
  try {
    const { userId } = req.params;

    const orders = await Order.find({ userId });

    if (!orders.length) {
      return res.status(404).json({
        success: false,
        message: "No orders found!",
      });
    }

    res.status(200).json({
      success: true,
      data: orders,
    });
  } catch (e) {
    console.log(e);
    res.status(500).json({
      success: false,
      message: "Some error occurred!",
    });
  }
};

const getOrderDetails = async (req, res) => {
  try {
    const { id } = req.params;

    const order = await Order.findById(id);

    if (!order) {
      return res.status(404).json({
        success: false,
        message: "Order not found!",
      });
    }

    res.status(200).json({
      success: true,
      data: order,
    });
  } catch (e) {
    console.log(e);
    res.status(500).json({
      success: false,
      message: "Some error occurred!",
    });
  }
};

module.exports = {
  createOrder,
  capturePayment,
  getAllOrdersByUser,
  getOrderDetails,
};
