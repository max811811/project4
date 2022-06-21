// import { Link } from 'react-router-dom'
import * as userService from '../../utilities/users-service'
import { AppBar, makeStyles, Typography } from '@mui/material'
import { Toolbar, Link } from '@mui/material'
import { ClassNames } from '@emotion/react'




export default function NavBar({user, setUser}) {

    function handleLogOut() {
        userService.logOut()
        setUser(null)
    }

    return (
        
        <AppBar position='sticky' color='transparent'>
            <Toolbar  height='75px'  >
                
                <Typography color='primary' >
                    Hello, {user.name}
                </Typography>
                &nbsp; | &nbsp;
                <Link underline='none' color='primary' href="/">Upload Document</Link>
                &nbsp; | &nbsp;
                <Link underline='none' color='primary' href="/about">About</Link>
                &nbsp; | &nbsp;
                <Link underline='none' color='primary' href="/orders/new">TBC</Link>
                &nbsp; | &nbsp;
                <Link underline='none' color='primary' href="" onClick={handleLogOut}>Log Out</Link>
                
            </Toolbar>
        </AppBar>
        
    )
}