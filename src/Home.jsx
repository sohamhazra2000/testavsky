import { Button, Container, Grid, Paper, TextField, Typography } from '@mui/material';
import axios from 'axios';
import React from 'react'
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';

export default function Home() {
    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm();
      const onSubmit = (data) => {
        const apiUrl = "https://firstapi-5cqk.onrender.com/a";
    
        const UpData = {
            "empid": data.empid,
            "name": data.name,
            "designation": data.designation,
            "adress": data.adress,
            "phoneno":data.phoneno,
           "email":data.email,

        };
        axios
          .post(apiUrl, UpData).then((res)=>{alert(res.data.msg)})
          
      };
      return (
        <Container>
          <Grid container spacing={2}>
            <Grid item xs={12} md={6} sx={{ margin: "0 auto",marginTop:"50px",marginBottom:"250px" }}>
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
                  <TextField
                    {...register("name", { required: true, maxLength: 200})}
                    label="name"
                    fullWidth
                    margin="normal"
                    variant="outlined"
                    error={!!errors.name}
                    helperText={errors.name && "name is required"}
                  />
                  
                  <TextField
                    {...register("designation", { required: true })}
                    label="designation"
                    fullWidth
                    margin="normal"
                    variant="outlined"
                    error={!!errors.designation}
                    helperText={errors.desgantion && "desigantion is required"}
                  />
                  <TextField
                    {...register("adress", { required: true })}
                    label="adress"
                    fullWidth
                    margin="normal"
                    variant="outlined"
                    error={!!errors.adress}
                    helperText={errors.adress && "adress is required"}
                  />
                   <TextField
                    {...register("phoneno", { required: true, maxLength: 12 })}
                    label="phoneno"
                    fullWidth
                    margin="normal"
                    variant="outlined"
                    error={errors.phoneno}
                    helperText={errors.phoneno && "phone is required"}
                  />
                  <TextField
                    {...register("email", {
                      required: true,
                      pattern:/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/
                      
                    })}
                    label="Your Email"
                    fullWidth
                    margin="normal"
                    variant="outlined"
                    error={!!errors.email}
                    helperText={errors.email?.type === "required" ? "Email is required." : errors.email?.type === "pattern" ? "Valid email is required" : ""}
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
                    Register
                  </Button>
                  <Typography variant="h5" gutterBottom>
                  for serch click below
                </Typography>
                  <Link to="/serch">
                  <Button
                    variant="contained"
                    color="primary"
                    fullWidth
                    size="large"
                    type="submit"
                    sx={{ marginTop: 2 }}
                  >
                  serch
                  </Button>
                  </Link>
                  
                </form>
              </Paper>
            </Grid>
          </Grid>
        </Container>
      );
}
