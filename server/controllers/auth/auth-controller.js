const bcrypt=require('bcryptjs');
const jwt=require('jsonwebtoken');
const User=require('../../models/User');



//register
const registerUser = async (req, res) => {
  const { userName, email, password } = req.body;

  try {

    const hashPassword=await bcrypt.hash(password,12);
    const newUser=new User({
        userName,email,
        password:hashPassword
    })
    await newUser.save();
    res.status(200).json({
        success: true,
        message:"Registration successful"
    })
  } catch (err) {
    console.log(err);
    res.status(500).json({
      success: false,
      message: "Some error message",
    });
  }
};

// login

const login = async (req, res) => {
  try {
  } catch (err) {
    console.log(err);
    res.status(500).json({
      success: false,
      message: "Some error message",
    });
  }
};

// logout


//auth middleware
module.exports ={registerUser};