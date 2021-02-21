import React from "react";
import {Button,Modal} from 'react-bootstrap';
import './App.css';
import TableDatePicker from './Date.js';
import Members from './Members.js';
class App extends React.Component{
  constructor(props){
    super(props);
    
    this.state={
      
      show:false,
      id: '',
      real_name: '',
      tz: '',
    };
  }
  
  componentWillReceiveProps(nextProps) {
    this.setState({
      id: nextProps.id,
        real_name: nextProps.real_name,
        tz:nextProps.tz,
    });
}

idHandler(e) {
    this.setState({ id: e.target.value });
}

real_nameHandler(e) {
    this.setState({ real_name: e.target.value });
}
tzHandler(e) {
  this.setState({ tz: e.target.value });
}
  handleModal(){
    this.setState({show:!this.state.show})
  }
  render(){
    return (
      
      <div>
        
       <Button  onClick={()=>{this.handleModal()}}>MEMBER 1</Button>
       <Modal show={this.state.show} onHide={()=>this.handleModal()}>
         <Modal.Header closeButton>Members</Modal.Header>
         <Modal.Body>
          <Members/>
         <p><span className="modal-lable">id:
         </span>
         
         <input value={this.state.id} placeholder="W012A3CDE" onChange={(e) => this.idHandler(e)} /></p>
         <p><span className="modal-lable">real_name:
         </span>
         <input value={this.state.real_name} placeholder="Egon Spengler" onChange={(e) => this.real_nameHandler(e)} /></p>
         <p><span className="modal-lable">tz:
         </span>
         <input value={this.state.tz} placeholder="America/Los_Angeles" onChange={(e) => this.tzHandler(e)} /></p>
         <p><span className="modal-lable">activity_periods:
         </span>
         </p>
         <TableDatePicker/>
         <br/>
         <TableDatePicker/>
         <br/>
         <TableDatePicker/>
         </Modal.Body>
         <Modal.Footer>
           <Button onClick={()=>{this.handleModal()}}>
             Close Modal
           </Button>
         </Modal.Footer>
       </Modal>
       <br/>
       <br/>
       <br/>

       <Button  onClick={()=>{this.handleModal()}}>MEMBER 2</Button>
       <Modal show={this.state.show} onHide={()=>this.handleModal()}>
         <Modal.Header closeButton>Members</Modal.Header>
         <Modal.Body>
          <Members/>
         <p><span className="modal-lable">id:
         </span>
         <input value={this.state.id} placeholder="W07QCRPA4" onChange={(e) => this.idHandler(e)} /></p>
         <p><span className="modal-lable">real_name:
         </span>
         <input value={this.state.real_name} placeholder="Glinda Southgood" onChange={(e) => this.real_nameHandler(e)} /></p>
         <p><span className="modal-lable">tz:
         </span>
         <input value={this.state.tz} placeholder="Asia/Kolkata" onChange={(e) => this.tzHandler(e)} /></p>
         <p><span className="modal-lable">activity_periods:
         </span>
         </p>
         <TableDatePicker/>
         <br/>
         <TableDatePicker/>
         <br/>
         <TableDatePicker/>
         </Modal.Body>
         <Modal.Footer>
           <Button onClick={()=>{this.handleModal()}}>
             Close Modal
           </Button>
         </Modal.Footer>
       </Modal>



       
      </div>

    );


  }
}


export default App;
