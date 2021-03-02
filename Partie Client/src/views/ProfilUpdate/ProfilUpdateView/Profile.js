import React , {useState} from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import moment from 'moment';
import axios from 'axios'
import {
  Avatar,
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  Divider,
  Typography,
  makeStyles
} from '@material-ui/core';
import { setuser } from "../../../redux/action";
import { useDispatch } from "react-redux";
import  {useSelector} from 'react-redux';

// const user = {
//   avatar: '/static/images/avatars/avatar_6.png',
//   city: 'Los Angeles',
//   country: 'USA',
//   jobTitle: 'Senior Developer',
//   name: 'Katarina Smith',
//   timezone: 'GTM-7'
// };

const useStyles = makeStyles(() => ({
  root: {},
  avatar: {
    height: 100,
    width: 100
  }
}));

const Profile = ({ className, ...rest }) => {
  const dispatch = useDispatch();
  const classes = useStyles();

  const user=useSelector((state =>state.user));
   const [formData, setFormData] = useState('');
  
  const [info, setInfo] = useState({
    image: '',
    name: '',
  });
  const [progressPercent, setProgressPercent] = useState(0);
  const [error, setError] = useState({
    found: false,
    message: '',
  });
  /** end states */

  // Upload image
  const upload = ({ target: { files } }) => {
    let data = new FormData();
    data.append('data', files[0]);
    data.append('name', files[0].name);
    setFormData(data);
  };

  // Submit Form
  const handleSubmit = async (e) => {
    e.preventDefault();
   const token = localStorage.getItem('token');
    const options = {
     
 headers: {"x-auth-token": token ,'Content-Type': 'multipart'},
    
    };
    
       const res = await axios.post(`http://localhost:3003/users/photo`,formData,options);
       const dis = await axios.get('http://localhost:3003/users', {
        headers: {"x-auth-token": token}
    }
    )
    dispatch(setuser(dis.data[0]));
      }

  return (
    <Card
      className={clsx(classes.root, className)}
      {...rest}
    >
      <CardContent>
        {/* <Box
          alignItems="center"
          display="flex"
          flexDirection="column"
        >
          <Avatar
            className={classes.avatar}
            src={user.avatar}
          />
          <Typography
            color="textPrimary"
            gutterBottom
            variant="h3"
          >
            {user.name}
          </Typography> */}
          {/* <Typography
            color="textSecondary"
            variant="body1"
          >
            {`${user.city} ${user.country}`}
          </Typography> */}
          {/* <Typography
            className={classes.dateText}
            color="textSecondary"
            variant="body1"
          >
            {`${moment().format('hh:mm A')} `}
          </Typography>
        </Box>
      </CardContent>
      <Divider /> */}
      {/* <CardActions>
        {/* <Button
          color="primary"
          fullWidth
          variant="text"
        > */}
          {/* Upload picture */}
        {/* </Button> 
      </CardActions> */}
         <div
      // style={{ width: '100vw', height: '100vh' }}
      // className='d-flex justify-content-center align-items-center flex-column'
    >
      {error.found && (
        <div
          className='alert alert-danger'
          role='alert'
          style={{ width: '150px'}}
        >
          {error.message}
        </div>
      )}

      <form onSubmit={handleSubmit} >
       
        <div  style={{position:'center'}}>
         <img
        className='mt-3'
        src={`http://localhost:3003/${info.image}`}
        alt={`${info.name}`}
        style={{ width: '150px',borderRadius:'60%' ,display: 'block',marginLeft: 'auto',marginRight:' auto'}}
      />
          <input
            type='file'
            
            id='inputGroupFile04'
            aria-describedby='inputGroupFileAddon04'
            onChange={upload}
          />
          
        </div>
        <button type='submit' className='btn btn-primary w-100'>
          Submit
        </button>
      </form>
     
    </div>
        <Box
          alignItems="center"
          display="flex"
          flexDirection="column"
        >
          {/* <Avatar
            className={classes.avatar}
            src={user.avatar}
          /> */}
          <Typography
            color="textPrimary"
            gutterBottom
            variant="h3"
          >
            {user.name}
          </Typography>
          {/* <Typography
            color="textSecondary"
            variant="body1"
          >
            {`${user.city} ${user.country}`}
          </Typography> */}
          <Typography
            className={classes.dateText}
            color="textSecondary"
            variant="body1"
          >
            {`${moment().format('hh:mm A')} `}
          </Typography>
        </Box>
      </CardContent>
      <Divider />
    </Card>

  );
};

Profile.propTypes = {
  className: PropTypes.string
};

export default Profile;


// import React, { useState } from 'react';
// import axios from 'axios';
// function Photo() {
//   /** start states */
//   const [formData, setFormData] = useState('');
//   const [info, setInfo] = useState({
//     image: '',
//     name: '',
//   });
//   const [progressPercent, setProgressPercent] = useState(0);
//   const [error, setError] = useState({
//     found: false,
//     message: '',
//   });
//   /** end states */

//   // Upload image
//   const upload = ({ target: { files } }) => {
//     let data = new FormData();
//     data.append('categoryImage', files[0]);
//     data.append('name', files[0].name);
//     setFormData(data);
//   };

//   // Submit Form
//   const handleSubmit = (e) => {
//     e.preventDefault();
//     setInfo({
//       image: '',
//       name: '',
//     });
//     setProgressPercent(0);
//     const options = {
//       onUploadProgress: (progressEvent) => {
//         const { loaded, total } = progressEvent;
//         let percent = Math.floor((loaded * 100) / total);
//         console.log(`${loaded}kb of ${total}kb | ${percent}%`);
//         setProgressPercent(percent);
//       },
//     };
//     axios
//       .post('http://localhost:3003/api/category', formData, options)
//       .then((res) => {
//         console.log(res.data);
//         setTimeout(() => {
//           setInfo(res.data.category);
//           setProgressPercent(0);
//         }, 1000);
//       })
//       .catch((err) => {
//         console.log(err.response);
//         setError({
//           found: true,
//           message: err.response.data.errors,
//         });
//         setTimeout(() => {
//           setError({
//             found: false,
//             message: '',
//           });
//           setProgressPercent(0);
//         }, 3000);
//       });
    
//   };

//   return (
//     <div
//       style={{ width: '100vw', height: '100vh' }}
//       className='d-flex justify-content-center align-items-center flex-column'
//     >
//       {error.found && (
//         <div
//           className='alert alert-danger'
//           role='alert'
//           style={{ width: '359px' }}
//         >
//           {error.message}
//         </div>
//       )}

//       <form onSubmit={handleSubmit} style={{ width: '359px' }}>
//         <div className='progress mb-3 w-100'>
//           <div
//             className='progress-bar'
//             role='progressbar'
//             style={{ width: `${progressPercent}%` }}
//             aria-valuenow={progressPercent}
//             aria-valuemin={0}
//             aria-valuemax={100}
//           >
//             {progressPercent}
//           </div>
//         </div>
//         <div className='custom-file mb-3'>
//           <input
//             type='file'
//             className='custom-file-input'
//             id='inputGroupFile04'
//             aria-describedby='inputGroupFileAddon04'
//             onChange={upload}
//           />
//           <label className='custom-file-label' htmlFor='inputGroupFile04'>
//             Choose file
//           </label>
//         </div>
//         <button type='submit' className='btn btn-primary w-100'>
//           Submit
//         </button>
//       </form>
//       <img
//         className='mt-3'
//         src={`http://localhost:3003/${info.image}`}
//         alt={`${info.name}`}
//         style={{ width: '359px' }}
//       />
//     </div>
//   );
// }

// export default Photo;
