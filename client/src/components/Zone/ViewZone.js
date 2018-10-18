import React, { Component } from 'react';
import './Zone.css';
import {Link} from 'react-router-dom';
class ViewZone extends Component {
  constructor () {
    super() 
    this.state = {
      userdata : []
    }
}
componentWillMount ()
{
  this.handleClick();
}
handleClick () {
  fetch('zone/view')
    .then((res) => {
      res.json().then((resp) => { 
        console.log(resp.zonedata)
        this.setState({ userdata:resp.zonedata})
        // this.parseJSON(this.state)
      })
    }
  
  )
  }
    render() {
        return (
            <React.Fragment>
            <div>
            <div className="skin-blue fixed-layout">
        <div className="page-wrapper">

             <div className="container-fluid">
               
               <div className="row page-titles">
                   <div className="col-md-5 align-self-center">
                       {/* <h4 className="text-themecolor">Forms</h4> */}
                       <nav aria-label="breadcrumb">
                            <ol class="breadcrumb">
                                <li className="breadcrumb-item"><Link to="/">Home</Link></li>
                                <li className="breadcrumb-item active" aria-current="page">View Zone</li>
                            </ol>
                            </nav>
                   </div>
                  
               </div>


            </div>
           <div className="custom-table-here">
              <div className="container">
                <div className="row">
                <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                <table className="table table-hover table-bordered ">
      <thead className="thead-dark">
        <tr>
          <th scope="col">Name</th>
          <th scope="col">Pin</th>
        </tr>
      </thead>
      <tbody>
      {
              this.state.userdata ?
              this.state.userdata.map(function(item, id) {
                return(
                    
        <tr key ={id}>
          <th scope="row"> {item.name}</th>
          <td>{item.pin}</td>
        </tr>
      )
              }
      )
              :
              <span>Data is loading....</span>
            }
      </tbody>
    </table>
                </div>
                </div>
              </div>  
            
           </div>
           </div>
           </div>
            </div>
            </React.Fragment>
        );
    }
}
export default ViewZone;