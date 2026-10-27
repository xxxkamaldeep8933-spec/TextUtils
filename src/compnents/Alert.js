import React from 'react'

function Alert(props) {
const captilize= (word)=>{
    const lower = word.toLowerCase();
    return lower.charAt(0).toUpperCase()+ lower.slice(1);
}

  return (
      props.alert && <div className={`alert alert-${props.alert.type} theme-success`} role="alert">
 <strong>{captilize(props.alert.type)}</strong> :{props.alert.msg}
  <button type="button" className="btn-close ms-auto" data-bs-dismiss="alert" aria-label="Close"></button>
</div>
    
  )
}

export default Alert
