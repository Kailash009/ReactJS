// Here we are creating BLL as Customer Class for BackEnd
// and also creating a customerForm Component for UI design.
import React from "react";

class Customer {
  static arr_cus = [];
  constructor(id, name, address, mobileno) {
    this.id = id;
    this.name = name;
    this.address = address;
    this.mobileno = mobileno;
  }
  addCustomer() {
    Customer.arr_cus.push(this);
  }
  searchCustomer(id) {
    for (var c of Customer.arr_cus) {
      if (c.id == id) {
        this.id = c.id;
        this.cusname = c.cusname;
        this.address = c.address;
        this.mobileno = c.mobileno;
      }
    }
  }
}
export class DisplayData extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    var tableRow=[];
    for(var c of this.props.data){
      var row=(<tr>
        <th scope="row">{c.id}</th>
        <td>{c.cusname}</td>
        <td>{c.address}</td>
        <td>{c.mobileno}</td>
      </tr>);
      tableRow.push(row);
    }
    return (
      <>
        <table className="table">
          <thead>
            <tr>
              <th scope="col">ID</th>
              <th scope="col">NAME</th>
              <th scope="col">ADDRESS</th>
              <th scope="col">MOBILE NO</th>
            </tr>
          </thead>
          <tbody>
            {tableRow}         
          </tbody>
        </table>
      </>
    );
  }
}
export default class CustomerForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { id: "", cusname: "", address: "", mobileno: "",data:Customer.arr_cus};
    this.idOnChange = this.idOnChange.bind(this);
    this.nameOnChange = this.nameOnChange.bind(this);
    this.addressOnChange = this.addressOnChange.bind(this);
    this.mobileOnChange = this.mobileOnChange.bind(this);
    this.addClickHandler = this.addClickHandler.bind(this);
    this.searchClickHandler = this.searchClickHandler.bind(this);
  }
  idOnChange(event) {
    this.setState({ id: event.target.value });
  }
  nameOnChange(event) {
    this.setState({ cusname: event.target.value });
  }
  addressOnChange(event) {
    this.setState({ address: event.target.value });
  }
  mobileOnChange(event) {
    this.setState({ mobileno: event.target.value });
  }
  addClickHandler() {
    var cus = new Customer();
    cus.id = this.state.id;
    cus.cusname = this.state.cusname;
    cus.address = this.state.address;
    cus.mobileno = this.state.mobileno;
    cus.addCustomer();
    alert("Customer Added SuccessFully!!");
    this.setState({data:Customer.arr_cus});
  }
  searchClickHandler() {
    var cus = new Customer();
    cus.searchCustomer(this.state.id);
    this.setState({
      id: cus.id,
      cusname: cus.cusname,
      address: cus.address,
      mobileno: cus.mobileno,
    });
  }
  render() {
    return (
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
              value={this.state.id}
              onChange={this.idOnChange}
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
              value={this.state.cusname}
              onChange={this.nameOnChange}
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
              value={this.state.address}
              onChange={this.addressOnChange}
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
              value={this.state.mobileno}
              onChange={this.mobileOnChange}
            />
          </div>
          <button
            type="button"
            className="btn btn-dark"
            onClick={this.addClickHandler}
          >
            Add Customer
          </button>
          <button
            type="button"
            className="btn btn-warning"
            onClick={this.searchClickHandler}
          >
            Search Customer
          </button>
        </form>
        <DisplayData data={this.state.data}/>
      </>
    );
  }
}
