import React, { Component } from 'react';
import './Admin.css';
import {Link} from 'react-router-dom';
import axios from 'axios';
class ViewAdmin extends Component {
    constructor () {
        super() 
        this.state = {
          data : []
        }
    }
    componentDidMount ()
    {
      this.handleClick();
    }
    handleClick () {
      axios.get('admin/view')
      .then(response => {
        // response.json().then((resp) => { 
                // console.log(resp.admindata)
                // this.setState({ userdata:resp.admindata})
                // // this.parseJSON(this.state)
                console.log(response.data.admindata);
                const data = response.data.admindata;
                this.setState({ data })
              }) .catch(error => {
                console.log(error);
              })
      
     
      // fetch('admin/view')
      //   .then((res) => {
      //     res.json().then((resp) => { 
      //       console.log(resp.admindata)
      //       this.setState({ userdata:resp.admindata})
      //       // this.parseJSON(this.state)
      //     })
      //   }
      
      // )
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
                           <nav aria-label="breadcrumb">
                                <ol class="breadcrumb">
                                    <li className="breadcrumb-item"><Link to="/">Home</Link></li>
                                    <li className="breadcrumb-item active" aria-current="page">View Admin</li>
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
          <th scope="col">Full Name</th>
          <th scope="col">Admin Name</th>
        </tr>
      </thead>
      <tbody>
      {
              this.state.data ?
              this.state.data.map(function(item, id) {
                return(
                    
        <tr key = {id}>
          <th scope="row"> {item.full_name}</th>
          <td>{item.adminname}</td>
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

export default ViewAdmin;