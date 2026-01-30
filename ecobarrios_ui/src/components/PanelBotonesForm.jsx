import '../styles/components/elements/panel_botones.css';
import ButtonWithoutRoute from './ButtonWithoutRoute.jsx';

const dicc = [
    {id: 0, name: "ecobarrio"},
    {id: 1, name: "problema"},
    {id: 2, name: "nose"}
]

export default function PanelBotonesForm({array_textos, setForm}) {
  return (
    <div className='panel-botones-form'>
      {array_textos.map((texto, index) => (
        <ButtonWithoutRoute key={index} text={texto} setForm = {setForm} name = {dicc[index].name}/>
      ))}
    </div>
  )
}