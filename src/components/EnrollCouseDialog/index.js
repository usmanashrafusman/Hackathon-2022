import React, { useState } from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import SelectBox from '../forms/SelectBox';
import DialogTitle from '@mui/material/DialogTitle';
import Input from '../forms/Input';

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
      >
        <DialogTitle id="alert-dialog-title">
          Course Enroll Form
        </DialogTitle>
        <DialogContent>
          <SelectBox labelTag="City" placeholder="Select City" name="city" options={cityOptions} />
          <SelectBox labelTag="Course" placeholder="Select Course" name="courseTitle" options={cityOptions} />
          <Input labelTag="Your Name" placeholder="Your Name" name="name"/>
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
