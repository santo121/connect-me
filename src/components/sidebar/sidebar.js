/* eslint-disable no-undef */
import { ProSidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';
import React from 'react'
import axios from 'axios';
import 'react-pro-sidebar/dist/css/styles.css';
import { useHistory } from 'react-router-dom';
import {FaHome,FaShoppingBag,FaArrowDown,FaArrowUp,FaSignOutAlt,FaQuestion} from 'react-icons/fa'
import {FiPackage,FiInfo} from 'react-icons/fi'
import {MdEmojiEvents,MdCampaign,MdQuestionAnswer,MdPendingActions,} from 'react-icons/md'
import {CgProfile,CgUserAdd} from 'react-icons/cg'
import {RiLockPasswordFill} from "react-icons/ri"
import {Url,isLoggin} from '../../GLOBAL/global';
import '../../style/sidebar-slider.scss';
import { AiOutlineClose } from "react-icons/ai";
import {BsFillKanbanFill } from "react-icons/bs";

var sessionstorage = require('sessionstorage');
export default function Sidebar()
{
  let history = useHistory();
 const [inboxCount,setInboxCount] =  React.useState();
 const [processCount,setprocessCount] = React.useState();
 const [pkgCount,setpkgCount] = React.useState();
 const [eveCount,seteveCount] = React.useState();
 const [campCount,setcampCount] = React.useState();

 async function logginornot()
    {
      const cust =  await isLoggin();
      // console.log("cust",cust);
      if(cust === null)
      {
        history.push('/login');
      }
      
  
    }

    async function getinboxCount()
    {
      const customer_id = sessionstorage.getItem("customerId");

      let formdata = new FormData();
     formdata.append("customer_id",customer_id);
    
     const token = sessionstorage.getItem("token");

     const headers ={
        'Content-Type': 'multipart/form-data',
        'Authorization': `Bearer ${token}`
      }

        await axios({
        method: 'post',
        url: Url+'getinboxcount',
        data: formdata,
        headers: headers
        })
        .then(function (response) {
            //handle success
            // console.log("success");
            // console.log("inbox count",response.data);
           setInboxCount(response.data.count);
            
        })
        .catch(function (response) {
            //handle error
            console.log(response);
        });


    }

    async function getDatas()
    {
      // console.log("second")

      const token = sessionstorage.getItem("token");
      const customer_id = sessionstorage.getItem("customerId");
        await axios.get(Url+'ordercount', { headers: { Authorization: `Bearer ${token}`,'Access-Control-Allow-Origin' : '*',
        'Access-Control-Allow-Methods': 'get' } ,params:{customer_id: customer_id} })
        .then(response => {
            // If request is good...
            // console.log(response.data);

            setprocessCount(response.data.Process_count);
            setpkgCount(response.data.notification.package);
            seteveCount(response.data.notification.event);
            setcampCount(response.data.notification.campaign);
            // setAlmessages(response.data.data);
            // setLength(allmessages.length)
        })
        .catch((error) => {
            console.log('error ' + error);
        });
    }
  
    React.useEffect(() => {
  
      logginornot();

      getinboxCount();
      getDatas();

    },[]);

    const cursor = document.querySelector('.pro-sidebar');
    const body = document.querySelector('.body-two')
    function home()
    {
      history.push('/');
      if(window.innerWidth<500){

       
      
        cursor.setAttribute("style", 'display:none;max-width: 100%;');
  
      }
    }

function logout()
{
    sessionstorage.clear();
      history.push('/login');
      history.go(0);
      if(window.innerWidth<500){

       
      
        cursor.setAttribute("style", 'display:none;max-width: 100%;');
  
      }
}



function orderpkg()
{
  history.push('/order/package');
  //this.props.history.push("/order/package");
  //history.go();
  
  if(window.innerWidth<500){

    cursor.setAttribute("style", 'display:none;max-width: 1%;');

  }
}

function orderEvent()
{
  history.push('/order/event')
  if(window.innerWidth<500){

       
      
    cursor.setAttribute("style", 'display:none;max-width: 1%;');
    

  }
}
  
function orderCamp()
{
  history.push('/order/campaign');
  if(window.innerWidth<500){

       
      
    cursor.setAttribute("style", 'display:none;max-width: 1%;');
    

  }
}

function reqPkg()
{
  history.push('/request/package');
  if(window.innerWidth<500){

       
      
    cursor.setAttribute("style", 'display:none;max-width: 1%;');
    

  }
}

function reqEvent()
{
  history.push('/request/event');
  if(window.innerWidth<500){

       
      
    cursor.setAttribute("style", 'display:none;max-width: 1%;');
    

  }
}

function msgSent()
{
  history.push('/message/Outbox');
  if(window.innerWidth<500){

       
      
    cursor.setAttribute("style", 'display:none;max-width: 1%;');
    

  }
}

function msgRecieve()
{
  history.push('/message/Inbox')

  if(window.innerWidth<500){

       
      
    cursor.setAttribute("style", 'display:none;max-width: 1%;');
    

  }
}
function dashScreen()
{
  history.push('/dashboard')

  if(window.innerWidth<500){

       
      
    cursor.setAttribute("style", 'display:none;max-width: 1%;');
    

  }
}
function profile()
{
  history.push('/profile')

  if(window.innerWidth<500){

       
      
    cursor.setAttribute("style", 'display:none;max-width: 1%;');
    

  }
}
function changePassword()
{
  history.push('/change_password')

  if(window.innerWidth<500){

       
      
    cursor.setAttribute("style", 'display:none;max-width: 1%;');
    

  }
}
function getPackages()
{
  history.push('/getPackages')

  if(window.innerWidth<500){

       
      
    cursor.setAttribute("style", 'display:none;max-width: 1%;');
    

  }
}
function getCampaigns()
{
  history.push('/getCampaigns')

  if(window.innerWidth<500){

       
      
    cursor.setAttribute("style", 'display:none;max-width: 1%;');
    

  }
}
function faq()
{
  history.push('/faq')

  if(window.innerWidth<500){

       
      
    cursor.setAttribute("style", 'display:none;max-width: 1%;');
    

  }
}

var clicks = 1;
   function onTapFun(){
    
     console.log('taped succesfuly')
    //  document.getElementsByClassName('pro-sidebar')
    // alert('sdddsds');
    const cursor = document.querySelector('.pro-sidebar');
    const body = document.querySelector('.body-two');
    // const body2 = document.querySelector('.dash-screen-sizess');
    
      cursor.setAttribute("style", 'display:none;');


    
      

   }

  return(
    <>
  
       
  <ProSidebar className='side-bar-size' style={{position:'fixed',top:0,left:0,}} >
     

     <Menu iconShape="round" style={{backgroundColor:'white',height:'100%'}} >
     <div className='nav-slide-icon'>
     <div className='icon-background-dash-cam-slid'>
<AiOutlineClose size={10} color='black' className='bsFillKanbanFill2 pointer cover-camera2' onClick={()=>onTapFun()}/>
</div>
      </div>
       <MenuItem>
       
       <div id="page-logo">
         <img src={require('../../../src/assets/images/cm-01.jpg')}  alt='header-logo-img' onClick={()=>home()} style={{width: '100%',borderRadius:'8px',height:'auto'}}/>
       </div>
       </MenuItem>
       <MenuItem icon={<FaHome/>} onClick={()=>dashScreen()
      
      
      }> Dashboard</MenuItem>
       {/* <MenuItem onClick={() => home()} icon={<FaHome/>}>Home</MenuItem> */}

         <SubMenu title="Active Orders"  icon={<FaShoppingBag/>} style={{backgroundColor:'white'}} className={(pkgCount!==0 || campCount !== 0 || eveCount !==0)?'processNoti':''} >
           <MenuItem icon={<FiPackage/>} onClick={() => orderpkg()}>Packages {pkgCount === 0 ? (<></>) : (<span className='inboxCount text-center' >{pkgCount}</span>)}</MenuItem>
           <MenuItem active={true} icon={<MdEmojiEvents/>} onClick={() => orderEvent()}>Events {eveCount === 0 ? (<></>) : (<span className='inboxCount text-center' >{eveCount}</span>)}</MenuItem>
           <MenuItem icon={<MdCampaign/>} onClick={() => orderCamp() }>Campaigns {campCount === 0 ? (<></>) : (<span className='inboxCount text-center' >{campCount}</span>)}</MenuItem>
         </SubMenu>

         <SubMenu title="Order Requests" icon={<MdPendingActions/>} style={{backgroundColor:'white'}}>
           <MenuItem icon={<FiPackage/>} onClick={() => reqPkg()}>Packages</MenuItem>
           <MenuItem icon={<MdEmojiEvents/>} onClick={() => reqEvent()}>Events </MenuItem>
         </SubMenu>

         <SubMenu icon={<MdQuestionAnswer/>} title="Messages"  >
           <MenuItem icon={<FaArrowDown/>} onClick={() => msgRecieve()}>Inbox {inboxCount === 0 ? (<></>) : (<span className='inboxCount text-center' >{inboxCount}</span>)} </MenuItem>
           <MenuItem icon={<FaArrowUp/>} onClick={() => msgSent()} >Sent items</MenuItem>
         
         </SubMenu>

         {/* <MenuItem icon={<FiInfo/>} onClick={() => history.push('/gene-enquiry')}>General Enquiry </MenuItem> */}

        
         <MenuItem icon={<CgUserAdd/>} onClick={()=>profile()} style={{backgroundColor:'white'}}>Change Profile</MenuItem>
           
         
         <MenuItem icon={<RiLockPasswordFill/>} onClick={()=>changePassword()} style={{backgroundColor:'white'}}>Change Password </MenuItem>

         <MenuItem icon={<FiPackage/>} onClick={()=>getPackages()} style={{backgroundColor:'white'}}> Packages</MenuItem>
         <MenuItem icon={<MdCampaign/>} onClick={()=>getCampaigns()} style={{backgroundColor:'white'}}>Campaigns</MenuItem>
         <MenuItem icon={<FaQuestion/>} onClick={()=>faq()} style={{backgroundColor:'white'}}>FAQ</MenuItem>

         <MenuItem icon={<FaSignOutAlt/>} onClick={() => logout()} style={{backgroundColor:'white'}}>Logout </MenuItem>
       
     </Menu>
   </ProSidebar>
         
       
    </>

  )

 

 
}

