import  React, {Component} from 'react';
import axios from 'axios';
const api = axios.create({
    baseURL:`hhthost://localhost:3333/members`
})

class Member extends Component{
    state ={
        members: []
    }
    constructor(){
        super();
        api.get('/').then(res => {
            console.log(res.data)
            this.setState({members:res.data})
        })
    }
    render(){
        return(
         <div>
            {this.state.members.map(members => <h2 key={members.id}>{members.real_name}{members.tz}{members.start_time}{members.end_time}</h2>)}
         </div>
        );
    }
}
export default Member;