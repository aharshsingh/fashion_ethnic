const { adminRegisterSchema } = require('../../services/validators');
const User = require('../../models/user');
const CustomErrorHandler = require('../../services/customErrorHandler');
const bcrypt = require('bcrypt');

const adminAuth = {
    async adminRegister(req,res,next){
        const {error} = adminRegisterSchema.validate(req.body);
        if(error){
            return next(error);
        }

        try {
            const exists = await User.exists({ email: req.body.email});
            if(exists){
                return next(CustomErrorHandler.alreadyExists('User already exists!'));
            }
            const { email, password, role } = req.body;
                const hashedPassword = await bcrypt.hash(password, 10);
                const admin = new User({
                    email,
                    password: hashedPassword,
                    role
                });
                try {
                    const result = await admin.save();
                    res.json(result);
                } catch (error) {
                    return next(error);
                }
        }catch (error) {
            return next(error);
        }
    }
}

module.exports = adminAuth;