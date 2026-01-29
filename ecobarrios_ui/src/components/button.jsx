import React from 'react';
import '../styles/components/elements/button.css';
import { useNavigate } from "react-router-dom";

export default function Button({ text, ruta }) {
  const navigate = useNavigate();
  return (
    <button className='btn' onClick={() => navigate(ruta)}>
        {text}
    </button>
  )
}