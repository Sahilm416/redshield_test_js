import { getSession } from "redshield/actions/auth";

const UserComponent = async ()=> {
  const session = await getSession();

  return(
    <div className="main">
        {session.status ? <p>User is Logged as {session.data.email}</p> : <p>User logged out</p>}
    </div>
  )
};
export default UserComponent;