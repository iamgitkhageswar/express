const {constant}=require("./../constant")
const errorHandler=(error,req,res,next)=>{
    const statusCode=res.statusCode ? res.statusCode :500
    switch (statusCode) {
        case constant.VALIDATION_FAILED:
            res.json({title:'validation_failed',
                message:err.message,
                StractTrace:err.stack
            });
            break;
            
        case constant.UNAUTH0RIZED:
            res.json({title:'unauthorized_access',
                message:err.message,
                StractTrace:err.stack
            })
            
        case constant.FORBIDDEN:
            res.json({tittle:'forbidden',
            message:err.message,
            StractTrace:err.stack
                
           })
           
           case constant.NOT_FOUND:
            res.json({tittle:'not_found',
            message:err.message,
            StractTrace:err.stack
                
           })
        default:
            console.log("no error...all good");
            break;
    }
    
}


module.exports=errorHandler
