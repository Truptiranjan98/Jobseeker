import React from 'react'
import Header from '../components/Header'
import { Box, Typography, Button, styled } from '@mui/material'
import { useNavigate } from 'react-router-dom'
import { routhPath } from '../routes/route'

const Component=styled(Box)({
    marginTop:70,
    display:'flex',
    height:'100vh',
    alignItems:'center',
    margin:'0 110px',
    '& > div':{
      width:'50%',
      display:'flex',
      justifyContent:'center',
      flexDirection :'column',
      '& > p':{
        fontSize :56,
        lineHeight:1.25,
        letterSpacing:-1
      },
      '& > button':{
         width:220 ,
         height:50,
         background: 'rgb(37, 87,167)',
         textTransform:'none',
         fontSize:16,
         fontWeight:700,
         marginTop:48,
      }
    }
})

const Home = () => {
  const navigate=useNavigate();
    const animatedImage='https://logowik.com/content/uploads/images/jobseeker6563.logowik.com.webp'
  return (
    <div>
    <Header />
    <Component>
        <Box>
           <Typography>If oppertunity doesn't knock, build a door...</Typography>
           <Button variant='contained' onClick={()=>navigate(routhPath.create)}>post jobs</Button>
        </Box>
        <Box>
           <img src={animatedImage} alt="img"  style={{width:400}}/>
        </Box>
    </Component>
   </div>
  )
}

export default Home
