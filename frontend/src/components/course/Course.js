import React from 'react'

function Course(props) {
  function changeHandler(event){
    if(event.target.checked){
        props.setPref(current => [...current, props.code]);
    }
  }
  return (
    <tr className="course-info">
      <td>{props.code}</td>
      <td>{props.name}</td>
      <td>{props.lhours}</td>
      <td>{props.thours}</td>
      <td>{props.phours}</td>
      <td>{props.jhours}</td>
      <td>{props.credits}</td>
      {(props.isAdmin!=null)? <td><input type="checkbox" onChange={changeHandler}></input></td>: null}
      
    </tr>
  )
}

export default Course;