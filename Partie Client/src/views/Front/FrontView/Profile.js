// import React from 'react';
// import PropTypes from 'prop-types';
// import clsx from 'clsx';
// import moment from 'moment';
// import {
//   Avatar,
//   Box,
//   Button,
//   Card,
//   CardActions,
//   CardContent,
//   Divider,
//   Typography,
//   makeStyles
// } from '@material-ui/core';

// const user = {
//   avatar: '/static/images/avatars/avatar_6.png',
//   city: 'Los Angeles',
//   country: 'USA',
//   jobTitle: 'Senior Developer',
//   name: 'Katarina Smith',
//   timezone: 'GTM-7'
// };

// const useStyles = makeStyles(() => ({
//   root: {},
//   avatar: {
//     height: 100,
//     width: 100
//   }
// }));

// const Profile = ({ className, ...rest }) => {
//   const classes = useStyles();

//   return (
//     <Card
//       className={clsx(classes.root, className)}
//       {...rest}
//     >
//       <CardContent>
//         <Box
//           alignItems="center"
//           display="flex"
//           flexDirection="column"
//         >
//           <Avatar
//             className={classes.avatar}
//             src={user.avatar}
//           />
//           <Typography
//             color="textPrimary"
//             gutterBottom
//             variant="h3"
//           >
//             {user.name}
//           </Typography>
//           <Typography
//             color="textSecondary"
//             variant="body1"
//           >
//             {`${user.city} ${user.country}`}
//           </Typography>
//           <Typography
//             className={classes.dateText}
//             color="textSecondary"
//             variant="body1"
//           >
//             {`${moment().format('hh:mm A')} ${user.timezone}`}
//           </Typography>
//         </Box>
//       </CardContent>
//       <Divider />
//       <CardActions>
//         <Button
//           color="primary"
//           fullWidth
//           variant="text"
//         >
//           Upload picture
//         </Button>
//       </CardActions>
//     </Card>
//   );
// };

// Profile.propTypes = {
//   className: PropTypes.string
// };

// export default Profile;

import React from 'react';
import { Theme, makeStyles, createStyles } from '@material-ui/core/styles';
import ButtonBase from '@material-ui/core/ButtonBase';
import Typography from '@material-ui/core/Typography';

const image = [
  {
    url: 'https://cdn.searchenginejournal.com/wp-content/uploads/2019/10/top-10-next-generation-cms-features-to-maximize-traffic-revenue.png/static/images/grid-list/breakfast.jpg',
    title: 'Sing UP',
    width: '100%',
  },
 
];

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
      flexWrap: 'wrap',
      minWidth: 300,
      width: '100%',
    },
    image: {
    // position: 'relative',
       height: 200,
      [theme.breakpoints.down('xs')]: {
        width: '100% !important', // Overrides inline-style
        height: 100,
      },
      '&:hover, &$focusVisible': {
        zIndex: 1,
        '& $imageBackdrop': {
          opacity: 0.15,
        },
        '& $imageMarked': {
          opacity: 0,
        },
        '& $imageTitle': {
          border: '4px solid currentColor',
        },
      },
    },
    focusVisible: {},
    imageButton: {
      position: 'absolute',
      left: 0,
      right: 0,
      top: 0,
      bottom: 0,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: theme.palette.common.white,
    },
    imageSrc: {
    
      left: 0,
      right: 0,
      top: 0,
      bottom: 0,
      backgroundSize: 'cover',
      backgroundPosition: 'center 40%',
    },
    imageBackdrop: {
      position: 'absolute',
      left: 0,
      right: 0,
      top: 0,
      bottom: 0,
      backgroundColor: theme.palette.common.black,
      opacity: 0.4,
      transition: theme.transitions.create('opacity'),
    },
    imageTitle: {
      position: 'relative',
      padding: `${theme.spacing(2)}px ${theme.spacing(4)}px ${theme.spacing(1) + 6}px`,
    },
    imageMarked: {
      height: 3,
      width: 18,
      backgroundColor: theme.palette.common.white,
      position: 'absolute',
      bottom: -2,
      left: 'calc(50% - 9px)',
      transition: theme.transitions.create('opacity'),
    },
  }),
);

export default function ButtonBases() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
    
        
    </div>
  );
}
