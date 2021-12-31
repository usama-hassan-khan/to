import logo from './logo.svg';
import './App.css';
import { BsCheckLg,BsXLg } from "react-icons/bs";
import React ,{useState} from 'react';
const App=()=>{
  const [state,setState]=useState();
  // const [finaldata,setFinaldata]=useState([]);
  const [array,setArray] = useState([]);
 const  dltli=(s)=>{
   setArray(array.filter(a=>a!=s))
  
console.log(s);

 }
 const  dltli1=(s)=>{
   console.log(array,"arrayyyy")
console.log("ss",s)
  array.map( item => item.name === s[0].name ? {name:item.name,select:1} : item  )

  // array.map(n=>{ n.name == s ? {'name':n.name,'select':0} : n 
  //   // if(n.name==s){
  //   //   setArray(oldArray => [...oldArray,{name:'majid',select:1}])
  //   // }
  // })
  
//  console.log(array,"ewqqewweqweqw")



}


console.log(array,"daasd");
  const Submitdata=()=>{
    if(array.includes(state)){
      alert("data is alreay in list rasheed bhai");
     
    }
    let newEmp={name:state,select:0}

   array.includes(state)==false && setArray(oldArray => [...oldArray,newEmp] );

    console.log("dsds")
  }
  console.log(array,"ss")
  console.log(state);
  return (
    <div className="App ">
      <div className="main-container">
     <input type="text" onChange={(e)=>setState(e.target.value)}/>
    
     <button onClick={()=>Submitdata()}>dsads</button>
     </div>
     <div><h1>show list</h1>
     <div className="content"> 
       {array.map((s,index,d)=>{
           return (
            <div className="ccc"><li>{s.name}</li><span > <BsCheckLg onClick={(  )=>dltli1(s)} className="true"/>    </span>
              <span > <BsXLg onClick={(  )=>dltli(s)} className="false"/></span> 
           
           </div>
          );
           })}
   
       </div>
     </div>
    </div>
  );
}

export default App;
