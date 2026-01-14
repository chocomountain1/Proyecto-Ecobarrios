import React from 'react';
import Button from './Button.jsx';
import '../styles/components/elements/panel_botones.css';

export default function Panel_botones({array_textos}) {
  return (
    <div className='panel-botones'>
      {array_textos.map((texto, index) => (
        <Button key={index} text={texto} />
      ))}
    </div>
  )
}