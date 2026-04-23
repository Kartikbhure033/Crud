const Crud = require("../models/Crud");

async function Adduser(req, res){
        try {
            const {firstname, lastname, email, phone, Address, Date, gender, Hobby, country, States, city} = req.body;
                const user=await Crud.create({
                    firstname,
                    lastname,
                    email,
                    phone,
                    Address,
                    Date,
                    gender,
                    Hobby,
                    country,
                    States,
                    city
                });
                res.status(201).json({
                    success:true,
                    message:"User added successfully",
                    user
                });
        } catch (error) {
            res.status(500).json({
                success:false,
                message:"Error adding user",
                error
            });
        }


    }

    async function getAllUsers(req, res){
        try {
            const users=await Crud.find();
            res.status(200).json({
                success:true,
                message:"Users retrieved successfully",
                users
            });
        } catch (error) {
            res.status(500).json({
                success:false,
                message:"Error retrieving users",
                error
            });
        }
    }


    async function getUserById(req, res){
        try {
            const {id}=req.params;
            const user=await Crud.findById(id);
            if(!user){
                return res.status(404).json({
                    success:false,  
                    message:"User not found"
                });
            }
            res.status(200).json({
                success:true,
                message:"User retrieved successfully",
                user
            });
        } catch (error) {
            res.status(500).json({
                success:false,
                message:"Error retrieving user",
                error
            });
        }
    }


    async function updateuser(req,res){
        try {
            const {id}=req.params;
            const {firstname, lastname, email, phone, Address, Date, gender, Hobby, country, States, city} = req.body;
            const user=await Crud.findByIdAndUpdate(id, {
                firstname,
                lastname,
                email,
                phone,
                Address,
                Date,
                gender,
                Hobby,
                country,
                States,
                city
            }, {new:true});
            if(!user){
                return res.status(404).json({
                    success:false,
                    message:"User not found"
                });
            }
            res.status(200).json({
                success:true,
                message:"User updated successfully",
                user
            });
        } catch (error) {
            res.status(500).json({
                success:false,
                message:"Error updating user",
                error
            });
        }
    }


    async function deleteuser(req,res){
        try {
            const user=await Crud.findByIdAndDelete(req.params.id);
        if(!user){
            return res.status(404).json({
                success:false,
                message:"User not found"
            })
        }

        return res.status(200).json({
            success:true,
            message:"User deleted succesfully",
        })
        } catch (error) {
            res.status(500).json({
                success:false,
                message:"Error deleting user",
                error
            })
        }
    }

module.exports = {Adduser, getAllUsers, getUserById, updateuser,deleteuser};