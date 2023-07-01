import { useEffect, useState } from 'react';
import '../styles/DLCCards.scss';


const DLCCard = (props) => {
  const [selected, setSelected] = useState(false)
  const name = props.name || 'DLC NAME';
  const releaseDate = props.releaseDate ? `Released: ${props.releaseDate}` : 'Released';

  useEffect(()=>{
    if(selected){
      props.setCount((prev)=>prev+1)
      props.setList((prev)=>[...prev, name].sort())
    }
    else if(props.count>0 & !selected){
      props.setCount((prev)=>prev-1);
      props.setList((prev)=>{
        const index = prev.indexOf(name);
        const newList = [...prev]
        newList.splice(index,1);
        return newList
        // return prev
      })
    }
  },[selected])



  const changeSelected = () =>{
    setSelected(!selected);

  }
  return (
    <div className={`dlc-card ${selected && 'selected'}`}>
      <img className="image" src="https://assets1.ignimgs.com/2018/03/03/djmaxrespect-1520036924811.jpg" />
      <div className='info'>
        <h1 className="title">{name}</h1>
        <p className="release-date">{releaseDate}</p>
      </div>
      <button onClick={()=>{changeSelected()}}>CLICK ME</button>
    </div>
  );
};

export default DLCCard;