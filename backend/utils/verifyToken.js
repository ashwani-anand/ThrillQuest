import jwt from 'jsonwebtoken'

const verifyToken=(req,res,next)=>{
    const Token= req.cookies.token

    if(!Token){
        return next({ status: 401, message: "You are not authorized" });
        // return res.status(401).json({success:false,message:"You are not authorized"})
    }

    //if token exits then verify token
    jwt.verify(Token, process.env.JWT_SECRET_KEY,(err,user)=>{
        if(err){
            return next({ status: 401, message: "Token is invalid" });
            // return  res.status(401).json({success:false,message:"Token is Invalid"})
        }
        req.user=user
        next();  //calling next important
    })
}

export const verifyUser=(req,res,next)=>{
    verifyToken(req,res,next,()=>{
        if(req.user.id===req.params.id||req.user.role==='admin'){
            next()
        }else{
            next({ status: 401, message: "You are not authenticated" });
            // return res.status(401).json({success:false,message:"You are not authenticated"})
        }
    })
     
}


export const verifyAdmin=(req,res,next)=>{
    verifyToken(req,res,next,()=>{
        if(req.user.role==='admin'){
            next()
        }else{
            next({ status: 401, message: "You are not authorized" });
            // res.status(401).json({success:false,message:"You are not authorized"})
        }
    })
     
}



