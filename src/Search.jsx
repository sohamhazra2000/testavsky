import { Button, Card, CardContent, Container, Grid, Paper, TextField, Typography } from '@mui/material';
import axios from 'axios';
import React, { useState } from 'react'
import { useForm } from 'react-hook-form';


export default function Search() {
    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm();
      const[A,setA]=useState({empid:"",name:"",designation:"",adress:"",phoneno:"",email:""})
      const onSubmit = (data) => {
        const apiUrl = "https://firstapi-5cqk.onrender.com/aa";
    
        const UpData = {
            "id": data.empid,

        };
        axios
          .post(apiUrl, UpData).then(son=>setA(son.data[0]))
          
      };
      console.log(A.empid +A.name+A.designation)
      return (
        <Container>
          <Grid container spacing={2}>
            <Grid item xs={12} md={6} sx={{ margin: "0 auto",marginTop:"150px" }}>
              <Paper elevation={3} sx={{ padding: 2 }}>
                <Typography variant="h5" gutterBottom>
                  Register from
                </Typography>
                <form onSubmit={handleSubmit(onSubmit)}>
                  <TextField
                    {...register("empid", { required: true, maxLength: 20 })}
                    label="empid"
                    fullWidth
                    margin="normal"
                    variant="outlined"
                    error={errors.empid}
                    helperText={errors.empid && "id is required"}
                  />
                  
                  <Button
                    variant="contained"
                    color="primary"
                    fullWidth
                    size="large"
                    type="submit"
                    onClick={handleSubmit(onSubmit)}
                    sx={{ marginTop: 2 ,marginBottom:6}}
                  >
                    serch
                  </Button>
                  <Typography variant="h5" gutterBottom>
                  Do have an acoount then login below
                </Typography>
                  
                </form>
              </Paper>
            </Grid>
            <Grid item xs={12} md={6} sx={{ margin: "0 auto",marginTop:"150px" }}>
            <Card sx={{ Width: 345,height:314 }}>
      
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          empid: {A.empid}
        </Typography>
        <Typography gutterBottom variant="h5" component="div">
         name: {A.name}
        </Typography>
        <Typography gutterBottom variant="h5" component="div">
          designation: {A.designation}
        </Typography>
        <Typography gutterBottom variant="h5" component="div">
          adress: {A.adress}
        </Typography>
        <Typography gutterBottom variant="h5" component="div">
          phone: {A.phoneno}
        </Typography>
        <Typography gutterBottom variant="h5" component="div">
          email: {A.email}
        </Typography>
      </CardContent>
    
    </Card>
    </Grid>
          </Grid>
       
        </Container>
      );
}

