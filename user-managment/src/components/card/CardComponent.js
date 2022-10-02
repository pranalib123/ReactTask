import { Box, Card, Grid, Typography } from '@mui/material'
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import React from 'react'
const CardComponent = ({ itemList }) => {
  return (
    <Box >
    <Card>
      <Grid item xs={12} style={{ display: 'flex', justifyContent: 'space-between', background: '#17D7A0', color: '#FFFFFF' }} p={3}>
        <Typography fontSize={'130%'}>Cake Divisions</Typography>
        <MoreHorizIcon />
      </Grid>
      <Grid item xs={12} p={2}>

        <Typography fontSize={'80%'} noWrap>Name :{itemList?.name}</Typography>
        <Typography fontSize={'80%'} noWrap>Email :{itemList?.email}</Typography>
        <Typography fontSize={'80%'} noWrap>Total Employee:{itemList?.divEmp}</Typography>
        <Typography fontSize={'80%'} noWrap> Incharge:{itemList?.incharge}</Typography>

      </Grid>

      </Card>
    </Box>
  )
}
export default CardComponent