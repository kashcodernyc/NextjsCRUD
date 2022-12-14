const BASE_URL = "http://localhost:3000"

// getting all the users
export const getUsers = async() => {
    const response = await fetch(`${BASE_URL}/api/users`)
    const json = await response.json()
    return json;
}

// getting individual user
export const getUser = async(userId) => {
    const response = await fetch(`${BASE_URL}/api/users/${userId}`)
    const json = await response.json()
    if(json){
        return json;
    }else{
        return {}
    }
}

// posting the user
export const postUser = async(formData) => {
    try{
        const Options = {
            method: 'POST',
            headers: { 'Content-Type': "application/json"},
            body: JSON.stringify(formData)
        }

        const response = await fetch(`${BASE_URL}/api/users`, Options)
        const json = await response.json()

        return json;

    }catch(err){
        return err
    }
}


// update the user
export const updateUser = async(userId, formData) => {
    try{

        const Options = {
            method: 'PUT',
            headers: { 'Content-Type': "application/json"},
            body: JSON.stringify(formData)
        }

        const response = await fetch(`${BASE_URL}/api/users/${userId}`, Options)
        const json = await response.json()
        return json;

    }catch(err){
        return err
    }

}

//Delete thr user
export const deleteUser = async(userId) => {
    const Options = {
            method: 'DELETE',
            headers: { 'Content-Type': "application/json"},
    }

    const response = await fetch(`${BASE_URL}/api/users/${userId}`, Options)
    const json = await response.json()
    return json;

}

