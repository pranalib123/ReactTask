// import { Grid } from "@mui/material";
// import Appbar from "./components/appbar/Appbar";
// import CardComponent from "./components/card/CardComponent";
// import { QueryClient, QueryClientProvider, } from 'react-query'
// import SideBar from "./components/sidebar/SideBar";
// import UseQuery from './component/random/UseQuery'

import Filter from "./components/filter/Filter";
import Layout from "./components/layout/Layout";

// import SitesComponent from "./components/sites/SitesComponent";

function App() {
  // const queryClient = new QueryClient()
  return (
    <div>
      {/* <SideBar/>
      {/* <Appbar/> */}
      {/* <QueryClientProvider client={queryClient}> 
      <SitesComponent/>
     </QueryClientProvider> 
      <CardComponent/>  */}
      <Layout/>
      {/* <Filter/> */}
    </div>
  );
}
export default App;
