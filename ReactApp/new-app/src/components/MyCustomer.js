class Customer
{
    constructor(id,name,address,mobileno) // BLL
    {
        this.id=id;
        this.name=name;
        this.address=address;
        this.mobileno=mobileno;
    }
}
var cus=new Customer(5,"joshi","ashok nagar","43434");
console.log(cus,typeof(cus));