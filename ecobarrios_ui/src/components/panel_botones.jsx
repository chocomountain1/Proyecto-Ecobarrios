import Button from './Button';
import '../styles/components/elements/panel_botones.css';

export default function Panel_botones({array_textos, array_rutas}) {
  return (
    <div className='panel-botones'>
      {array_textos.map((texto, index) => (
        <Button key={index} text={texto} ruta={array_rutas[index]} />
      ))}
    </div>
  )
}