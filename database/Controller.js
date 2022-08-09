//Controller
import Users from '../model/user'

// Get Request: http://localhost:3000/api/users
export async function getUsers (req, res) {
    try{
        const users = await Users.find({})
        if(!users){
            return res.status(404).json({error: "Data not found"})
        }
        res.status(200).json(users)

    }catch(error){
        return res.status(404).json({error: "Error while fetching the data"})
    }

}

// Get individual user: http://localhost:3000/api/users/:id
export async function getUser (req,res){
    try{
        const {userId} = req.query;
        if(!userId){
            return res.status(404).json({error: "please provide a valid user id"})
        }else{
            const user = await Users.findById(userId)
            res.status(200).json(user)
        }

    }catch(error){
        return res.status(404).json({error: "Error while getting the user"})
    }

}


// Post Request: http://localhost:3000/api/users
export async function postUser (req, res) {
    try{
        const formData = req.body;
        if(!formData){
            return res.status(404).json({error: "Please provide valid form data"})

        }
        Users.create(formData, function(err, data){
            return res.status(200).json(data)
        })

    }catch(error){
        return res.status(404).json({error: "Error while postin the data"})
    }
}


// PUT Request: http://localhost:3000/api/users/:id
export async function updateUser (req, res){
    try{
        const {userId} = req.query;
        const formData = req.body;
        if(userId && formData){
            const user = await Users.findByIdAndUpdate(userId, formData)
            res.status(200).json(user)
        }else{
            return res.status(404).json({error: "please provide a valid user id"})
        }
        
    }catch(error){
        return res.status(404).json({error: "Error while updating the data"})
    }
}

// DELETE Request: http://localhost:3000/api/users/:id
export async function deleteUser (req, res){
    try{
        const {userId} = req.query;

        if(!userId){
            return res.status(404).json({error: "please provide a valid user id"})
        }else{
            const user = Users.findByIdAndDelete(userId)
            res.status(200).json(user)
        }

    }catch(error){
        return res.status(404).json({error: "Error while deleting the user"})
    }
}


