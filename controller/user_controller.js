const UserServices = require("../services/user_services");


exports.register = async (req, res, next) => {
    try {
        const { userid,name,  email, phone, address, state, postcode, city,country ,date,} = req.body;
       
        const successRes = await UserServices.registerUser(userid,name,  email, phone, address, state, postcode, city,country ,date, );
        let userData = { userid : userid, name : name,  email : email, phone : phone, address : address, state : state, postcode : postcode, city : city,country : country ,date : date, };
        console.log(userData);
       return  res.status(200).json(userData)

    } catch (error) {
        throw error
    }
}

exports.login = async (req, res, next) => {
    try {
        const { phone } = req.body;

        const User = await UserServices.loginUser(phone);

        if (!User) {
            return res.status(401).json({ message: 'User not found' })
        }
       

        let tokenData = {fname: User.fname,userid:User.userid,phone:User.phone,lname:User.lname,dob:User.dob,address:User.address,gender:User.gender,email:User.email,postcode:User.postcode,kms:User.kms,followers:User.followers,following:User.following,interest:User.interest,userimage: User.userimage,coverimage: User.coverimage}

        return res.status(200).json(tokenData);

    } catch (error) {
        throw error
    }
}

exports.Update = async (req,res, next) => {
    try {
        const {  userid,name,  email, phone, address, state, postcode, city,country ,date, status} = req.body;
        const updateData = await UserServices.updateUser( userid,name,  email, phone, address, state, postcode, city,country ,date, status);
        res.status(200).json(updateData)
    } catch (error) {
        next (error);
    }

}


exports.delete = async(req, res, next)=>{
    try{
        const{userid} = req.query;
        const User = await UserServices.deleteUser(userid);
        res.status(200).json(User)
    }catch(error){
        next(error)
    }
}

exports.get = async(req,res,next) => {
    try {
        const User = await UserServices.getUser();
        res.status(200).json({token : User})
    } catch (error) {
        next(error);
    }
}

exports.getUser = async(req,res,next) => {
    try {
        const {email} = req.query;
        const User = await UserServices.get(email);
        res.status(200).json(User)
    } catch (error) {
        next(error);
    }
}

exports.getUserId = async(req,res,next) => {
    try {
        const {userid} = req.query;
        const User = await UserServices.getUserId(userid);
        res.status(200).json(User)
    } catch (error) {
        next(error);
    }
}

