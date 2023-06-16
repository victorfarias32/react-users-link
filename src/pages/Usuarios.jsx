import { API } from "../services/Api";
import { useEffect, useState } from "react";
import Card from "../components/Card"

export default function ListUsers() {

    const [users, setUsers] = useState([]);
    
    useEffect(() => {
        getUsers();

    },[]);

    async function getUsers() {

        API.get('users')
            .then((res) => {
                console.log(res.data)
                setUsers(res.data)
            })
    }


    return (
        <section className="flex flex-wrap justify-center gap-3 py-3">
            {users.map((user) => (
                <Card key={user.id} user={user}></Card>
            ))}
        </section>
        
    );
}

