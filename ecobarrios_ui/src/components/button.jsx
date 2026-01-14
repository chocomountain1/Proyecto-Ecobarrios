import React from 'react';
import '../styles/components/elements/button.css';

export default function Button({ text }) {
  return (
    <button
      className='btn'>
        {text}
    </button>
  )
}