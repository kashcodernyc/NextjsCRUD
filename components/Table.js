import React from 'react'
import {BiEdit, BiTrashAlt} from 'react-icons/bi'
import {getUsers} from '../lib/helper'
import { useQuery } from "@tanstack/react-query";
import {useSelector, useDispatch} from 'react-redux';


const Table = () => {
    const state = useSelector((state) => state)
    const dispatch = useDispatch();
    console.log(state)
    const {isLoading, isError, error, data} = useQuery(['users'],   getUsers)
    if(isLoading) {
        return <div>Footballer is loading...</div>
    }
    if(isError) {
        return <div>The was an error fetching footballer: {error}</div>
    }
  return (
    <table className="min-w-full table-auto">
        <thead>
            <tr className="bg-gray-800">
                <th className="px-16 py-2">
                    <span className="text-gray-200">Name</span>
                </th>
                <th className="px-16 py-2">
                    <span className="text-gray-200">Email</span>
                </th>
                <th className="px-16 py-2">
                    <span className="text-gray-200">Salary</span>
                </th>
                <th className="px-16 py-2">
                    <span className="text-gray-200">Birthday</span>
                </th>
                <th className="px-16 py-2">
                    <span className="text-gray-200">Status</span>
                </th>
                <th className="px-16 py-2">
                    <span className="text-gray-200">Actions</span>
                </th>
            </tr>

        </thead>
        <tbody className="bg-gray-200">
            {data.map(player => <Tr {...player} key = {player.id}/>)}
        </tbody>
    </table>
  )
}

const Tr = ({id, name, avatar, email, salary, date, status}) => {
    return(
        <tr className="bg-gray-50 text-center">
                <td className="px-16 py-2 flex items-center">
                    <img src = {avatar || '#'} alt = "" className="h-10 w-10 rounded-full object-cover"/>
                    <span className="text-center ml-2 font-semibold">{name || "unknown"}</span>
                </td>
                <td className = "px-16 py-2">
                    <span> {email || "unknown"}</span>
                </td>
                <td className = "px-16 py-2">
                    <span>${salary ||"unknown"}</span>
                </td>
                <td className = "px-16 py-2">
                    <span>{date || "unknown"}</span>
                </td>
                <td className = "px-16 py-2">
                    <button className = "cursor">
                        <span className = {`${status === "active" ? "bg-green-500" :  "bg-rose-500"} text-white px-5 py-1 rounded-full`}>{status || "unknown"}</span>
                    </button>
                </td>
                 <td className = "px-16 py-2 flex justify-around gap-5">
                    <button className = "cursor">
                        <BiEdit size = {25} color= {"rgb(34,197,94)"}/>
                    </button>
                    <button className = "cursor">
                        <BiTrashAlt size = {25} color= {"rgb(244, 63, 94)"}/>
                    </button>
                </td>
            </tr>
    )
}

export default Table