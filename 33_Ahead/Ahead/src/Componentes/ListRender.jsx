import {useState} from 'react'

const ListRender = () => {

    // const [list] = useState(["Albert", "Dráculaus", "Jervas"])
  
    const [users, setUsers] = useState([
        {id: 2, name: "Albert", age: 22},
        {id: 3, name: "Sango", age: 42},
        {id: 4, name: "Sekani", age: 52},
    ])

    const deleteRandom = () => {
                
        const randomNumber = Math.floor(Math.random() * 4)

        setUsers((prevUsers) => 
            prevUsers.filter((user) => randomNumber !== user.id)
    )
    }


    return (
    <div>
    

        {/* Render com key */}
        <ul>
            {users.map((user) => (
                <li key={user.id}>{user.name} - {user.age} anos</li>
            ))}
        
        </ul>

        <button onClick={deleteRandom}>Delete random user</button>
        
         
    </div>
  )
}

export default ListRender