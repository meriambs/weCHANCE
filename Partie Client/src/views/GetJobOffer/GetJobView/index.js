
import React, { useEffect, useState } from 'react';

// import Button from '@material-ui/core/Button';
import Page from 'src/components/Page';
//  import GetDetails from './GetDetails';
 import axios from 'axios';
//  import index from '../../JobOffer/ProductListView/ProductCard'
// import {useParams} from 'react-router-dom'
import { Link as RouterLink,   useParams,useNavigate } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';


import PropTypes from 'prop-types';
import clsx from 'clsx';
// import moment from 'moment';
import {
  
  Avatar,
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  Divider,
  Typography,
  
} from '@material-ui/core';
import moment from 'moment';
const styles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    margin: 'auto',
    marginBottom: '16px',
    cursor: 'pointer',
    marginTop: '16px',
  },
  image: {
    width: 128,
    height: 128,
  },
  img: {
    margin: 'auto',
    display: 'block',
    maxWidth: '100%',
    maxHeight: '100%',
  },
  title: {
    color: theme.palette.primary.main,
    fontFamily: 'Roboto'
  }
}));

const GetJobOffer = ({ className, ...rest }) => {
     const classes = styles();
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
    navigate('/app/postuler', { replace: true })
          // console.log('id',id)
 }
  return (
     <div className={classes.root}>
      <Grid container>
 
      <Grid item xs={12} sm={6} container>
      <Paper className={classes.paper} onClick>
        <Grid container spacing={2}>
          <Grid item>
          </Grid>
          <Grid item xs={12} sm container>
            <Grid item xs container direction="column" spacing={2}>
              <Grid item xs>
                <Typography classes={{root: classes.id}} gutterBottom variant="subtitle1">
                  {jobOffer.SocieteName}
                  {jobOffer.JobDescription}
                </Typography>
                <Typography variant="body2" gutterBottom>
                    {jobOffer.adress}
                </Typography>
              </Grid>
              <Grid item>
             
                <Typography variant="body2" style={{ cursor: 'pointer' }}>
                  {moment(jobOffer.date).format('MMMM Do YYYY')}
                </Typography>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Paper>
      </Grid>
      <Grid item xs={12} sm={3} container></Grid>
      </Grid>
      
      <Button variant="contained" color="primary" disableElevation onClick={handle}>
  Disable elevation
</Button>

    </div>
  );
};

GetJobOffer.propTypes = {
  className: GetJobOffer.string
};

export default GetJobOffer;