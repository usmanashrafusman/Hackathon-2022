import React, { useState } from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import SelectBox from '../forms/SelectBox';
import DialogTitle from '@mui/material/DialogTitle';
import Input from '../forms/Input';

import { Grid } from '@mui/material';
import DatePicker from '../forms/DatePicker';


const cityOptions = [{
  value: "karachi",
  label: "Karachi"
}, {
  value: "hyderabad",
  label: "Hyderabad"
}]

const qualification = [{ value: "metric", label: "Metriculation" }, { value: "inter", label: "Intermediate" }, { value: "bs", label: "BS" }, { value: "master", label: "Master" }]


const gender = [{ value: "male", label: "Male" }, { value: "female", label: "Female" }]

const EnrollCouseDialog = ({ isOpen, handleClose }) => {
  return (
    <div>
      <form>
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
                <SelectBox labelTag="City" placeholder="Select City" name="city" options={cityOptions} required />
              </Grid>
              <Grid item md={4}>
                <Input labelTag="Your Name" placeholder="Your Name" name="fName" required />
              </Grid>
              <Grid item md={4}>
                <Input labelTag="Father Name" placeholder="Father Name" name="lName" required />
              </Grid>
              <Grid item md={4}>
                <Input labelTag="Email" type="email" placeholder="Email" name="email" required />
              </Grid>
              <Grid item md={4}>
                <Input labelTag="Phone" type="number" name="phone" required />
              </Grid>
              <Grid item md={4}>
                <Input labelTag="CNIC" type="number" name="CNIC" required />
              </Grid>
              <Grid item md={4}>
                <Input labelTag="Father CNIC" type="number" name="fCNIC" required />
              </Grid>
              <Grid item md={4}>
                <DatePicker required />
              </Grid>
              <Grid item md={4}>
                <SelectBox labelTag="Gender" placeholder="Select Gender" name="gender" options={gender} required />
              </Grid>
              <Grid item md={12}>
                <Input labelTag="Address" name="address" required />
              </Grid>
              <Grid item md={12}>
                <SelectBox labelTag="Last Qualification" placeholder="Last Qualification" name="qualification" options={qualification} required />
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
      </form>
    </div>
  )
}

export default EnrollCouseDialog;
