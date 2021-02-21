import React, {Component} from 'react';
import membersData from './db.json';
import './App.css';

var membersList =  membersData.members;

class  Members extends Component{
 render(){
     return(
         membersList.map((s) =>{
           return(
             <div>
                 <div>
                     <p>{s.id}</p>
                     <p>{s.real_name}</p>
                     <p>{s.tz}</p>
                     <p>{s.start_time}</p>
                     <p>{s.end_time}</p>
                 </div>
             </div>


           );

         })
     )
 }
}
export default Members;