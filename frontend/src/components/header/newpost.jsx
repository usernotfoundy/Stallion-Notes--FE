import React from 'react';
import { Box, Button, Avatar, Modal, Stack, styled, TextField, Typography, FormControl, InputLabel, OutlinedInput, InputAdornment, Autocomplete } from "@mui/material";
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import { useState } from "react";

const StyledModal = styled(Modal)({
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
});

const UserBox = styled(Box)({
    display: "flex",
    alignItems: "center",
    gap: "10px",
    marginBottom: "10px",
});

const genres = [
    { label: 'Science Fiction' },
    { label: 'Fantasy' },
    { label: 'Mystery' },
    { label: 'Thriller' },
    { label: 'Romance' },
    { label: 'Horror' },
];

const NewPostBtn = () => {
    const [open, setOpen] = useState(false);

    const handleOpen = () => {
        setOpen(true);
    };

    return (
        <>
            <Button
                onClick={handleOpen}
                variant="contained"
                component="label"
                color="success"
                fontFamily="Poppins"
                startIcon={<CloudUploadIcon />}
                sx={{ margin: '5px', fontSize: '13px', backgroundColor: '#50623A' }}
            >
                Upload
            </Button>
            <StyledModal
                open={open}
                onClose={() => setOpen(false)}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box
                    width={800}
                    height={560}
                    bgcolor={"white"}
                    color={"text.primary"}
                    p={3}
                    borderRadius={5}
                >
                    <Typography variant="h6" color="gray" textAlign="center" fontFamily="Poppins">
                        Upload New Book
                    </Typography>
                    <UserBox>
                        <Avatar
                            src="" //jay profile pic na :D
                            sx={{ width: 30, height: 30 }}
                        />
                        <Typography fontWeight={500} variant="span" fontFamily="Poppins">
                            Emmanuel Adonay II
                        </Typography>
                    </UserBox>
                    <Typography mb='10px' variant="subtitle2" fontFamily='Poppins'>Fill in the Book form: </Typography>
                    <Stack display='flex' justifyContent={'center'} alignItems='center' direction='column' gap={1.5}>
                        <Stack flexDirection={'row'} gap={1}>
                            <TextField
                                sx={{ width: "395px" }}
                                id="book-title"
                                size="small"
                                placeholder="Title"
                            />
                            <TextField
                                sx={{ width: "395px" }}
                                id="book-author"
                                size="small"
                                placeholder="Author"
                            />
                        </Stack>
                        <TextField
                            sx={{ width: "100%" }}
                            id="book-desc"
                            size="small"
                            multiline
                            rows={4}
                            placeholder="Description"
                        />
                        <Stack flexDirection={'row'} gap={1}>
                            <FormControl sx={{ width: '395px' }}>
                                <InputLabel htmlFor="outlined-adornment-amount">Price</InputLabel>
                                <OutlinedInput
                                    id="outlined-adornment-amount"
                                    startAdornment={<InputAdornment position="start">₱</InputAdornment>}
                                    label="Price"
                                />
                            </FormControl>
                            <FormControl sx={{ width: "395px" }}>
                                <Autocomplete
                                    id="book-genre"
                                    options={genres}
                                    getOptionLabel={(option) => option.label}
                                    renderInput={(params) => <TextField {...params} label="Genre" />}
                                />
                            </FormControl>
                        </Stack>
                        <TextField
                            sx={{ width: "100%" }}
                            id="book-publisher"
                            size="small"
                            placeholder="Publisher"
                        />
                        <TextField
                            sx={{ width: "100%" }}
                            id="book-isbn"
                            size="small"
                            placeholder="International Standard Book Number (ISBN)"
                        />
                        <TextField
                            type="file"
                            // fullWidth
                            // onChange={handleFileChange}
                            style={{ marginTop: '20px', display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: 'secondary' }}
                        />
                    </Stack>
                    <Button color='secondary'>Cancel</Button>
                    <Button type='submit' color="success" variant='contained'>
                        Submit
                    </Button>
                </Box>
            </StyledModal>
        </>
    );
};

export default NewPostBtn;
