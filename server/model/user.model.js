import mongoose from "mongoose";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { type } from "os";

const userSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true
        },
        email: {
            type: String,
            required: true,
            unique: true,
           
        },
        password: {
            type: String,
            required: true,
            minlength: 6,
        },
        phoneNumber: {
            type: String,
        },
        role: {
            type: String,
            enum: ["USER", "ADMIN"],
            default: "USER",
            required: true,
        },

        refreshToken: {
            type: String, // The refresh token itself
            default: null,
        },

        interests: {
            type: [String],
        },

        incomeGroup: {
            type: String,
            enum: ['EWS', 'General', 'OBC', 'SC', 'ST'],

        },

        state: {
            type: String,
        },

        age: {
            type: Number,
        },

        favorites: {
            type: [mongoose.Schema.Types.ObjectId],
            ref: 'Scheme',
        },

        gender: {
            type: String,
            enum: ['male', 'female', 'other'],
        },

    },

    { timestamps: true }
);

//hash password before saving user
// this.isModified('fieldName') checks whether a specific field (like "password") was changed before the save happens.


userSchema.pre("save", async function(next){
     try{
        if(this.isModified("password")){
            this.password=await bcrypt.hash(this.password,10);
        }
        next();
     }catch(error){
       next(error);
     }

});

// // “If the password is hashed, how can we compare it to a plain one?” 
// Because bcrypt.compare() rehashes the input using the same salt stored in the original hash, it can verify the password without needing to decrypt it.


userSchema.methods.isPasswordCorrect=async function(candidatePassword){
    try{
        return await bcrypt.compare(candidatePassword,this.password);

    }catch(error){
        throw error;
    }
};

//Generate access token
//userSchema.methods(what does it do ?  ) 
// It lets you add functions that each document (user) can use.

userSchema.methods.generateAccessToken =async function(){
    return jwt.sign(
        {
            _id:this._id,
            email:this.email,
            name:this.name,
        },
        process.env.ACCESS_TOKEN_SECRET,
        {
            expiresIn:process.env.ACCESS_TOKEN_EXPIRY,
        }
    );
};


//Generate Referesh Access token 

//const token = jwt.sign(payload, secretOrPrivateKey, options);


userSchema.methods.generateRefreshToken = async function () {
    return jwt.sign(
        {
            _id: this._id,
        },
        process.env.REFRESH_TOKEN_SECRET,
        {
            expiresIn: process.env.REFRESH_TOKEN_EXPIRY,
        }
    );
};

const User = mongoose.model("User", userSchema);

export default User;