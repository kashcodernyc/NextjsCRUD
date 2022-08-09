    const [formData, setFormData] = useReducer({
        firstname : '',
        lastname: '',
        email: '',
        salary: '',
        date: '',
        status: ''
    })

    const handleChange = (event) => {
    setFormData({
         ...formData,
        [event.target.name]:event.target.value
    })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        if(!formData.firstname||!formData.lastname||!formData.email){
            alert('please enter your firstname, lastname, and email')
        }else{
            setFormData({
                ...formData,
                firstname: formData.name,
                lastname: formData.lastname,
                email: formData.email,
                salary: parseInt(formData.salary),
                date: formData.date,
                status: formData.status
            })
        }
        console.log(formData)
    }
    

    if(Object.values(formData).some(item => item !== '')){
        return <Success message={"Data Added"}/>
    }

    