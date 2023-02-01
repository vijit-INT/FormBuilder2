import React from 'react'
import styles from './button.module.css'
const Button = (props) => {
  return (
    <div>
        <button className={styles.button} style={{color:props.color, paddingLeft: props.left, paddingRight: props.right, marginTop: props.top}} >
         {props.label}
        </button>
        
    </div>
  )
}

export default Button