import * as React from 'react';
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';

export default function Footer() {
  const [value, setValue] = React.useState(0);

  return (
    <Box sx={{ width: 500 }}>
      <BottomNavigation
        showLabels
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      >
        <BottomNavigationAction label="jajohnson0201@gmail.com"  />
        <BottomNavigationAction label="GitHub" href="https://github.com/jajohnson0201" />
        <BottomNavigationAction label="LinkedIn" href="" />
      </BottomNavigation>
    </Box>
  );
}
