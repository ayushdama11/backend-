const registerUser=(req,res)=>{
    const userName=req.body.name;
    const userEmail=req.body.email;
    const userPswd=req.body.password;

    res.json({
        success: true,
        name: userName,
        email: userEmail,
        password: userPswd,
    });
}

module.exports= registerUser;

