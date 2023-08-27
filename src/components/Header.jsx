
import { AppBar, Toolbar, styled } from "@mui/material";
import { routhPath } from "../routes/route";
import { Link } from "react-router-dom";

const StyledAppBar = styled(AppBar)({
    background: '#2d2d2d',
    height: 64,
    '& > div > *': {
        marginRight: 20,
        fontSize: 14,
        color: 'inherit',
        textDecoration: 'none'
    }
})

const Header = () => {
    const logo = "https://d1yjjnpx0p53s8.cloudfront.net/styles/logo-thumbnail/s3/0011/1400/brand.gif?itok=eIgfRJhl";

    return (
        <StyledAppBar>
            <Toolbar>
                <Link to={routhPath.home}>
                    <img src={logo} alt="logo" style={{ width: 73, marginBottom: 6 }} />
                </Link>
                <Link to={routhPath.create}>Post jobs</Link>
                <Link to={routhPath.posts}>Find jobs</Link>
            </Toolbar>
        </StyledAppBar>
    )
}

export default Header;