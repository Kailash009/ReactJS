function TestCom(props)
{
  var arrList=[];
  for(let i=1;i<=10;i++){
    var res=<li key={i}>{i*5}</li>
    arrList.push(res);
}
  return(
  <div>
    <ul>{arrList}</ul>
  </div>
  )
}
export default TestCom;