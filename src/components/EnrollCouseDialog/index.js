import React, { useState } from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import SelectBox from '../forms/SelectBox';
import DialogTitle from '@mui/material/DialogTitle';
import Input from '../forms/Input';
import { Grid } from '@mui/material';

const cityOptions = [{
  value: "karachi",
  label: "Karachi"
}, {
  value: "hyderabad",
  label: "Hyderabad"
}]

const EnrollCouseDialog = ({ isOpen, handleClose }) => {
  return (
    <div>
      <Dialog
        open={isOpen}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        fullWidth
      >
        <DialogTitle id="alert-dialog-title">
          Course Enroll Form
        </DialogTitle>
        <DialogContent>
          <Grid container spacing={4}>
            <Grid item md={4}>
              <SelectBox labelTag="City" placeholder="Select City" name="city" options={cityOptions} />
            </Grid>
            <Grid item md={4}>
              <Input labelTag="Your Name" placeholder="Your Name" name="fName" />
            </Grid>
            <Grid item md={4}>
              <Input labelTag="Father Name" placeholder="Father Name" name="lName" />
            </Grid>
            <Grid item md={4}>
              <Input labelTag="Email" type="email" placeholder="Email" name="email" />
            </Grid>
            <Grid item md={4}>
              <Input labelTag="Phone" type="number" placeholder="Phone" name="phone" />
            </Grid>
            <Grid item md={4}>
              <Input labelTag="CNIC" type="number" placeholder="CNIC" name="CNIC" />
            </Grid>
            <Grid item md={4}>
              <Input labelTag="Father CNIC" type="number" placeholder="Father CNI" name="fCNIC" />
            </Grid>
          </Grid>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button variant='contained' onClick={handleClose} autoFocus>
            Submit
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  )
}

export default EnrollCouseDialog;
