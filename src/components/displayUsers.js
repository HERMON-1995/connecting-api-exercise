import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { fetchUsers } from "../redux/users/usersSlice";

const UsersList = () => {
  const {users, isLoading, error} = useSelector((state)=> state.users);
  const dispatch = useDispatch();

  useEffect(()=> {
    dispatch(fetchUsers());
  }, [dispatch])

  if (isLoading) {
    return <p>Loading...</p>;
  }
  if (error) {
    return <p>{error}</p>;
  }

  return (
   <ul className="ul">
     {users.map((user)=> (
         <li key={user.id}>
            {user.name.first} {user.name.last}
         </li>
      ))}
   </ul>
  )
}

export default UsersList;