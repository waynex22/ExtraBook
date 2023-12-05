// import { useContext } from "react"
import Sidebar from "./SideBar"
// import {AuthContext} from '../../Contexts/authContext'
const AdminLayout = ( {children} ) => {
  // const {user} = useContext(AuthContext)
  // if(!user){
  //   return (
  //     <p>loadding...</p>
  //   )
  // }
  // const allowRole = user.data.role === 'admin'
  // console.log(allowRole, user);
    return (
        <div className="container mx-auto mt-40">
          <div className="grid grid-cols-8">
            <div className="col-span-2">
            <Sidebar />
            </div>
            <div className="col-span-6">
                {children}
            </div>
          </div>
        </div>
    )
  
}
export default AdminLayout