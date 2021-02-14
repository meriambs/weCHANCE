import React, { useState } from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import { Formik , Field  } from 'formik';
import {
  Box,
  Button,
  Card,
  CardContent,
  CardHeader,
  Divider,
  Grid,
  TextField,
  makeStyles
} from '@material-ui/core';

const states = [
  {
    value: 'alabama',
    label: 'Alabama'
  },
  {
    value: 'new-york',
    label: 'New York'
  },
  {
    value: 'san-francisco',
    label: 'San Francisco'
  }
];

const useStyles = makeStyles(() => ({
  root: {}
}));

const ProfileDetails = ({ className, ...rest }) => {
  const classes = useStyles();
  const [values, setValues] = useState({
    SocieteName: 'maladaska',
    adress: 'Smith 1002 lh ',
    JobDescription: 'demo',
    JobRequirements: 'sfbteqdfn ',
    HowToApply: 'Alabangnwf ma',
    recruteurName: 'USsrbndA'
  });

  const handleChange = (event) => {
    setValues({
      ...values,
      [event.target.name]: event.target.value
    });
  };

  return (
    <form onSubmit={handleSubmit}
      autoComplete="off"
      noValidate
      className={clsx(classes.root, className)}
      {...rest}
    >
    onSubmit={async(values) => {
              const res = await axios.post('http://127.0.0.1:3003/profil',{...values})
                            console.log('res', res);

              {/* navigate('/login', { replace: true }) */}
              
            }}
      <Card>
        <CardHeader
          subheader="The information can be edited"
          title="Create Job Offer"
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
                fullWidth
                helperText="Please specify the first name"
                label="SocieteName"
                name="SocieteName"
                onChange={handleChange}
                required
                value={values.SocieteName}
                variant="outlined"
              />
            </Grid>
            <Grid
              item
              md={6}
              xs={12}
            >
              <TextField
                fullWidth
                label="adress"
                name="adress"
                onChange={handleChange}
                required
                value={values.adress}
                variant="outlined"
              />
            </Grid>
            <Grid
              item
              md={6}
              xs={12}
            >
              <TextField
                fullWidth
                label="JobDescription"
                name="JobDescription"
                onChange={handleChange}
                required
                value={values.JobDescription}
                variant="outlined"
              />
            </Grid>
            <Grid
              item
              md={6}
              xs={12}
            >
              <TextField
                fullWidth
                label="JobRequirements"
                name="JobRequirements"
                onChange={handleChange}
                type="number"
                value={values.JobRequirements}
                variant="outlined"
              />
            </Grid>
            <Grid
              item
              md={6}
              xs={12}
            >
              <TextField
                fullWidth
                label="HowToApply"
                name="HowToApply"
                onChange={handleChange}
                required
                value={values.HowToApply}
                variant="outlined"
              />
            </Grid>
            <Grid
              item
              md={6}
              xs={12}
            >
              <TextField
                fullWidth
                label="recruteurName"
                name="recruteurName"
                onChange={handleChange}
                required
                value={values.recruteurName}
                variant="outlined"
              >
              </TextField>
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
            variant="contained"
          >
            Save details
          </Button>
        </Box>
      </Card>
    </form>
  );
};

ProfileDetails.propTypes = {
  className: PropTypes.string
};

export default ProfileDetails;
