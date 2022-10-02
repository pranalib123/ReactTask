import React from "react";
import { Grid, IconButton, Typography } from "@mui/material";
import GridViewIcon from '@mui/icons-material/GridView';
import GroupIcon from '@mui/icons-material/Group';
import HomeIcon from '@mui/icons-material/Home';
import SettingsIcon from '@mui/icons-material/Settings';
import LogoutIcon from '@mui/icons-material/Logout';
const SideBar = () => {
  return (
    <>
      <Grid container style={{ display: 'flex', justifyContent: 'space-between' }} pl={2}>
        <Grid item xs={12} sm={12} md={12} style={{ display: 'flex', justifyContent: 'center' }} >
          <Typography fontWeight={'bold'} fontSize={'30px'} pt={2}>CAIT</Typography>
        </Grid>
        <Grid item xs={12} sm={12} md={12} style={{ display: 'flex', justifyContent: 'center' }} >
          <Typography fontWeight={'bold'} fontSize={'10px'}>EDUSYS PVT.LTD</Typography>
        </Grid>
        <Grid item xs={12} sm={12} md={12} style={{ display: 'flex', alignItems: 'center' }} pt={2}>
          <IconButton><GridViewIcon /></IconButton>
          <Typography>My Apps</Typography>
        </Grid>
        <Grid item xs={12} sm={12} md={12} style={{ display: 'flex', alignItems: 'center' }}>
          <IconButton><GroupIcon /></IconButton>
          <Typography>Resources</Typography>
        </Grid>
        <Grid container style={{ position: 'fixed', top: '34rem' }}>
          <Grid item xs={12} sm={12} md={12} style={{ display: 'flex', alignItems: 'center' }}>
            <IconButton><HomeIcon /></IconButton>
            <Typography>My Organisation</Typography>
          </Grid>
          <Grid item xs={12} sm={12} md={12} style={{ display: 'flex', alignItems: 'center' }} pt={3}>
            <IconButton><SettingsIcon /></IconButton>
            <Typography>Settings</Typography>
          </Grid>
          <Grid item xs={12} sm={12} md={12} style={{ display: 'flex', alignItems: 'center' }} pt={2}>
            <IconButton><LogoutIcon /></IconButton>
            <Typography>Logout</Typography>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};
export default SideBar;
