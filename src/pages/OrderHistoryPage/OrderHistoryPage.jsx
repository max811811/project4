import { checkToken } from '../../utilities/users-service'
import { Typography } from '@mui/material'
import { Button } from '@mui/material'
import { Container } from '@mui/material'
import { Grid } from '@mui/material'
import { Paper } from '@mui/material'

export default function OrderHistoryPage() {

    async function handleCheckToken() {
        const expDate = await checkToken()
        console.log(expDate)
    }




    return (
        <>
            
            <Typography variant='h4' padding='40px' color='primary'>About</Typography>
                {/* <button onClick={handleCheckToken}>Check when my Login Expires</button> */}
                
                <Typography variant='body1' padding='40px' color='primary'>This app allows you to upload and view documents with Azure Storage Cloud</Typography>
 
        
        </>
    )
}