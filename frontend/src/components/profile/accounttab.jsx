import * as React from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import { Button, Container, Divider, Box, Avatar } from '@mui/material';

export default function AccountFor() {
  const [isEditButton, setIsEditButton] = React.useState(false);

  const handleEditClick = () => {
    setIsEditButton(true);
  };

  const handleSaveClick = () => {
    setIsEditButton(false);
    //
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
  return (
    <Box sx={{ maxHeight: '464px', overflow: 'auto' }}>
      <React.Fragment>
        <Box display='flex' justifyContent='space-between'>
        <Typography variant="h6" fontFamily="Poppins"  sx={{display:'flex', justifyContent:'start', fontSize:'28px'}} gutterBottom>
          Account
        </Typography>
        <Button
          variant="contained"
          color="success"
          onClick={isEditButton ? handleSaveClick : handleEditClick}
          sx={{ backgroundColor: '#50623A', mt: '16px', mb:'8px', mr:'30px'}}
        >
          {isEditButton ? 'Save' : 'Edit'}
        </Button>
        </Box>
          <Divider />
          <Container sx={{display:'flex', justifyContent:'space-around' ,p:3 , flexDirection:'row'}}>
            <Avatar
            alt=""
            src="/static/images/avatar/1.jpg"
            sx={{ width: 80, height: 80, mr: 1, border:'3px solid #50623A'}}
            />
            <Box sx={{justifyContent:'center',alignItems:'center', display:'flex', flexDirection:'column'}}>
              <Button
              component="label"
              role={undefined}
              variant="contained"
              tabIndex={-1}
              color='success'
              sx={{ backgroundColor: '#50623A' }}
            >
              Select File
            </Button>
            <Typography>
              No Files Selected
            </Typography>
            </Box>         
            <Divider orientation='vertical' flexItem />
            <Box sx={{justifyContent:'center',display:'flex',alignItems:'center', width: '30%', padding: '1px', }}>
            <Typography sx={{ fontSize: 13, marginLeft:'15px' }}>
              The picture will be converted to Size x Size pixels.
              Supported extensions: JPG, JPEG, and PNG. The maximum image size is 00mb.
            </Typography>
          </Box>
          </Container>
          <Divider />
        <Box ml='100px'>
          <Grid container spacing={.5} sx={{ flexDirection: 'column'}} >
            <Typography  mt='10px' sx={{display:'flex',fontSize:'20px', alignItems:'start', fontFamily:'Poppins', fontWeight:'bold'}}>
              Personal Information
            </Typography>
          <Box ml='80px'>
          <Grid item xs={12} sm={7} >
            <TextField
              disabled={!isEditButton}
              id="firstName"
              name="firstName"
              label="First name"
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
              name="middleName"
              label="Middle name"
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
              name="lastName"
              label="Last name"
              fullWidth
              autoComplete="family-name"
              variant="standard"
              {...textFieldProps}
            />
          </Grid>
          </Box>
          <Typography  mt='10px' sx={{display:'flex',fontSize:'20px', alignItems:'start', fontFamily:'Poppins', fontWeight:'bold'}}>
              Contact Information
            </Typography>
          <Box ml='80px'>
          <Grid item xs={7}>
            <TextField
            disabled={!isEditButton}
              id="email"
              name="email"
              label="E-mail Address"
              fullWidth
              autoComplete="email-address"
              variant="standard"
              {...textFieldProps}
            />
          </Grid>
          <Grid item xs={7}>
            <TextField
            disabled={!isEditButton}
              id="username"
              name="username"
              label="Username"
              fullWidth
              autoComplete="username"
              variant="standard"
              {...textFieldProps}
            />
          </Grid>
          </Box>
          <Typography  mt='10px' sx={{display:'flex',fontSize:'20px', alignItems:'start', fontFamily:'Poppins', fontWeight:'bold'}}>
              Change Password
            </Typography>
            <Box ml='80px'>
          <Grid item xs={12} sm={7}>
            <TextField
            disabled={!isEditButton}
              id="oldpass"
              name="oldpass"
              label="Old Password"
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
    </React.Fragment>
    </Box>
  );
}