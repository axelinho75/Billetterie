import Card from './components/Card'
import "./css/Card.css"
import photo from './assets/react.svg'

function App() {

  return (
   <div>
    <Card title={"Paris Sg - Paris Fc"} price={12} location={"Parc des princes"} image={photo}/>
   </div>
  )
}

export default App
