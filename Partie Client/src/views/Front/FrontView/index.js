import React from 'react';

import Page from 'src/components/Page';
import { Link as RouterLink, useNavigate } from 'react-router-dom';
import style from './style.css';
import FontPage from './FontPage';
import Button from "@material-ui/core/Button";


const welcome = () => {
   const navigate = useNavigate();
  const singin=()=>{
    navigate(`/login`, { replace: true });
          // console.log('id',id)
 }
   const singup=()=>{
    navigate(`/register`, { replace: true });
          // console.log('id',id)
 }

  return (
    <Page
    className="Bsection"
      title="Hire"
    >
    
    <section className="composcd">
    <container className="imgcontainer">
      <img src="/static/images/welcome.png"/>
      </container>
      <div className="textpart">
      <h4>We Have 20.000 great job offers <span>YOU</span> deserve !</h4>
        <h1>Largest Job Site In The World</h1>
        <h3>Let's Join Our <span>Community</span> </h3>
      </div>
      
    </section>
    <section  className="button">
      <Button className="buttonbt" onClick={singup}>Sing Up </Button>
      <Button  className="boutondudroit" onClick={singin}>Sing In</Button>
    </section>
    <section className="sectbasimtxt">
      <div className="txtimg">
        <img src="/static/images/logWelcome/SearchMillions.png" alt="Search Millions of Jobs"/>
        <h5>Millions of Job</h5>
      </div>
      <div className="txtimg">
        <img src="/static/images/logWelcome/easytomanage.png" alt="Easy To Manage Jobs"/>
        <h5>Easy to manage Job</h5>
      </div>
      <div className="txtimg">
        <img src="/static/images/logWelcome/searchexpert.png" alt="Search Expert Candidates"/>
        <h5>Expert Candidates</h5>
      </div>
    </section>
    <section className="enmpty">
 <div className="empty-phase">
 {/* ici l partie separant entre les partie sup et footer */}
 </div>
    </section>
    <FontPage/>
    </Page>
  );
};

export default welcome;
