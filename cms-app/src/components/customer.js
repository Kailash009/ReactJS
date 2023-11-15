import { useState } from "react";

var arr_cus=[];

export function ShowData(props){
  var arr_rows=[];
  for(var c in props.arrcus)
  {
    console.log(c);
    var row=(<tr>
      <th scope="row">{c.id}</th>
      <td>{c.name}</td>
      <td>{c.address}</td>
      <td>{c.mobileno}</td>
    </tr>);
  arr_rows.push(row);
  }
    return(
      <>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">ID</th>
            <th scope="col">Name</th>
            <th scope="col">Address</th>
            <th scope="col">MobileNo</th>
          </tr>
        </thead> 
        <tbody>
        {arr_rows}
        </tbody>
      </table>
      </>
    );
  }
export default function Customer(props){
    var[txtId,setTxtID]=useState(0);
    var[txtName,setTxtName]=useState('');
    var[txtAddress,setTxtAddress]=useState('');
    var[txtMobile,setTxtMobile]=useState('');
    var[arrcus,setArrCus]=useState();    
    function idOnChange(event)
    {
        setTxtID(event.target.value);
    }
    function nameOnChange(event)
    {
        setTxtName(event.target.value);
    }
    function addressOnChange(event)
    {
        setTxtAddress(event.target.value);
    }
    function mobileOnChange(event)
    {
        setTxtMobile(event.target.value);
    }
    function addOnClick()
    {
      let cus={id:txtId,cusname:txtName,address:txtAddress,mobileno:txtMobile};
      arr_cus.push(cus);
      alert('Customer Added SuccessFully!!');
    }
   function searchOnClick()
    {
      for(var c of arr_cus)
      {
         if(txtId==c.id)
         {
          setTxtName(c.cusname);
          setTxtAddress(c.address);
          setTxtMobile(c.mobileno);
         } 
      }
    }
    return(
        <>
        <h1>We are Creating a CMS Project</h1>
        <form>
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">
              Customer ID
            </label>
            <input
              type="text"
              className="form-control"
              id="txtId"
              placeholder="Enter Customer ID"
              value={txtId}
              onChange={idOnChange}
              
            />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">
              Customer Name
            </label>
            <input
              type="text"
              className="form-control"
              id="txtName"
              placeholder="Enter Customer Name"
              value={txtName}
              onChange={nameOnChange}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">
              Customer Address
            </label>
            <input
              type="text"
              className="form-control"
              id="txtAddress"
              placeholder="Enter Customer Address"
              value={txtAddress}
              onChange={addressOnChange}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">
              Customer Mobile No.
            </label>
            <input
              type="text"
              className="form-control"
              id="txtMobileno"
              placeholder="Enter Customer Mobile No."
              value={txtMobile}
              onChange={mobileOnChange}
            />
          </div>
          <button onClick={addOnClick}
            type="button"
            className="btn btn-dark"
          >
            Add Customer
          </button>
          <button onClick={searchOnClick}
            type="button"
            className="btn btn-warning"
          >
            Search Customer
          </button>
        </form>
        <ShowData arrcus={arrcus}/>
        </>
    );
}
