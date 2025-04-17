import { Box, Button, IconButton, styled } from "@mui/material";
import ClawsLogo from '../assets/CLAWS.png';
import { useState } from "react";
import Sidenav from "./Sidenav.tsx";
import MenuIcon from '@mui/icons-material/Menu';

const Navbar = () => {
    const [open, setOpen] = useState(false);

    const toggleDrawer = (newOpen: boolean) => () => {
        setOpen(newOpen);
    };

    return (
        <Wrapper>
            <Side>
                <Logo src={ClawsLogo} alt="CLAWS" />
            </Side>
            <Center open={open}>
                <TextButton variant="text" disableRipple>Home</TextButton>
                <TextButton variant="text" disableRipple>Team</TextButton>
                <TextButton variant="text" disableRipple>Schedule</TextButton>
                <TextButton variant="text" disableRipple>Partners</TextButton>
            </Center>

            <SideRight>
                <IconBtn disableRipple={true} disableFocusRipple={true} onClick={toggleDrawer(true)}>
                    <MenuIcon></MenuIcon>
                </IconBtn>
                <Sidenav toggleDrawer={toggleDrawer} open={open} onClose={toggleDrawer(false)} setOpen={setOpen}/>
            </SideRight>
        </Wrapper>
    );
};

const Wrapper = styled(Box)`
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 90px;
    padding: 0 50px;
    background: white;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const Side = styled(Box)`
    flex: 1;
    display: flex;
    align-items: center;
    position: absolute;
    max-width: 120px;
`;

const SideRight = styled(Box)`
    flex: 1;
    display: flex;
    justify-content: flex-end;

    @media (min-width: 769px) {
        display: none;
    }
`;

const Center = styled(Box)<{ open: boolean }>`
    flex: 1;
    display: flex;
    justify-content: ${({ open }) => (open ? "space-between" : "center")};
    gap: 50px;

    @media (max-width: 768px) {
        display: none;
    }
`;

const Logo = styled('img')`
    width: 120px;
    height: 40px;
`;

const TextButton = styled(Button)`
    color: #1E1E20;
    width: auto;
    height: auto;
    font-size: 14px;
    font-family: 'Hurme', sans-serif;
    text-transform: none;
`;

const IconBtn = styled(IconButton)`
    width: auto;
    height: auto;
`

export default Navbar;
