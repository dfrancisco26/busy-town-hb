import React from 'react';
import { Button } from '@material-ui/core';

export default function DopeButton({
  onClick, 
  children, 
  coolColor = 'cyan', 
  border = 'orange solid 3px',
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