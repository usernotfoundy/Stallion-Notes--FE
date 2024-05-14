// /*eslint-disable no-unused-vars*/
// import React from "react";
// import { Box, Divider, List, ListItem, ListItemText, Typography, ListItemAvatar, Avatar } from "@mui/material";
// import ImageIcon from '@mui/icons-material/Image';

// const Donators = ['John Clavel', 'Emmanuel Adonay II', 'Jayson Hernaez', 'Jerry Casimiro'];

// const Role = ['Alumni', 'Faculty', 'Student', 'Alumni'];

// const LeftBar = () => {
//     return (
//         <Box flex={2} pl='15px' pt='40px'>
//             <Box>
//                 <Typography sx={{ fontSize: 20, fontWeight: 'bold', color: '#50623A' }}>
//                     Announcement Here
//                 </Typography>
//             </Box>
//         </Box>
//     );
// }

// export default LeftBar;
import React from "react";
import { Box, Divider, List, ListItem, ListItemText, Typography, ListItemAvatar, Avatar } from "@mui/material";
import ImageIcon from '@mui/icons-material/Image';

const Donators = ['John Clavel', 'Emmanuel Adonay II', 'Jayson Hernaez', 'Jerry Casimiro'];
const color = '#10349F'

const Role = ['Alumni', 'Faculty', 'Student', 'Alumni'];

const LeftBar = () => {
    return (
        <Box flex={2} pl='15px' pt='40px'>
            <Box position='fixed'>
                <Typography sx={{ fontSize: 20, fontWeight: 'bold', color: `${color}` }}>
                    Announcement Here
                </Typography>
            </Box>
        </Box>
    );
}

export default LeftBar;
