import React from 'react'
import { Chip } from './Chip'
import "./Gender.css"

export const Gender = ({movies}) => {
  /*const movie = props.movie */
  const gender = movies.Genre ? movies.Genre.split(", ") : [];

  return (
    <div className='gender-container'>
    {
      gender.map((genero,index)=>(
        <Chip genero={genero} key= {index}/>

        ))
    }
      
    </div>
  )
}
