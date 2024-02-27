const mongoose=require("mongoose")
        
        const contactSchema=mongoose.Schema({
            name:{
                type:String,
                required:[true,"please add contact name"]
            },
            email:{
                type:String,
                required:[true,'please add email address'],
                lowercase:true,
                unique:true,
            },
            phone:{
                type:String,
                required:[true,'please add phone number'],
                unique:true
            }
        },{timestamps:true})

        module.exports = mongoose.model("Contact",contactSchema)