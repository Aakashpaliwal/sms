import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import './Complaint.css';

class Complaint extends Component {
    constructor(props)
    {
        super(props)
        this.state = {
            userdata : [],
            dummy : ""
         
           };

    }
    componentDidMount ()
    {
      this.handleClick();
    }
    handleClick () {
      fetch('list/searchcompanylist?company=' +this.state.userdata[0])
        .then((res) => {
          res.json().then((resp) => { 
            console.log(resp.data)
            this.setState({ userdata:resp.data})
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
        //   if (
        //     this.state.blog_title === "" ||
        //     this.state.blog_img === "" ||
        //     this.state.blog_desc === ""
        //  ) {
        //     alert("Unable to contact because fields were left blank");
        //     }else {
        //         fetch(`/contact`,{
        //             method : "POST",
        //             headers : {
        //                 "Content-Type": "application/json; charset=utf-8"
        //             },
        //             body: JSON.stringify(this.state)
        //         }
        //         ).then(this.getWebsite);
        //       }

          this.setState ({
           dummy : ""
          })
          fetch('complaint/add',{

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
      
    //   fileSelectedHandler = e => {     
    //       e.preventDefault();
    //     let files = e.target.files;
    //     console.log('data',files[0]);
    //   }
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
                                <li className="breadcrumb-item active" aria-current="page">Add Complaint</li>
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
                   <h3>Add Complaint</h3>
           </div>
        </div>
        <form className="custom-content-form" autoComplete = 'no'>
  <div class="form-row">
    <div class="form-group col-md-6">
    <label for="inputCategory">Search Company</label>
    <input type="text" className="form-control" list="data" onChange = {e => this.change(e)} />

<datalist id="data">
    { this.state.userdata ?
              this.state.userdata.map(function(item, id) {
                return(
                
          <option key = {id}> {item.company}</option>
      )
              }
      )
              :
              <span>Data is loading....</span>
            }
            {/* <option>jsalkdjlksd</option>
            <option>jsalkdjlksd</option>
            <option>jsalkdjlksd</option>
            <option>jsalkdjlksd</option> */}
</datalist>
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

export default Complaint;