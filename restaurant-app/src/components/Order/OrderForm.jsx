import React, { useState } from 'react'
import Form from '../../layouts/Form'
import { ButtonGroup, createTheme, Grid, InputAdornment, Button as MuiButton } from '@mui/material'
import { Button, Input, Select } from '../../controls/index'
import { makeStyles } from '@mui/styles'
import ReplayIcon from '@mui/icons-material/Replay';
import RestaurantMenuIcon from '@mui/icons-material/RestaurantMenu';
import ReOrderIcon from '@mui/icons-material/Reorder';

// Options for the Payment Method dropdown
const pMethods = [
    { id: 'none', title: 'Select' },
    { id: 'Cash', title: 'Cash' },
    { id: 'Card', title: 'Card' },
]

// Create a default theme instance to use spacing and other MUI utilities
const theme = createTheme();

// Define custom styles using the Legacy makeStyles API (compatible with MUI v5 via @mui/styles)
const useStyles = makeStyles(() => ({
    adornmentText: {
        '& .MuiTypography-root': {
            color: '#f3b33d',
            fontWeight: 'bolder',
            fontSize: '1.5em'
        }
    },
    submitButtonGroup: {
        backgroundColor: '#f3b33d',
        color: '#000',
        margin: theme.spacing(1),
        '& .MuiButton-label': {
            textTransform: 'none'
        },
        '&:hover': {
            backgroundColor: '#f3b33d',
        }
    }
}))

export default function OrderForm(props) {
    // Destructure form values and handlers passed from the parent component
    const { values, errors, handleInputChange } = props;
    const classes = useStyles();

    return (
        <Form>
            {/* THÊM GRID CONTAINER Ở ĐÂY */}
            <Grid container>

                {/* Left Column: Occupies 6/12 units of width */}
                <Grid item xs={6}>
                    <Input
                        disabled
                        label="Order Number"
                        name="orderNumber"
                        value={values.orderNumber}
                        InputProps={{
                            startAdornment: <InputAdornment
                                className={classes.adornmentText}
                                position="start">#</InputAdornment>,
                        }}
                    />
                    <Select
                        label="Customer"
                        name="customerId"
                        value={values.customerId}
                        onChange={handleInputChange}
                        options={[
                            { id: '1', title: 'Customer 1' },
                            { id: '2', title: 'Customer 2' },
                            { id: '3', title: 'Customer 3' },
                            { id: '4', title: 'Customer 4' },
                            { id: '5', title: 'Customer 5' }
                        ]}
                    />
                </Grid>

                {/* Right Column: Occupies the other 6/12 units */}
                <Grid item xs={6}>
                    <Select
                        label="Payment Method"
                        name="pMethod"
                        options={pMethods}
                        value={values.pMethod}
                        onChange={handleInputChange}
                    />
                    <Input
                        disabled
                        label="Grand Total"
                        name="gTotal"
                        value={values.gTotal}
                        InputProps={{
                            startAdornment: <InputAdornment
                                className={classes.adornmentText}
                                position="start">$</InputAdornment>,
                        }}
                    />

                    {/* Action Buttons Group */}
                    <div style={{ display: 'flex', alignItems: 'center' }}>
                        <ButtonGroup className={classes.submitButtonGroup}>
                            <MuiButton
                                size='large'
                                endIcon={<RestaurantMenuIcon />}
                                type='submit'
                            >Submit</MuiButton>
                            <MuiButton
                                size='small'
                                startIcon={<ReplayIcon />}
                            />
                        </ButtonGroup>

                        <Button
                            size='large'
                            startIcon={<ReOrderIcon />}
                            style={{ marginLeft: '8px' }} // Spacing between button groups
                        >Orders</Button>
                    </div>
                </Grid>

            </Grid>
        </Form>
    )
}