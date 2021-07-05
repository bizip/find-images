import React from "react";
import classes from './ImageList.module.css'
import { Skeleton } from "@material-ui/lab";

const usersList=(props)=>{
const loading=props.data.loading;
return <div className={classes.layout}>
    {!loading && props.data.useImage.map((data,key)=>{
     return <img key={key} className={classes.img} src={data.url} alt="" />
    })}

  
    {loading && [1,2,3,4,5,6,7,9,10,11,12,13,14,15,16]
    .map(key=>{
    
      return <div key={key} >
        <div className={classes.img}>
          
          <Skeleton variant="rect" width={410} height={318}/>
        
   
      </div>
      
    </div>
   
    })}
    </div>

}
export default usersList;