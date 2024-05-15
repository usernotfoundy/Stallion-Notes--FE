/* eslint-disable no-unused-vars */
import { useState, useCallback, useEffect } from 'react';
import Typography from '@mui/material/Typography';
import { Divider, Box, Button, Container, Avatar, Grid, TextField } from '@mui/material';
import axios from 'axios';
import { styled, useTheme } from '@mui/material/styles';
import { useNavigate } from 'react-router-dom';
import useMediaQuery from '@mui/material/useMediaQuery';

const VIEW_PROFILE_API_URL = 'https://stallionnotes.pythonanywhere.com/view-profile/';
const UPDATE_PROFILE_API_URL = 'https://stallionnotes.pythonanywhere.com/update-user/';
const color = '#10439F';

const StyledAvatar = styled(Avatar)(({ theme }) => ({
    width: 150,
    height: 150,
    marginRight: theme.spacing(1),
    border: `3px solid ${color}`,
    [theme.breakpoints.down('md')]: {
        width: 100,
        height: 100,
        border: `2px solid ${color}`,
        marginRight: 0, // Center avatar on medium screens
        marginBottom: theme.spacing(2), // Add spacing below the avatar
    },
    [theme.breakpoints.down('sm')]: {
        width: 75,
        height: 75,
        border: `1px solid ${color}`,
    },
}));

export default function AccountFor() {
    const [isEditButton, setIsEditButton] = useState(false);
    const [profile, setProfile] = useState(null);
    const [editedProfile, setEditedProfile] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);
    const [image, setImage] = useState(null);

    const token = localStorage.getItem('authToken');
    const navigate = useNavigate();

    const theme = useTheme();
    const isMdDown = useMediaQuery(theme.breakpoints.down('md'));

    const viewProfiles = useCallback(async () => {
        try {
            const res = await axios.get(VIEW_PROFILE_API_URL, {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`,
                },
            });
            setProfile(res.data);
            setEditedProfile({ ...res.data });
        } catch (error) {
            console.error('Error fetching profile:', error);
            setError(error);
        }
    }, [token]);

    useEffect(() => {
        viewProfiles();
    }, [viewProfiles]);

    const handleEditClick = () => {
        setIsEditButton(true);
    };

    const handleSaveClick = async () => {
        setIsEditButton(false);
        const formData = new FormData();
        formData.append('username', editedProfile.username);
        formData.append('first_name', editedProfile.first_name);
        formData.append('last_name', editedProfile.last_name);
        formData.append('middle_name', editedProfile.middle_name);
        formData.append('phone_number', editedProfile.phone_number);
        formData.append('email', editedProfile.email);

        try {
            const res = await axios.patch(UPDATE_PROFILE_API_URL, formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                    'Authorization': `Bearer ${token}`,
                },
            });
            console.log('Profile updated:', res.data);
            setProfile(res.data);
        } catch (error) {
            console.error('Error updating profile:', error);
            setError(error);
        }
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setEditedProfile((prevProfile) => ({
            ...prevProfile,
            [name]: value,
        }));
    };

    const textFieldProps = {
        InputProps: {
            style: {
                fontFamily: 'Poppins',
            },
        },
        InputLabelProps: {
            style: {
                fontFamily: 'Poppins',
            },
        },
    };

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        setImage(file);
    };

    const handleUpload = async () => {
        if (!image) {
            console.error('No image selected.');
            return;
        }

        setLoading(true);

        const formData = new FormData();
        formData.append('profile_img', image);

        try {
            const response = await axios.patch(UPDATE_PROFILE_API_URL, formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                    'Authorization': `Bearer ${token}`
                }
            });
            console.log('Image uploaded successfully:', response.data);
            setProfile((prevProfile) => ({
                ...prevProfile,
                avatarUrl: response.data.profile_img
            }));
            window.location.reload();
        } catch (err) {
            console.error('Error uploading image:', err);
            setError('Error uploading image');
        } finally {
            setLoading(false);
        }
    };

    const [img, setImg] = useState(null);
    const Profile_Url = img;

    const pic = async () => {
        try {
            const response = await axios.get(VIEW_PROFILE_API_URL, {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`,
                },
            });
            setImg(response.data.profile_img);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        pic();
    }, []);

    return (
        <Box sx={{ maxHeight: isMdDown ? '720px' : '450px', overflow: 'auto' }}>
            {profile ? (
                <>
                    <Grid sx={{ position: 'sticky', top: '0', zIndex: '1', backgroundColor: 'white', display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '10px 20px' }}>
                        <Typography variant="h6" fontFamily="Poppins" sx={{ fontSize: '28px', color: `${color}` }} gutterBottom>
                            Account
                        </Typography>
                        <Button
                            variant="contained"
                            onClick={isEditButton ? handleSaveClick : handleEditClick}
                            sx={{ backgroundColor: `${color}` }}
                        >
                            {isEditButton ? 'Save' : 'Edit'}
                        </Button>
                    </Grid>
                    <Divider />
                    <Container sx={{
                        display: 'flex', justifyContent: 'space-around',
                        p: 3, flexDirection: isMdDown ? 'column' : 'row',
                        alignItems: isMdDown ? 'center' : 'flex-start', // Center items on medium screens
                    }}>
                        <StyledAvatar
                            variant='square'
                            alt=""
                            src={Profile_Url}
                        />
                        <Box sx={{ justifyContent: 'center', alignItems: 'center', display: 'flex', flexDirection: 'column', mt: isMdDown ? 2 : 0 }}>
                            <Button
                                component="label"
                                role={undefined}
                                variant="contained"
                                tabIndex={-1}
                                sx={{ backgroundColor: `${color}`, display: 'flex', justifyContent: 'center', alignItems: 'center', width: 'stretch' }}
                            >
                                Select File
                                <input type="file" accept="image/*" onChange={handleImageChange} style={{ display: 'none' }} />
                            </Button>
                            <Typography>
                                {image ? image.name : 'No Files Selected'}
                            </Typography>
                            <Button
                                variant="contained"
                                onClick={handleUpload}
                                sx={{ backgroundColor: `${color}`, mt: '12px', mb: '8px', display: 'flex', justifyContent: 'center', alignItems: 'center', width: 'stretch' }}
                            >
                                Save
                            </Button>
                        </Box>
                        {isMdDown ? <Divider sx={{ my: 2 }} /> : <Divider orientation='vertical' flexItem />}
                        <Box sx={{ justifyContent: 'center', display: 'flex', alignItems: 'center', width: isMdDown ? '100%' : '30%', padding: '1px', mt: isMdDown ? 2 : 0 }}>
                            <Typography sx={{ width: '400px', fontSize: 13, marginLeft: isMdDown ? 0 : '15px', textAlign: isMdDown ? 'center' : 'left' }}>
                                The picture will be converted to Size x Size pixels.
                                Supported extensions: JPG, JPEG, and PNG. The maximum image size is 00mb.
                            </Typography>
                        </Box>
                    </Container>
                    <Divider />
                    <Box ml={isMdDown ? '20px' : '100px'}>
                        <Grid container spacing={0.5} sx={{ flexDirection: 'column' }} >
                            <Typography mt='10px' sx={{ color: `${color}`, display: 'flex', fontSize: '20px', alignItems: 'start', fontFamily: 'Poppins', fontWeight: 'bold' }}>
                                Personal Information
                            </Typography>
                            <Box ml={isMdDown ? '20px' : '80px'}>
                                <Grid item xs={12} sm={7} >
                                    <TextField
                                        disabled={!isEditButton}
                                        id="firstName"
                                        name="first_name"
                                        label="First Name"
                                        value={editedProfile.first_name}
                                        onChange={handleChange}
                                        fullWidth
                                        autoComplete="given-name"
                                        variant="standard"
                                        {...textFieldProps}
                                    />
                                </Grid>
                                <Grid item xs={12} sm={7} >
                                    <TextField
                                        disabled={!isEditButton}
                                        id="middleName"
                                        name="middle_name"
                                        label="Middle Name"
                                        value={editedProfile.middle_name}
                                        onChange={handleChange}
                                        fullWidth
                                        autoComplete="middle-name"
                                        variant="standard"
                                        {...textFieldProps}
                                    />
                                </Grid>
                                <Grid item xs={12} sm={7}>
                                    <TextField
                                        disabled={!isEditButton}
                                        id="lastName"
                                        name="last_name"
                                        label="Last Name"
                                        value={editedProfile.last_name}
                                        onChange={handleChange}
                                        fullWidth
                                        autoComplete="family-name"
                                        variant="standard"
                                        {...textFieldProps}
                                    />
                                </Grid>
                            </Box>
                            <Typography mt='10px' sx={{ color: `${color}`, display: 'flex', fontSize: '20px', alignItems: 'start', fontFamily: 'Poppins', fontWeight: 'bold' }}>
                                Contact Information
                            </Typography>
                            <Box ml={isMdDown ? '20px' : '80px'}>
                                <Grid item xs={12} sm={7}>
                                    <TextField
                                        disabled={!isEditButton}
                                        id="email"
                                        name="email"
                                        label="Email Address"
                                        value={editedProfile.email}
                                        onChange={handleChange}
                                        fullWidth
                                        autoComplete="email-address"
                                        variant="standard"
                                        {...textFieldProps}
                                    />
                                </Grid>
                                <Grid item xs={12} sm={7}>
                                    <TextField
                                        disabled={true}
                                        id="username"
                                        name="username"
                                        label="Username"
                                        value={editedProfile.username}
                                        onChange={handleChange}
                                        fullWidth
                                        autoComplete="username"
                                        variant="standard"
                                        {...textFieldProps}
                                    />
                                </Grid>
                                <Grid item xs={12} sm={7}>
                                    <TextField
                                        disabled={!isEditButton}
                                        id="phone_number"
                                        name="phone_number"
                                        label="Phone Number"
                                        value={editedProfile.phone_number}
                                        onChange={handleChange}
                                        fullWidth
                                        autoComplete="phone number"
                                        variant="standard"
                                        {...textFieldProps}
                                    />
                                </Grid>
                            </Box>
                            <Typography mt='10px' sx={{ color: `${color}`, display: 'flex', fontSize: '20px', alignItems: 'start', fontFamily: 'Poppins', fontWeight: 'bold' }}>
                                Change Password
                            </Typography>
                            <Box ml={isMdDown ? '20px' : '80px'}>
                                <Grid item xs={12} sm={7}>
                                    <TextField type="password"
                                        disabled={!isEditButton}
                                        id="oldpass"
                                        name="oldpass"
                                        label="Old Password"
                                        value={editedProfile.password}
                                        fullWidth
                                        autoComplete="Old Password"
                                        variant="standard"
                                        {...textFieldProps}
                                    />
                                </Grid>
                                <Grid item xs={12} sm={7}>
                                    <TextField
                                        disabled={!isEditButton}
                                        id="newpass"
                                        name="newpass"
                                        label="New Password"
                                        fullWidth
                                        variant="standard"
                                        {...textFieldProps}
                                    />
                                </Grid>
                                <Grid item xs={12} sm={7}>
                                    <TextField
                                        disabled={!isEditButton}
                                        id="confirm-pass"
                                        name="confirm-pass"
                                        label="Confirm Password"
                                        fullWidth
                                        autoComplete="confirm-pass"
                                        variant="standard"
                                        {...textFieldProps}
                                    />
                                </Grid>
                            </Box>
                        </Grid>
                    </Box>
                </>
            ) : error ? (
                <Typography variant='h5' color='red' mt="100px">{error.message}</Typography>
            ) : (
                <Typography variant='h5' color='darkgoldenrod' mt="100px">Loading...</Typography>
            )}
        </Box>
    );
}
