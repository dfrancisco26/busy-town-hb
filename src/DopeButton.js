import React from 'react';
import { Button } from '@material-ui/core';

export default function dopeButton({
  onClick,
  children,
  dopeColor = 'slate-grey',
  border = 'antique-white solid 2px',
  variant = 'outlined',
  margin = '10px'
}) {
  return (
    <Button 
      className="dope-button"
      onClick={onClick}
      variant={variant}
      sx={{
        background: dopeColor,
        border: border,
        margin: margin
      }}>
      {children}
    </Button>
  );
}
