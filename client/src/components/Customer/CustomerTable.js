import React, { Component } from 'react';
import './CustomerTable.css';
import {Link} from 'react-router-dom';
// import './dataTable';
class CustomerTable extends Component {
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
  fetch('customer/view')
    .then((res) => {
      res.json().then((resp) => { 
        console.log(resp.customerdata)
        this.setState({ userdata:resp.customerdata})
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
                                <li className="breadcrumb-item active" aria-current="page">View Customer</li>
                            </ol>
                            </nav>
                   </div>
                  
               </div>


            </div>
           <div className="custom-table-here">
              <div className="container">
                <div className="row">
                <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                {/* <table id="dtBasicExample" class="table table-striped table-bordered table-sm custom-table" cellspacing="0">
  <thead>
    <tr>
      <th class="th-sm">Name
        <i class="fa fa-sort float-right" aria-hidden="true"></i>
      </th>
      <th class="th-sm">Spoc
        <i class="fa fa-sort float-right" aria-hidden="true"></i>
      </th>
      <th class="th-sm">Email
        <i class="fa fa-sort float-right" aria-hidden="true"></i>
      </th>
      <th class="th-sm">Mobile Number
        <i class="fa fa-sort float-right" aria-hidden="true"></i>
      </th>
      <th class="th-sm">Address
        <i class="fa fa-sort float-right" aria-hidden="true"></i>
      </th>
      <th class="th-sm">status
        <i class="fa fa-sort float-right" aria-hidden="true"></i>
      </th>
    </tr>
  </thead>
  <tdiv>
    <tr>
      <td>Tiger Nixon</td>
      <td>System Architect</td>
      <td>Edinburgh</td>
      <td>61</td>
      <td>2011/04/25</td>
      <td className="custom-btn">
          <button type="button" className="btn btn-warning btn-sm"><i className="fa fa-pencil" aria-hidden="true"></i></button>
          <button type="button" className="btn btn-danger btn-sm"><i className="fa fa-times" aria-hidden="true"></i></button>
      </td>
    </tr>
    <tr>
      <td>Garrett Winters</td>
      <td>Accountant</td>
      <td>Tokyo</td>
      <td>63</td>
      <td>2011/07/25</td>
      <td className="custom-btn">
          <button type="button" className="btn btn-warning btn-sm"><i className="fa fa-pencil" aria-hidden="true"></i></button>
          <button type="button" className="btn btn-danger btn-sm"><i className="fa fa-times" aria-hidden="true"></i></button>
      </td>
    </tr>
    <tr>
      <td>Ashton Cox</td>
      <td>Junior Technical Author</td>
      <td>San Francisco</td>
      <td>66</td>
      <td>2009/01/12</td>
      <td className="custom-btn">
          <button type="button" className="btn btn-warning btn-sm"><i className="fa fa-pencil" aria-hidden="true"></i></button>
          <button type="button" className="btn btn-danger btn-sm"><i className="fa fa-times" aria-hidden="true"></i></button>
      </td>
    </tr>
    <tr>
      <td>Cedric Kelly</td>
      <td>Senior Javascript Developer</td>
      <td>Edinburgh</td>
      <td>22</td>
      <td>2012/03/29</td>
      <td className="custom-btn">
          <button type="button" className="btn btn-warning btn-sm"><i className="fa fa-pencil" aria-hidden="true"></i></button>
          <button type="button" className="btn btn-danger btn-sm"><i className="fa fa-times" aria-hidden="true"></i></button>
      </td>
    </tr>

  </tdiv>
  <tfoot>
    <tr>
    <th class="th-sm">Name
        <i class="fa fa-sort float-right" aria-hidden="true"></i>
      </th>
      <th class="th-sm">Spoc
        <i class="fa fa-sort float-right" aria-hidden="true"></i>
      </th>
      <th class="th-sm">Email
        <i class="fa fa-sort float-right" aria-hidden="true"></i>
      </th>
      <th class="th-sm">Mobile Number
        <i class="fa fa-sort float-right" aria-hidden="true"></i>
      </th>
      <th class="th-sm">Address
        <i class="fa fa-sort float-right" aria-hidden="true"></i>
      </th>
      <th class="th-sm">status
        <i class="fa fa-sort float-right" aria-hidden="true"></i>
      </th>
    </tr>
  </tfoot>
</table> */}

<table className="table table-hover table-bordered ">
  <thead className="thead-dark">
    <tr>
      <th scope="col">Name</th>
      <th scope="col">Email</th>
      <th scope="col">Spoc</th>
      <th scope="col">Contact Number</th>
    </tr>
  </thead>
  <tbody>
  {
          this.state.userdata ?
          this.state.userdata.map(function(item, id) {
            return ( 
               
    <tr key = {id}>
      <th scope="row"> {item.name}</th>
      <td>{item.email}</td>
      <td>{item.spoc}</td>
      <td>{item.mobile}</td>
    </tr>
            )}
                
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

export default CustomerTable;