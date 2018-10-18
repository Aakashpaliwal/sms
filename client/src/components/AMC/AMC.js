import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import './AMC.css';
class AMC extends Component {
  
    constructor(props)
    {
        super(props)
        this.state = {
            customer_id: "",
            companylistdata : [],
            sitelistdata : [],
            equipmentlistdata : []

         
           };

    }
    componentWillMount ()
    {
      this.handleClick();
    //   this.supervisorclick();
    }
    // componentDidMount()
    // {
    //   this.sitechange();
    // }
    // sitechange() {
    //   fetch('list/siteoncompany')
    //   .then((res) => {
    //     res.json().then((resp) => { 
    //       console.log(resp.sitedata)
    //       this.setState({ sitelistdata:resp.sitedata})
    //       // this.parseJSON(this.state)
    //     })
    //   }
    // )
    // }
    
    siteclick = e =>  
    {
      e.preventDefault();
      console.log('hi');
      // console.log(this.state.customer_id);
      // this.setState ({
        
      //     customer_id: e.target.value
     
      // //  customer_id : ""
      // })
      console.log('hi');
      console.log(this.state.customer_id);
      // console.log(this.state.value);
      const meet = this.state.customer_id;
      // console.log(this);
      fetch('list/siteoncompany?company_id='+'${meet}',{
        method : 'GET',
        headers : {
          "Content-Type" : "application/json"
      }
      })
      .then((res) => {
        res.json().then((resp) => { 
          console.log(resp.sitedata)
          this.setState({ sitelistdata:resp.sitedata})
          // this.parseJSON(this.state)
        })
      }
    )

    }
    handleClick () {
      fetch('list/companylist')
        .then((res) => {
          res.json().then((resp) => { 
            console.log(resp.companydata)
            this.setState({ companylistdata:resp.companydata})
            // this.parseJSON(this.state)
          })
        }
      )
    //   fetch('list/siteoncompany')
    //   .then((res) => {
    //     res.json().then((resp) => { 
    //       console.log(resp.sitedata)
    //       this.setState({ sitelistdata:resp.sitedata})
    //       // this.parseJSON(this.state)
    //     })
    //   }
    // )
    
    fetch('myequipment/view')
    .then((res) => {
      res.json().then((resp) => { 
        console.log(resp.myequipmentdata)
        this.setState({ equipmentlistdata:resp.myequipmentdata})
        // this.parseJSON(this.state)
      })
    }
  )
      }
    
      change  = e => {
        this.setState ({
          [e.target.name]: e.target.value
        });
      };
      getWebsite = () =>
      {
          fetch('/').then(console.log(this.state));
      }
      onSubmit = e =>
      {
          e.preventDefault();
          console.log(this.state);
          this.setState ({
           dummy : ""
          })
          fetch('amc/add',{

            method : "POST",
            headers : {
                "Content-Type" : "application/json"
            },
            body: JSON.stringify(this.state)
          })
           //   .then(console.log(this.state));
        .then(function(response){ 
            return response.json();})
        .then(function(json){
             if(json.success===true){
            //   console.log(json);
            alert("your data has been submitted");
        }
        else{
          console.log(json);
      }
    })
      };
  render() {
    return (
        <div className="skin-blue fixed-layout">
        <div className="page-wrapper">

             <div className="container-fluid">
               
               <div className="row page-titles">
                   <div className="col-md-5 align-self-center">
                       {/* <h4 className="text-themecolor">Forms</h4> */}
                       <nav aria-label="breadcrumb">
                            <ol class="breadcrumb">
                                <li className="breadcrumb-item"><Link to="/">Home</Link></li>
                                <li className="breadcrumb-item active" aria-current="page">Add AMC</li>
                            </ol>
                            </nav>
                   </div>
                  
               </div>


            </div>

    {/*Form content begin */}
   
<div className = "product-form-upper">
    <div className = "container">
    <div className = "below-custom-form">
        <div className = "row">
           <div className = "col-lg-12 col-md-12 col-sm-12 col-xs-12">
                   <h3>Add AMC</h3>
           </div>
        </div>
        <form className="custom-content-form" autoComplete = 'no'>
  <div class="form-row">
  <div class="form-group col-md-6">
    <label for="inputCategory">Enter company list</label>
    <select className="form-control" name="customer_id" value={this.state.customer_id} onChange={e => this.siteclick(e)} onClick={(e) => this.setState({customer_id: e.target.value})}>
    <option>Choose ....</option>
    {
              this.state.companylistdata ?
              this.state.companylistdata.map(function(item, id) {
                return(
                    
        <option key ={id} value={item.customer_id}>{item.company}</option>
      )
              }
      )
              :
              <span>Data is loading....</span>
            }

    </select>
    </div>

     <div class="form-group col-md-6">
     <label for="inputCategory">Enter site list</label>
    <select className="form-control">
    {
              this.state.sitelistdata ?
              this.state.sitelistdata.map(function(item, id) {
                return(
                    
        <option key ={id}>{item.name}</option>
      )
              }
      )
              :
              <span>Data is loading....</span>
            }

    </select>
    </div>

     <div class="form-group col-md-6">
     <label for="inputCategory">Enter equipment list</label>
    <select className="form-control" value={this.state.myequipment_id} name="myequipment_id" onChange = {e => this.change(e)}>
    {
              this.state.equipmentlistdata ?
              this.state.equipmentlistdata.map(function(item, id) {
                return(
                    
        <option key ={id} value={item.equipment_id}>{item.name}</option>
      )
              }
      )
              :
              <span>Data is loading....</span>
            }

    </select>
    </div>

    <div class="form-group col-md-6">
    <label for="inputCategory">Enter frequency</label>
     <input type="text" className="form-control" placeholder="John Doe" name="dummy" value = {this.state.dummy} onChange = {e => this.change(e)} />
    </div>
  
    <div class="form-group col-md-6">
    <label for="inputCategory">Enter price</label>
     <input type="text" className="form-control" placeholder="John Doe" name="dummy" value = {this.state.dummy} onChange = {e => this.change(e)} />
    </div>

    <div class="form-group col-md-6">
    <label for="inputCategory">Enter start date</label>
    <input type="text" className="form-control" name="sd" value={this.state.sd} onChange = {e => this.change(e)} placeholder="YYYY-MM-DD" required pattern="([0-9]{4}-(0[1-9]|1[012])-(0[1-9]|1[0-9]|2[0-9]|3[01]))" title="Enter a date in this format YYYY/MM/DD"/>
    </div>
  </div>
 
  <button class="btn btn-primary" onClick = {e => this.onSubmit(e)}>Submit</button>
</form>
    </div>
    </div>
</div>






        </div>
        </div>

    )
  }
}
export default AMC;