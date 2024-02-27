const asyncHandler=require("express-async-handler")
const Contact =require("../models/contact.model.js")

//@desc get all contacts
//@route GET/api/contacts
//acess public
const getContacts=asyncHandler(async (req,res)=>{
    const contacts= await Contact.find()
    res.status(200).json(contacts)
})

//@desc create a contacts
//@route POST/api/contacts
//acess public

const createContact= asyncHandler(async (req,res)=>{
    console.log("The request body is:",req.body);
    const{name,email,phone}=req.body
    if(!name || !email || !phone){
        res.status(400)
        throw new Error("All fileds are mandatory")
    }
    const newContact=await Contact.create({
        name,
        email,
        phone,
    })
    res.status(200).json(newContact)
})


//@desc create a contacts
//@route GET/api/contacts
//acess public
const getContact=asyncHandler(async (req,res)=>{
    const contact= await Contact.findById(req.params.id)
    if(!contact){
        res.statusCode(404)
        throw new Eroor("Contact not found....!")
    }
    res.status(200).json(contact)
})

//@desc update a contacts
//@route PUT/api/contacts
//acess public

const updateContact=asyncHandler(async (req,res)=>{
    const updatedContact=await Contact.findByIdAndUpdate(
        req.params.id,
        req.body,
        {new:true}
    )
    res.status(200).json(updatedContact)
})


//@desc delete a contacts
//@route DELETE/api/contacts
//acess public

const deleteContact=asyncHandler(async (req,res)=>{
    const contact= await Contact.findById(req.params.id)
    if(!contact){
        res.statusCode(404)
        throw new Error("Contact not found....!")
    }
    console.log(contact);
   await Contact.

    res.status(200).json(contact)
})
module.exports={getContacts,createContact,getContact,updateContact,deleteContact}