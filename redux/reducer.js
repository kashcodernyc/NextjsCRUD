import {createSlice} from '@reduxjs/toolkit'


const initialState = {
    client: {
        toggleForm: false
    }
    
}
export const reducerSlice = createSlice({
    name: 'crudapp',
    initialState,
    reducers: {
        toggleChange: (state) => {
            state.client.toggleChange = !state.client.toggleChange
        }
    }

})


export const {toggleChange} = reducerSlice.actions
export default reducerSlice.reducer
