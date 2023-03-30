import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

export default function Contact() {
  return (
    <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <div>
        <TextField
          id="outlined-multiline-flexible"
          label="Name:"
          multiline
          maxRows={4}
        />
        <TextField
          id="outlined-textarea"
          label="Email:"
          placeholder="Placeholder"
          multiline
        />
        <TextField
          id="outlined-multiline-static"
          label="Descriptive Message:"
          multiline
          rows={4}
          defaultValue="Enter Here:"
        />
      </div>
    </Box>
  );
}
