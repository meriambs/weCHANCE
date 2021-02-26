import React from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
// partie add 
import * as Yup from 'yup';
import { Formik  } from 'formik';
import {
  Box,
  Button,
  Card,
  CardContent,
  CardHeader,
  Container,
  Divider,
  Grid,
  TextField,
  Typography,
  makeStyles
} from '@material-ui/core';
import axios from 'axios';
import { Link as RouterLink, useNavigate } from 'react-router-dom';

import Page from 'src/components/Page';
 import  {useSelector} from 'react-redux';


const useStyles = makeStyles(() => ({
  root: {}
}));

const ProfileDetails = ({ className, ...rest }) => {
  const classes = useStyles();

 const user=useSelector((state =>state.user))
  

const navigate = useNavigate();

  //  const handleChange = (e, value) => {
      //  setAccountType(value)
  //  }
 const updated  =()=>{
                            console.log('test direction');

               navigate('/app/update-profil', { replace: true })
              
 }

  return (
    
 <Page
      className={classes.root}
      title="Register"
    >
    <Container maxWidth="sm">
          
              <form>
      <Card>
        <CardHeader
          subheader="The information can be edited"
          title="Profile"
        />
        <Divider />
        <CardContent>
          <Grid
            container
            spacing={3}
          >
            <Grid
              item
              md={6}
              xs={12}
            >
              <TextField
                // error={Boolean(touched.name && errors.name)}
                  fullWidth
                  // helperText={touched.name && errors.name}
                  label="name"
                  margin="normal"
                  name="name"
                  // onBlur={handleBlur}
                  // onChange={handleChange}
                  value={user.name}
                  variant="outlined"
              />
            </Grid>
            <Grid
              item
              md={6}
              xs={12}
            >
              <TextField
                // error={Boolean(touched.lastName && errors.lastName)}
                  fullWidth
                  // helperText={touched.lastName && errors.lastName}
                  label="Last name"
                  margin="normal"
                  name="lastName"
                  // onBlur={handleBlur}
                  // onChange={handleChange}
                  value={user.lastName}
                  variant="outlined"
              />
            </Grid>
            <Grid
              item
              md={6}
              xs={12}
            >
              <TextField
                // error={Boolean(touched.email && errors.email)}
                  fullWidth
                  // helperText={touched.email && errors.email}
                  label="Email Address"
                  margin="normal"
                  name="email"
                  // onBlur={handleBlur}
                  // onChange={handleChange}
                  type="email"
                  value={user.email}
                  variant="outlined"
              />
            </Grid>
            
          </Grid>
        </CardContent>
        <Divider />
        <Box
          display="flex"
          justifyContent="flex-end"
          p={2}
        >
          <Button
           color="primary"
                    onClick={updated}
                    fullWidth
                    size="large"
                    type="submit"
                    variant="contained"
          >
            Change some details
          </Button>
        </Box>
      </Card>
    </form>
            
    </Container>
    </Page>
  );
};

//  ProfileDetails.propTypes = {
//    className: PropTypes.string
//  };

export default ProfileDetails;



// 