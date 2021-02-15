import React, { useEffect } from 'react';
import { Link as RouterLink, useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
import {
  Avatar,
  Box,
  Button,
  Divider,
  Drawer,
  Hidden,
  List,
  Typography,
  makeStyles
} from '@material-ui/core';
import {
  AlertCircle as AlertCircleIcon,
  BarChart as BarChartIcon,
  Lock as LockIcon,
  Settings as SettingsIcon,
  ShoppingBag as ShoppingBagIcon,
  User as UserIcon,
  UserPlus as UserPlusIcon,
  Users as UsersIcon
} from 'react-feather';
import NavItem from './NavItem';

import  {useSelector} from 'react-redux';
//////////////////////



const items = [
  {
    href: '/app/dashboard',
    icon: BarChartIcon,
    title: 'Dashboard'
    
  },
   {
    href: '/app/creatJobOffer',
    icon: BarChartIcon,
    title: 'AddJob',
    //  isRecruiter:true
    
  },
   {
     href: '/app/customers',
     icon: UsersIcon,
     title: 'Candidates',
     isRecruiter:true
   },
  {
    href: '/app/products',
    icon: ShoppingBagIcon,
    title: 'Job Offer'
    
  },
  {
    href: '/app/account',
    icon: UserIcon,
    title: 'Account'
 
  },
  {
    href: '/app/settings',
    icon: SettingsIcon,
    title: 'Settings'
    
  },
  {
    href: '/login',
    icon: LockIcon,
    title: 'Login'
   
  },
  {
    href: '/register',
    icon: UserPlusIcon,
    title: 'Register'
  
  },
  {
    href: '/404',
    icon: AlertCircleIcon,
    title: 'Error',
    
  }
];

const useStyles = makeStyles(() => ({
  mobileDrawer: {
    width: 256
  },
  desktopDrawer: {
    width: 256,
    top: 64,
    height: 'calc(100% - 64px)'
  },
  avatar: {
    cursor: 'pointer',
    width: 64,
    height: 64
  }
}));


const NavBar = ({ onMobileClose, openMobile }) => {
  const user=useSelector((state =>state.user))

//indication du post 
let jobTitle="" ;
 if(user.isRecruiter == true){
          jobTitle= 'Recuted'
        }else {
          jobTitle = 'Candidate'
        }
  const classes = useStyles();
  const location = useLocation();
  useEffect(() => {
    if (openMobile && onMobileClose) {
      onMobileClose();
    }
  }, [location.pathname]);

  const content = (

    <Box
      height="100%"
      display="flex"
      flexDirection="column"
    >
   
      <Box
        alignItems="center"
        display="flex"
        flexDirection="column"
        p={2}
      >
       <Avatar
          className={classes.avatar}
          component={RouterLink}
          src='/static/images/avatars/avatar_6.png'
          to="/app/account"
        />
        <Typography
          className={classes.name}
          color="textPrimary"
          variant="h5"
       
        >
          {user.name}
        </Typography>
        <Typography
          color="textSecondary"
          variant="body2"
        >
          {jobTitle}
        </Typography>
      </Box>
      <Divider />
      <Box p={2}>
        <List>
          {items.filter(e=>
            !(e.isRecruiter && !user.isRecruiter)
          )
          .map((item) => (
            <NavItem
              href={item.href}
              key={item.title}
              title={item.title}
              icon={item.icon}
            />
          ))}
        </List>
      </Box>
      <Box flexGrow={1} />
      <Box
        p={2}
        m={2}
        bgcolor="background.dark"
      >
        <Typography
          align="center"
          gutterBottom
          variant="h4"
        >
          Need more?
        </Typography>
        <Typography
          align="center"
          variant="body2"
        >
          Upgrade to PRO version and access 20 more screens
        </Typography>
        <Box
          display="flex"
          justifyContent="center"
          mt={2}
        >
          <Button
            color="primary"
            component="a"
            href="https://react-material-kit.devias.io"
            variant="contained"
          >
            See PRO version
          </Button>
        </Box>
      </Box>
    </Box>
  );

  return (
    <>
      <Hidden lgUp>
        <Drawer
          anchor="left"
          classes={{ paper: classes.mobileDrawer }}
          onClose={onMobileClose}
          open={openMobile}
          variant="temporary"
        >
          {content}
        </Drawer>
      </Hidden>
      <Hidden mdDown>
        <Drawer
          anchor="left"
          classes={{ paper: classes.desktopDrawer }}
          open
          variant="persistent"
        >
          {content}
        </Drawer>
      </Hidden>
    </>
  );
};

NavBar.propTypes = {
  onMobileClose: PropTypes.func,
  openMobile: PropTypes.bool
};

NavBar.defaultProps = {
  onMobileClose: () => {},
  openMobile: false
};

export default NavBar;
