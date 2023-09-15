const mongoose = require("mongoose");
const Account = mongoose.model('accounts');

module.exports = app =>{
    //Routes
    app.get('/account',async(req,res)=>{
        
        const { rUsername, rPassword } = req.query; 
        if(rUsername == null || rPassword == null)
        {
            res.send("Invalid credentials")
            return
        }
        //Search Database for the username and parse him in userAccount
        var userAccount = await Account.findOne({username: rUsername})

        if(userAccount == null){
            //Create Account
            console.log("Create new account...");

            var newAccount = new Account({
                username: rUsername,
                password: rPassword,

                lastAuthentication: Date.now()
            });
            await newAccount.save();

            res.send(newAccount);
            return;
        } else{
            if(rPassword == userAccount.password){
                userAccount.lastAuthentication = Date.now();
                await userAccount.save();

                res.send(userAccount);
                console.log("Retreiving account");
                return;
            }
            res.send("invalid credentials");
            return;
        }
    })
}