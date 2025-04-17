import { Box, Drawer, Button } from "@mui/material";

type SidenavProps = {
    open: boolean;
    toggleDrawer: (open: boolean) => void;
    onClose: () => void;
};

const Sidenav = ({ open, toggleDrawer }: SidenavProps) => {
    const DrawerList = (
        <Box
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
            onClick={() => toggleDrawer(false)}
            onKeyDown={() => toggleDrawer(false)}
        >
            <Button variant="text">Menu</Button>
        </Box>
    );

    return (
        <Drawer
            anchor="right"
            open={open}
            onClose={() => toggleDrawer(false)}
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
