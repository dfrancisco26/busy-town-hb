import React from 'react';
import Button from '@mui/material/Button';

export default function DopeButton({
  onClick, 
  children, 
  coolColor = 'orange', 
  border = 'white solid 3px',
  margin = '10px',
  variant = 'outlined'
}) {
  return (
    <Button
      className="custom-button" 
      onClick={onClick} 
      variant={variant} 
      sx={{ 
        background: coolColor,
        border: border,
        margin: margin
      }}>
      {children}
    </Button>
  );
}