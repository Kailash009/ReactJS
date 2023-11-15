class Class1
{
    static s1=1;
    static s2=2;
    constructor(){
        this.x=5;
        this.y=10;
    }
}
var ob1=new Class1();
var ob2=new Class1();
ob1.x=35;
ob1.y=78;
ob2.x=100;
ob2.y=200;
console.log(ob1,ob2);