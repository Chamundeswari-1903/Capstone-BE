const UserModel = require("../model/user_model");

class UserServices {
    static async registerUser(userid,name,  email, phone, address, state, postcode, city,country ,date,) {
        try {
           
            const createUser = new UserModel({ userid,name,  email, phone, address, state, postcode, city,country ,date, });
            return await createUser.save();
        } catch (err) {
            throw err;
        }
    }

   
   

    static async updateUser(userid,name,  email, phone, address, state, postcode, city,country ,date, status) {
        try {
            var query = { userid: userid };
            var values = { $set: { name : name,  email : email, phone : phone, address : address, state : state, postcode : postcode, city : city,country : country ,date : date, status : status} };

            return await UserModel.updateOne(query, values)

        } catch (error) {
            throw error
        }
    }

   
    
    static async deleteUser(userid) {
        try {
            var query = { userid: userid };
            return await UserModel.findOneAndDelete(query);

        } catch (error) {
            throw error;
        }
    }

    static async getUser() {
        try {

            return await UserModel.find()
        } catch (error) {
            throw error
        }
    }

    static async get(email) {
        try {

            return await UserModel.findOne({ email })
        } catch (error) {
            throw error
        }
    }

    static async getUserId(userid) {
        try {
            return await UserModel.findOne({ userid })
        } catch (error) {
            throw error
        }
    }
}
module.exports = UserServices;