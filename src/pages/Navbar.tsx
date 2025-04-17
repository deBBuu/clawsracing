import {Box, Button, styled} from "@mui/material";
import ClawsLogo from '../assets/CLAWS.png'; // ✅ import the SVG as a file

const Navbar = () => {
    return (
        <Wrapper>
            <Logo src={ClawsLogo} alt="CLAWS"></Logo>
            <Mid>
                <TextButton variant={'text'} disableRipple>Home</TextButton>
                <TextButton variant={'text'} disableRipple>Team</TextButton>
                <TextButton variant={'text'} disableRipple>Schedule</TextButton>
                <TextButton variant={'text'} disableRipple>Partners</TextButton>
            </Mid>
        </Wrapper>
    )
}

const Mid = styled(Box)`
    display: flex;
    width: 80%;
    height: 100%;
    justify-content: center;
    gap: 30px;
    align-items: center;
`
const Wrapper = styled(Box)`
    width: 100%;
    display: flex;
    align-items: center;
    height:90px;
    flex-direction: row;
    padding: 0 48px;
    background: white;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`

const Logo = styled('img')`
    width: 120px;
    height: 40px;
`

const TextButton = styled(Button)`
    color: #1E1E20;
    width: auto;
    height: auto;
    font-size: 14px;
    font-family: 'Hurme', sans-serif;
`
export default Navbar;