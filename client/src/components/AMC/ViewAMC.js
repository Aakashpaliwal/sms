import React, { Component } from 'react';
import './AMC';
import {Link} from 'react-router-dom';
class ViewAMC extends Component {
    constructor () {
        super() 
        this.state = {
          userdata : []
        }
    }
    componentDidMount ()
    {
      this.handleClick();
    }
    handleClick () {
      fetch('amc/view')
        .then((res) => {
          res.json().then((resp) => { 
            console.log(resp.amcdata)
            this.setState({ userdata:resp.amcdata})
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
                           <nav aria-label="breadcrumb">
                                <ol class="breadcrumb">
                                    <li className="breadcrumb-item"><Link to="/">Home</Link></li>
                                    <li className="breadcrumb-item active" aria-current="page">View AMC</li>
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
          <th scope="col">Dummy</th>
        </tr>
      </thead>
      <tbody>
      {
              this.state.userdata ?
              this.state.userdata.map(function(item, id) {
                return(
                    
        <tr key = {id}>
          <th scope="row"> {item.dummy}</th>
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

export default ViewAMC;