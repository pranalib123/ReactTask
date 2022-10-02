import { Grid } from '@mui/material'
import React from 'react'
import Appbar from '../appbar/Appbar'
import SideBar from '../sidebar/SideBar'
import SitesComponent from '../sites/SitesComponent'
import { QueryClient, QueryClientProvider, } from 'react-query'
// import UseQuery from './component/random/UseQuery'
const Layout = () => {
    const queryClient = new QueryClient()
    return (
        <div>
            <Grid container>
                <Grid item xs={2}>
                    <SideBar />
                </Grid>
                <Grid item xs={10}>
                    <Grid container>
                        <Grid item xs={12}>
                            <Appbar />
                        </Grid>
                        <Grid item xs={12}>
                            <QueryClientProvider client={queryClient}>
                                <SitesComponent />
                            </QueryClientProvider>
                        </Grid>
                    </Grid>
                </Grid>

            </Grid>
        </div>
    )
}

export default Layout