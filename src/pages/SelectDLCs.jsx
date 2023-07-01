import DLCCard from "../components/DLCCard";
import { useState } from "react";
// import '../styles/DLCCards.scss'
const arrayOfDLCs = []
const DLCArrayTest = (amountOfDLC) => {
  const dlcArray = []
  let counter = 0;
  while(counter < amountOfDLC){
    dlcArray.push({
      name:`DLC Number ${counter+1}`,
      releaseDate: `2022-01-${counter+2}`
    });
    counter++;
  }
  
  return dlcArray
}

const arrayOfDLCsTESTER = DLCArrayTest(10);

const SelectDLCs = (props) =>{

  const [count, setCount] = useState(0);
  const [list, setList] = useState([])
  
  return(
    <div>
      {count}
      {list.map((e)=>{return <p>{e}</p>})}
      {arrayOfDLCsTESTER.map((dlc, index)=>{
        return(<DLCCard key={index} count={count} setCount={setCount} list={list} setList={setList} name={dlc.name} releaseDate={dlc.releaseDate} selected={false}></DLCCard>)
      })}

    </div>
  );
}

export default SelectDLCs