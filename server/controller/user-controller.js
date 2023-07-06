import User from '../schema/user-schema.js';

export const addUser=async (request, response) =>{
    const user = request.body;

    const newUser= User(user);

    try {
        await newUser.save();
        response.status(201).json(newUser);
    } catch (error) {
        response.status(409).json({message: error.message});
    }
}

export const getUsers =async (request,response)=>{
    try {
        const users=await User.find({ });
        response.status(200).json(users);
    } catch (error) {
        response.status(401).json({message: error.message});
    }
}
export const getUser =async (request,response)=>{
    try {
        // console.log(request.params.id);
        const user=await User.find({_id:request.params.id});
        response.status(200).json(user);
    } catch (error) {
        response.status(401).json({message: error.message});
    }
}

export const editUser =async (request,response)=>{
    let user= request.body;
    const editUser= new User(user);
    try {
        await User.updateOne({_id:request.params.id}, editUser);
        response.status(200).json(user);
    } catch (error) {
        response.status(409).json({message: error.message});
    }
    

}

export const deleteUser =async (request,response)=>{

    try {
        await User.deleteOne({_id:request.params.id});
        response.status(200).json({message: "delete"});
    } catch (error) {
        response.status(409).json({message: error.message});
    }

}