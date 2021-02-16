import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import ButtonBase from '@material-ui/core/ButtonBase';
import Page from 'src/components/Page';
//  import GetDetails from './GetDetails';
 import axios from 'axios';
 import index from '../../JobOffer/ProductListView/ProductCard'
import {useParams} from 'react-router-dom'

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.dark,
    minHeight: '100%',
    paddingBottom: theme.spacing(3),
    paddingTop: theme.spacing(3)
  },
  productCard: {
    height: '100%'
  }
}));

const GetJobOffer = () => {
  const classes = useStyles();
 const {id}=useParams();
  console.log('id',id)
  const [offer,setOffer] = useState();
    useEffect(() => {
      const fetchGetOff = async () =>{
        const res = await axios.get(`http://localhost:3003/post/${id}`)
        setOffer(res.data[0]);
        console.log('res','data')
      
       }
       fetchGetOff();
     }, [])
  return (
    <div className={classes.root}>
      <h1>hoo</h1>
      {offer.adress}
      {offer.JobRequirements}
    </div>
    
  );
}


export default GetJobOffer;
