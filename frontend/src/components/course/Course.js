import React from 'react'

function Course(props) {
  return (
    <tr className="course-info">
      <td>{props.code}</td>
      <td>{props.name}</td>
      <td>{props.lhours}</td>
      <td>{props.thours}</td>
      <td>{props.phours}</td>
      <td>{props.jhours}</td>
      <td>{props.credits}</td>
    </tr>
  )
}

export default Course;