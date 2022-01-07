import React, { useState } from 'react';


const ButtonColor = props => {
  const [color, setColor] = useState('black');

  return <td style={{background:color}} 
    onClick={() => setColor(props.color)}>
    </td>
}

export default ButtonColor;