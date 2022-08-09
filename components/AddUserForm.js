import React, {useState, useReducer} from 'react'
import {BiPlus} from 'react-icons/bi'
import Success from './Success'
import Error from './Error'

const formReducer = (state, event) => {
    return{
         ...state,
        [event.target.name]:event.target.value
    }
}

const AddUserForm = () => {
    const [formData, setFormData] = useReducer(formReducer, {})

    

    const handleSubmit = (e) => {
        e.preventDefault()
    
        if(Object.keys(formData).length === 0){
            return console.log('please enter valid input data')
        }

        console.log(formData)
    }
    

    if(Object.values(formData).some(item => item !== '')){
        return <Success message={"Data Added"}/>
    }

    

  return (
    <form className="grid lg:grid-cols-2 w-4/6 gap-4" onSubmit={handleSubmit}>
        <div className="input-type">
            <input type="text" name = "firstname" onChange = {setFormData} placeholder = "firstname" className = "border w-full px-5 py-3 focus:outline-none"/>
        </div>
        <div className="input-type">
             <input type="text" name = "lastname" onChange = {setFormData} placeholder = "lastname" className = "border w-full px-5 py-3 focus:outline-none"/>
        </div>
        <div className="input-type">
             <input type="email" name = "email" onChange = {setFormData} placeholder = "email" className = "border w-full px-5 py-3 focus:outline-none"/>
        </div>
        <div className="input-type">
             <input type="number" name = "salary" onChange = {setFormData} placeholder = "salary" className = "border w-full px-5 py-3 focus:outline-none"/>
        </div>
        <div className="input-type">
             <input type="date" name = "date" onChange = {setFormData} className = "border px-5 py-3 focus:outline-none rounded-md"/>
        </div>
        
        <div className="flex gap-10 items-center">

            <div className="form-check">
             <input type="radio" onChange = {setFormData} value = "active" id = "radioDefault1" name = "status" className = "form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked: bg-green-500 checked:border-green-500 focus:outline-none transition duration-200 mt-` align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"/>
             <label htmlFor="radioDefault1" className="inline-block text-gray-800">
                Active
             </label>
        </div>
        <div className="form-check">
             <input type="radio" onChange = {setFormData} value = "inactive" id = "radioDefault2" name = "status" className = "form-check-input appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked: bg-green-500 checked:border-green-500 focus:outline-none transition duration-200 mt-` align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"/>
             <label htmlFor="radioDefault2" className="inline-block text-gray-800">
                Inactive
             </label>
        </div>

        </div>
        


        <button className="flex justify-center text-md w-2/6 bg-green-500 text-white pz-4 py-2 border rounded-md hover:bg-gray-50 hover:border-green-500 hover:text-green-500">Add <span className="px-1"><BiPlus size = {24}/></span></button>

    </form>
  )
}

export default AddUserForm