import { Button, Grid, Typography, Card, Divider, TextField } from '@mui/material'
import AddIcon from '@mui/icons-material/Add';
import WestIcon from '@mui/icons-material/West';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import { reducer } from '../reducer/UserReducer'
import { UserAction } from '../action/UserAction'
import { useQuery, useMutation } from 'react-query';
import React, { useReducer } from 'react'
import CardComponent from '../card/CardComponent';
import CancelIcon from '@mui/icons-material/Cancel';
import Filter from '../filter/Filter';
const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4
};
const SitesComponent = () => {
    const [alpha, dispatch] = useReducer(reducer, [])
    // const[alpha,dispatch] = useReducer([])
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => {
        setOpen(true)
    };
    const handleClose = () => setOpen(false);
    const [incharge, setIncharge] = React.useState("");
    const [name, setName] = React.useState("");
    const [email, setEmail] = React.useState("");
    const [emp, setEmp] = React.useState("");
    const handleChange = (event) => {
        setIncharge(event.target.value);
    };
    const handleChange1 = (event) => {
        setName(event.target.value);
    };
    const handleChange2 = (event) => {
        setEmail(event.target.value);
    };
    const handleChange3 = (event) => {
        setEmp(event.target.value);
    };
    const fetchData = () => {
        return fetch('https://jsonplaceholder.typicode.com/users').then((res) => res.json())
    }
    const { data } = useQuery("users", fetchData, {
        onSuccess: (data) => {
            dispatch({ type: UserAction.Add, payload: data });
        }
    });
    const mutation = useMutation(data => fetch('https://jsonplaceholder.typicode.com/users', { method: "POST", body: JSON.stringify(data) }).then(d => d.json), {
        onSuccess: (d) => {
            dispatch({ type: UserAction.Post, payload: { id: d.id, name, email, emp, incharge } });
        }
    })
    const postHandler = () => {
        mutation.mutate({
            name: name,
            email: email,
            emp: emp,
            incharge: incharge
        })
        setOpen(false)
    }
    const resetData = () => {
        setIncharge('')
        setName('')
        setEmail('')
        setEmp('')
    }
    return (
        <div>
            <Grid container p={3} style={{background:'#DFF6FF'}}>
                <Grid item xs={8} style={{ display: 'flex', alignItems: 'center' }}>
                    <WestIcon />
                    <Typography fontWeight={'bold'} fontSize={'20px'}>Century</Typography>
                    <KeyboardArrowRightIcon />
                    <Typography fontWeight={'bold'} fontSize={'20px'} style={{color: '#17D7A0'}}>Divisions</Typography>
                </Grid>
                <Grid item xs={4}>
                    <Button onClick={handleOpen} variant='contained' style={{ background: '#FD841F', float: 'right', width:'60%'}}>
                        <AddIcon />
                        Add New Division
                    </Button>
                    <Modal
                        keepMounted
                        open={open}
                        onClose={handleClose}
                        aria-labelledby="keep-mounted-modal-title"
                        aria-describedby="keep-mounted-modal-description"
                    >
                        <Box sx={style}>
                            <Grid item xs={12} style={{ float: 'right' }} >
                                <CancelIcon onClick={handleClose} />
                            </Grid>
                            <Typography fontWeight={"bold"} mt={4} >Add New Division</Typography>
                            <Divider />
                            <Grid item xs={12} pt={2}>
                                <Typography>Division Name:</Typography>
                                <TextField
                                    type="text"
                                    placeholder="Department Name"
                                    onChange={handleChange1}
                                    value={name}
                                />
                            </Grid>
                            <Grid container spacing={2} pt={2}>
                                <Grid item xs={4}>
                                    <Typography p={1.5}>Incharge:</Typography>
                                    <FormControl fullWidth>
                                        <InputLabel id="demo-simple-select-label"></InputLabel>
                                        <Select
                                            labelId="demo-simple-select-label"
                                            id="demo-simple-select"
                                            value={incharge}
                                            onChange={handleChange}
                                        >
                                            <MenuItem value={10}>Department Lead</MenuItem>
                                            <MenuItem value={20}>Manager</MenuItem>
                                            <MenuItem value={30}>Supervisior</MenuItem>
                                        </Select>
                                    </FormControl>
                                </Grid>
                                <Grid item xs={4}>
                                    <Typography>Incharge Email Id:</Typography>
                                    <TextField
                                        type="text"
                                        placeholder="Email Id"
                                        onChange={handleChange2}
                                        value={email}
                                    />
                                </Grid>
                                <Grid item xs={4}>
                                    <Typography>Total Employee Working:</Typography>
                                    <TextField
                                        type="text"
                                        placeholder="Total Employee"
                                        onChange={handleChange3}
                                        value={emp}
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <Card
                                        style={{
                                            display: "flex",
                                            justifyContent: "flex-end",
                                            padding: "10px"
                                        }}
                                    >
                                        <Button
                                            variant="contained"
                                            style={{
                                                background: "#FFFFFF",
                                                color: "black",
                                                width: "30%"
                                            }}
                                            onClick={resetData}
                                        >
                                            cancle
                                        </Button>
                                        <Button
                                            variant="contained"
                                            style={{
                                                background: "#FD841F",
                                                width: "30%",
                                                marginLeft: "10px",
                                            }}
                                            onClick={postHandler}
                                        >
                                            Submit
                                        </Button>
                                    </Card>
                                </Grid>
                            </Grid>
                        </Box>
                    </Modal>
                </Grid>
            </Grid>
            <Grid container style={{background:'#DFF6FF'}} >
            <Grid item xs={8} pl={2} pr={3}>
            <Box sx={{ flexGrow: 1 }}>
                <Grid container spacing={2}>
                    {alpha?.map(itemList => {
                        return (
                            <Grid item xs={12}  md={4}  sm={6} >
                                <CardComponent itemList={itemList} />
                            </Grid>
                        )
                    })}
                </Grid>
            </Box>
            </Grid>
            <Grid item xs={3.9} pl={19} pr={1.3}>
            <Filter />
            </Grid>
            </Grid>
        </div>
    )
}
export default SitesComponent