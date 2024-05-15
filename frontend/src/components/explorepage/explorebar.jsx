import { Box, Grid, Typography } from "@mui/material";
import ExploreBoxItem from './explore-boxitem';
import { useEffect, useState } from "react";
import PropTypes from 'prop-types'
import NoResult from '../imgs/noResult.svg'


const ExploreBar = ({ searched }) => {
    const [len, setLen] = useState([])

    useEffect(() => {
        setLen(searched);
    })
    return (
        <Box flex={4} p={1} 
        sx={{mt:'5%', minHeight:'80vh'}}
        >
            <Grid container>
                {/* {[...Array(8)].map((_, index) => ( */}
                <Grid >
                    {len.length > 0 ? (
                        <>
                            <ExploreBoxItem searched={searched} />
                        </>
                    ) : len.length === 0 ? (
                        <Box sx={{
                            width: 'auto',
                            height: '89vh',
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'center',
                            alignItems: 'center',
                            position: 'absolute',
                            top: '50%',
                            left: '50%',
                            transform: 'translate(-50%, -50%)',
                        }}>
                            <Typography sx={{
                                position: 'absolute',
                                top: '52%',
                                left: '50%',
                                transform: 'translate(-50%, -50%)',
                            }}>No results found</Typography>
                            <Box style={{
                                backgroundImage: `url('${NoResult}')`,
                                backgroundSize: 'cover',
                                // backgroundPosition: 'center',
                                // display: 'flex',
                                // justifyContent: 'center',
                                // alignItems: 'center',
                                width: '400px',
                                height: '100px',
                                paddingTop: '100px',
                                // margin: 'auto'

                            }}>
                            </Box>

                        </Box>
                    ) : (
                        <p>loading</p>
                    )}
                </Grid>
                {/* // ))} */}
            </Grid>
        </Box>
    )
}

export default ExploreBar;


ExploreBar.propTypes = {
    searched: PropTypes.array
};

ExploreBar.defaultProps = {
    searched: []  // Default prop if none is provided
};

