import { Box, Drawer, Button } from "@mui/material";
import {Dispatch, SetStateAction, useEffect} from "react";

type SidenavProps = {
    open: boolean;
    toggleDrawer: (open: boolean) => void;
    onClose: () => void;
    setOpen: Dispatch<SetStateAction<boolean>>;
};

const Sidenav = ({ open, toggleDrawer, onClose, setOpen }: SidenavProps) => {
    // Close sidenav if clicked outside
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            const target = event.target as HTMLElement; // Cast target to HTMLElement
            if (target && !target.closest('#sidenav')) {
                toggleDrawer(false); // Correctly call toggleDrawer without additional invocation
                setOpen(false);
            }
        };

        // Add event listener
        document.addEventListener('mousedown', handleClickOutside);

        // Clean up the event listener on unmount
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [toggleDrawer]);

    const DrawerList = (
        <Box
            id="sidenav"
            sx={{
                width: 200,
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'flex-start',
                paddingTop: 2,
            }}
            role="presentation"
            onClick={() => toggleDrawer(false)} // Corrected call
            onKeyDown={() => toggleDrawer(false)} // Corrected call
        >
            <Button variant="text">Menu</Button>
        </Box>
    );

    return (
        <Drawer
            anchor="right"
            open={open}
            onClose={onClose} // Ensure the onClose prop is properly passed
            PaperProps={{
                sx: {
                    width: 200,
                }
            }}
        >
            {DrawerList}
        </Drawer>
    );
};

export default Sidenav;
