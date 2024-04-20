import { Box, Divider, List, ListItem, ListItemText, Typography, ListItemAvatar, Avatar } from "@mui/material";
import ImageIcon from '@mui/icons-material/Image';

const Donators = ['John Clavel', 'Emmanuel Adonay II', 'Jayson Hernaez', 'Jerry Casimiro'];

const Role = ['Alumni', 'Faculty', 'Student', 'Alumni'];

const LeftBar = () => {
    return (
        <Box flex={2} pl='15px' pt='40px'>
            <Box>
                <Typography sx={{ fontSize: 20, fontWeight: 'bold', color: '#50623A' }}>
                    Recent Donators
                </Typography>
                <List sx={{ width: '100%', maxWidth: 360, }}>
                    {Donators.map((donator, index) => (
                        <ListItem key={index} sx={{ boxShadow: "0px 0px 5px 0px #ababab", borderRadius: 1, marginBottom: '10px', backgroundColor: 'background.paper' }}>
                            <ListItemText primary={donator} />
                            <ListItemText primary={Role[index]} sx={{ color: '#ababab', textAlign: 'right' }} />
                        </ListItem>
                    ))}
                </List>
            </Box>
            <Divider flexItem sx={{ margin: '50px 0px' }} />
            <Typography sx={{ fontSize: 18, fontWeight: 'bold', color: '#50623A' }}>
                Recent Viewed Products
            </Typography>
            <List sx={{ width: '100%', maxWidth: 360, }}>
                <ListItem sx={{ boxShadow: "0px 0px 5px 0px #ababab", borderRadius: 1, marginBottom: '10px', bgcolor:'background.paper'}}>
                    <ListItemAvatar>
                        <Avatar>
                            <ImageIcon />
                        </Avatar>
                    </ListItemAvatar>
                    <ListItemText primary="Untitled Book" />
                </ListItem>
            </List>
        </Box>
    );
}

export default LeftBar;
