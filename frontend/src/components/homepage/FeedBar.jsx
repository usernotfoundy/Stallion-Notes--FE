import { Box } from "@mui/material";
import PostCard from './FeedCard';

const FeedBar = () => {
    return(
        <Box flex={4} p={2}>
            <PostCard/>
        </Box>
    )
}

export default FeedBar;