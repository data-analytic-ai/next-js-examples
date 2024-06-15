"use client"
import React, {useState} from 'react';
import { useForm } from 'react-hook-form';
import { TextField, Button as MuiButton, Alert } from '@mui/material';
import { styled } from '@mui/system';

const FormContainer = styled('div')({
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh',
});

const StyledForm = styled('form')({
    width: '80%',
    maxWidth: '400px',
    padding: '20px',
    borderRadius: '10px',
    border: '2px solid #1E3A8A',
    boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.2)',
    backgroundColor: '#ffffff',
    textAlign: 'center',
});

const StyledTextField = styled(TextField)({
    marginBottom: '16px',
    width: '100%',
});


import { Typography } from '@mui/material'; // Importa Typography desde Material-UI

export default function Form() {
    const { register, handleSubmit, formState: { errors } } = useForm();

    return (
        <>
            <FormContainer>
                <Typography variant="h4" gutterBottom>Enter your credentials</Typography> {/* Agrega un título */}
                <StyledForm>
                    <StyledTextField
                        label="Username"
                        type="text"
                    />
                    <StyledTextField
                        label="Password"
                        type="password"
                    />
                    <MuiButton
                        type="submit"
                        variant="contained"
                        color="primary"
                        margin="5px"
                    > Submit </MuiButton>
                </StyledForm>
            </FormContainer>
        </>
    );
    const [formStatus, setFormStatus] = useState({ success: false, error: '' });
    const onSubmit = (data) => {
        if (data.username === 'testuser' && data.password === 'password123') {
            setFormStatus({ success: true, error: '' });
        } else {
            setFormStatus({ success: false, error: 'Invalid username or password' });
        }
    };

}
