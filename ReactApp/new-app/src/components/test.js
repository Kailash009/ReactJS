import React from 'react';

export default class MyComponent extends React.Component
{
constructor(props){
    super(props);
}
render(){
    return(
        <h1>This is my First Class Component {this.props.name}</h1>
    );
}
}

// class Cus
// {
//     constructor(x,y)
//     {
//         this.x1=x;
//         this.y1=y;
//     }
//     showData()
//     {
//         console.log(this.x1,this.y1);
//     }
// }
// class Emp extends Cus
// {
//     constructor(a,b)
//     {
//         super(4,5);
//         this.a1=a;
//         this.b1=b;
//     }
// } 
// var cus1=new Cus(10,20);
// var cus2=new Emp(3,5);
// console.log(cus1,cus2);
// // cus1.showData();
// // console.log(cus1.x1,cus1.y1);
// // var cus2=new Cus(5,7);
// // cus2.showData();
// // console.log(cus2.x1,cus2.y1);
// // console.log(cus1);
// // console.log(cus2);