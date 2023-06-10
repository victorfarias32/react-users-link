import { API } from "../services/Api";
import { async } from "q";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom"




export default function ListUsers() {

    const [users, setUsers] = useState([])
    

    useEffect(() => {
        getUsers()

    }, [])

    async function getUsers() {

        API.get('users')
            .then((res) => {
                console.log(res.data)
                setUsers(res.data)
            })
    }


    return (
        <div className="bg-white py-24 sm:py-32">
                <ul role="list" className="grid gap-x-8 gap-y-12 sm:grid-cols-2 sm:gap-y-16 xl:col-span-2">
                    {users.map((user) => (
                        <li key={user.name}>
                            <div className="flex items-center gap-x-6">
                                <Link to={`/users/${users.id}`}>
                                <img className="h-16 w-16 rounded-full" src={user.gravatarUrl} alt="" />
                                </Link>
                                <div>
                                    <h3 className="text-base font-semibold leading-7 tracking-tight text-gray-900">{user.name}</h3>
                                </div>
                            </div>
                        </li>
                    ))}
                </ul>
        </div>
    );
}
