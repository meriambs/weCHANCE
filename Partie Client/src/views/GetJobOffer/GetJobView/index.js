import React ,  { useState,useEffect } from 'react';
import {
  Container,
  Grid,
  makeStyles
} from '@material-ui/core';
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
  }
}));

const GetJobOffer = () => {
  const classes = useStyles();
 const {id}=useParams();
  console.log('id',id)
//  const [products,setProducts] = useState([]);
//   useEffect(() => {
//      const fetchGetOff = async () =>{
//        const res = await axios.get(`http://localhost:3003/product/${id}`)
//        setProducts(res.data);
//        console.log('res','data')
//        // setVideo(res.data.video);
//      }
//      fetchGetOff();
//    }, [])
  return (
    <Page
      className={classes.root}
      title="Account"
    >
      <Container maxWidth="lg">

   {/* {data.filter(cart =>cart.id === id).map((cart, index)=>{
     <div key={index}> */}
      
     {/* </div>
   })} */}
        {/* <Grid
          container
          spacing={3}
          
        >
          <Grid
            item
            lg={3}
            md={3}
            xs={12}
          >
          </Grid>
          <Grid
            item
            lg={6}
            md={6}
            xs={12}
          >
         
             {/* <GetDetails />  */}
          {/* </Grid>
                    <Grid
            item
            lg={3}
            md={3}
            xs={12}
          >
          </Grid> */}
{/* 
        </Grid> */} 
      </Container>
    </Page>
  );
};

export default GetJobOffer;
