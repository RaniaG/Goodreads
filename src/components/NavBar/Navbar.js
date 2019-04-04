import React from 'react'
import UserNavbar from './user';
import AdminNavbar from './admin';
import { withRouter } from 'react-router';


const Navbar = (props) => {
    const { pathname } = props.location;
    return (
        <div>

            {pathname.startsWith('/admin', 0) ?
                <AdminNavbar /> :
                <UserNavbar />
            }
        </div>
    )

}
export default withRouter(Navbar);