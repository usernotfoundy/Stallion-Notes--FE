/* eslint-disable react/prop-types */
import {Typography } from "@mui/material";

function UserGreeting(props){

    return(
        // eslint-disable-next-line react/prop-types
        props.isLoggedIn ? <Typography variant="h5" sx={{textAlign:'center', my:'44px', color:'#698152',fontWeight:'medium'}}>
        Log in to <span style={{
          color:"#f1f1f1",
          background: "#698152",
          paddingLeft: "10px",
          paddingRight: "10px",
          borderRadius:"5px",
        }}>Stallion Notes</span>
      </Typography>
        : <Typography variant="h5" sx={{textAlign:'center', my:'44px', color:'#698152'}}>
        Register with <span style={{
          color:"#f1f1f1",
          background: "#698152",
          paddingLeft: "10px",
          paddingRight: "10px",
          borderRadius:"5px",
        }}>Stallion Notes</span>
      </Typography>
    )
}

export default UserGreeting