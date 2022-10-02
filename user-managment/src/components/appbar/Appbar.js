import { Grid, Typography } from '@mui/material'
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import React from 'react'

const Appbar = () => {
  return (
    <div  >
      <Grid container p={3}>
        <Grid item xs={12} md={8} sm={8} style={{ display: 'flex', alignItems: 'center' }}>
          <Typography fontWeight={'bold'} fontSize={'20px'}>My Apps</Typography>
          <KeyboardArrowRightIcon />
          <Typography fontWeight={'bold'} fontSize={'20px'}>Client</Typography>
          <KeyboardArrowRightIcon />
          <Typography style={{ color: '#FF577F' }} fontWeight={'bold'} fontSize={'20px'}>Sites</Typography>
        </Grid>
        <Grid item xs={12} md={4} sm={4} style={{ display: 'flex', justifyContent: 'flex-end' }} >
          <NotificationsNoneIcon />
          <AccountCircleIcon />
        </Grid>
      </Grid>
    </div>
  )
}

export default Appbar