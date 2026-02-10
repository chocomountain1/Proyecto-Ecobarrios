import React from 'react';
import '../styles/components/elements/ods_buttons.css';

export default function Ods_button({ number_ods, text }) {
  return (
    <button
      className={`ods_btn${number_ods}`}>
        {text}
    </button>
  )
}