import { Box, Grid } from "@mui/material";
import ExploreBoxItem from './explore-boxitem';

const ExploreBar = ({ searched }) => {
    return (
        <Box flex={4} p={1}>
            <Grid container>
                {/* {[...Array(8)].map((_, index) => ( */}
                <Grid >
                    <ExploreBoxItem searched={searched} />
                </Grid>
                {/* // ))} */}
            </Grid>
        </Box>
    )
}

export default ExploreBar;