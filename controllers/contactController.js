const asyncHandler = require("express-async-handler")
//@desc Get all contacts
//@route GET /api/contacts
//@access public

const getContacts = asyncHandler(async (req,res)=>{
    res.status(200).json({message:"Get all contacts"});
 });

//@desc Get specific contacts
//@route GET /api/contacts/:id
//@access public

const getContact = asyncHandler(async (req,res)=>{
    res.status(200).json({message:`Get contacts for ${req.params.id}`});
 });

 //@desc Create contacts
//@route POST /api/contacts/:id
//@access public

 const createContact = asyncHandler(async (req,res)=>{
    console.log("The request body is",req.body);
    const {ID,Name,Age} = req.body;
    if (!ID||!Name||!Age){
        res.status(400);
        throw new Error("All fields are mandatory!!");
    }
    res.status(200).json({message:"Create all contacts"});
 });

 //@desc Update contacts
//@route PUT /api/contacts/:id
//@access public

 const updateContact = asyncHandler(async (req,res)=>{
    res.status(200).json({message:`Update contacts for ${req.params.id}`});
 });

  //@desc Delete contacts
//@route DELETE /api/contacts/:id
//@access public

 const deleteContact = asyncHandler(async (req,res)=>{
    res.status(200).json({message:`Delete contacts for ${req.params.id}`});
 });

 module.exports = {getContact,getContacts,updateContact,deleteContact,createContact};