import { Button, Card, Divider, Grid, Typography } from '@mui/material'
import SearchIcon from '@mui/icons-material/Search';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import React from 'react'


const Filter = () => {
  return (
    <div>
       
        {/* <Card>
            <Grid item xs={12} style={{display:'flex',justifyContent:'center'}}>
            <Typography fontWeight={'bold'}>Filters</Typography>
            <Divider/>
            <Typography>By Location</Typography>
            <div style={{display:'flex',alignItems:'center',border:'solid',borderRadius:'20px',width:'15%',borderColor:'#6F38C5'}}>
            <SearchIcon/>
            <input placeholder='Search by Location' style={{border:'none',width:'100%'}}/>
            <ExpandMoreIcon />
            </div>
            <div >
            <Button variant='contained' style={{background: "#FD841F",width:'10%'}}>Apply</Button>
            </div> 
            </Grid>
             
             
            
        </Card> */}
        {/* <Grid item xs={8}> */}
        <Card >
            <Grid item xs={4} p={2}>
            <Typography fontWeight={'bold'}>Filters</Typography>
            </Grid>
            <Divider/>
            <Grid item xs={12} p={2}>
            <Typography>By Location</Typography>      
                  </Grid>
             <Grid item xs={12} p={2}>
             <div style={{display:'flex',alignItems:'center',border:'solid',borderRadius:'20px',width:'100%',borderColor:'#6F38C5'}}>
            <SearchIcon/>
            <input placeholder='Search by Location' style={{border:'none',width:'100%'}}/>
            <ExpandMoreIcon />
            </div>
            </Grid>  
            <Grid item xs={12} style={{display:'flex',justifyContent:'center'}} p={2}>
            <Button variant='contained' style={{background: "#FD841F",width:'50%'}}>Apply</Button>      
                  </Grid>    
        </Card>
        {/* </Grid> */}
       
    </div>
  )
}

export default Filter