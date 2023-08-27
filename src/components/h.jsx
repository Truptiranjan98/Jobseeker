import React from 'react'
import{ AppBar, Toolbar, styled} from '@mui/material';
import { Link } from 'react-router-dom';
import { routhPath } from '../routes/routs';
const StyledAppBar=styled(AppBar)({
    background:'#c27f7f',
    height:50,
    '& > div > *' :{
      textDecoration :'none',
      color : 'inherit',
      marginRight : 20,
      fontSize :18
    }
})

const Header = () => {
    const logo='https://d1yjjnpx0p53s8.cloudfront.net/styles/logo-thumbnail/s3/0011/1400/brand.gif?itok=eIgfRJhl'
  return (
      <StyledAppBar>
        <Toolbar>
          <Link to={routhPath.home}>
              <img src={logo} alt="logo" style={{width:55, marginBottom:7, marginTop:6}} />
            </Link>
            <Link to={routhPath.create}>
              post jobs
            </Link>
            <Link to={routhPath.posts}>
              find jobs
            </Link>
        </Toolbar>
      </StyledAppBar>
    
  )
}

// export default Header
