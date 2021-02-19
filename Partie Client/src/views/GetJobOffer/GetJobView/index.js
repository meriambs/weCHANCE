import React, { useEffect, useState } from 'react';

import { Link as RouterLink,   useParams,useNavigate } from 'react-router-dom';
import Grid from '@material-ui/core/Grid';
import moment from 'moment';

import {
  Box,
  Button,
  Container,
  Card,
  CardContent,
  CardHeader,
  Typography,
  Divider,
 
  TextField,
  makeStyles
} from '@material-ui/core';
import Page from 'src/components/Page';
import axios from 'axios';

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.dark,
    height: '100%',
    paddingBottom: theme.spacing(3),
    paddingTop: theme.spacing(3)
  }
}));
const GetJobOffer = ({ className, ...rest }) => {
     const classes = useStyles();
     const navigate = useNavigate();
 const {id}=useParams();
  console.log('id',id)
  const [jobOffer,setjobOffer] = useState([]);
    useEffect(() => {
      const fetchGetOff = async () =>{
        const res = await axios.get(`http://localhost:3003/post/${id}`);
        setjobOffer(res.data[0]);
        console.log('res',res.data[0])
      
       }
       fetchGetOff();
     }, []);

      const handle=()=>{
    navigate(`/app/postuler/${id}`, { replace: true });
          // console.log('id',id)
 }
  return (
     <Page
      className={classes.root}
      title="Register"
    >
     <Container maxWidth="sm">
    
      <Card>
        <CardHeader
          subheader="The information mise par le recruteur"
          title="Lecture Job Offer"
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
              <Typography classes={{root: classes.id}} gutterBottom variant="subtitle1">
              <h4>Societe name</h4>
                  {jobOffer.SocieteName}
                  
                </Typography>
                
            </Grid>
            <Grid
              item
              md={6}
              xs={12}
            >
              <Typography classes={{root: classes.id}} gutterBottom variant="subtitle1">
              <h4>Societe Description</h4>
                  {jobOffer.JobDescription}
                </Typography>
                
            </Grid>
            <Grid
              item
              md={6}
              xs={12}
            >
               <Typography classes={{root: classes.id}} gutterBottom variant="subtitle1">
                 <h4> Job Requirements</h4>
                  {jobOffer.JobRequirements}
                  
                </Typography>
                
            </Grid>
              <Grid
              item
              md={6}
              xs={12}
            >
               <Typography classes={{root: classes.id}} gutterBottom variant="subtitle1">
                 <h4> Job Benefits</h4>
                  {jobOffer.JobBenefits}
                  
                </Typography>
                
            </Grid>
                <Grid
              item
              md={6}
              xs={12}
            >
               <Typography classes={{root: classes.id}} gutterBottom variant="subtitle1">
                 <h4> Job HowToApply</h4>
                  {jobOffer.HowToApply}
                  
                </Typography>
                
            </Grid>
            <Grid
              item
              md={6}
              xs={12}
            >
 <Typography classes={{root: classes.id}} gutterBottom variant="subtitle1">
                  <h4>Societe name</h4>
                  {jobOffer.JobDescription}
                </Typography>
                
            </Grid>
             <Grid
              item
              md={6}
              xs={12}
            >
               <Typography classes={{root: classes.id}} gutterBottom variant="subtitle1">
                 <h4>Recruteur Name </h4>
                  {jobOffer.recruteurName}
                  
                </Typography>
                
            </Grid>
            <Grid
              item
              md={6}
              xs={12}
            >
               <Typography classes={{root: classes.id}} gutterBottom variant="subtitle1">
                 <h4>Societe name</h4>
                  {jobOffer.SocieteName}
                  
                </Typography>
                
            </Grid>
            <Grid
              item
              md={6}
              xs={12}
            >
  <Typography variant="body2" style={{ cursor: 'pointer' }}>
  <h4>Date </h4>
                  {moment(jobOffer.date).format('MMMM Do YYYY')}
                </Typography>
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
        onClick={handle}
             fullWidth
            color="primary"
            variant="contained"
            
          >
            Postuler !!
          </Button>
        </Box>
       
      </Card>
   
    </Container>
    </Page>
  );
};


GetJobOffer.propTypes = {
  className: GetJobOffer.string
};

export default GetJobOffer;