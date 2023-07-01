import { useEffect, useState } from 'react';
import '../styles/DLCCards.scss';


const DLCCard = (props) => {
  const [selected, setSelected] = useState(false)
  useEffect(()=>{
    if(selected){
      props.setCount((prev)=>prev+1)
    }
    else if(props.count>0 & !selected){
      props.setCount((prev)=>prev-1);
    }
  },[selected])


  const name = props.name || 'DLC NAME';
  const releaseDate = props.releaseDate ? `Released: ${props.releaseDate}` : 'Released';

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