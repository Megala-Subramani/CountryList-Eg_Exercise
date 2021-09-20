import React from 'react'

const MemoFn=({title,releaseDate,count,dvClick})=>{
  
   console.log("Memo Component")
   
    return (<div style={{width:'500px',height:'200px',backgroundColor:'yellow'}} onClick={dvClick} >Hello I AM THE Memo Component <br></br> {title} &
    {releaseDate}====={count}</div>)
}

export default React.memo(MemoFn);