import { useState,useRef } from "react";
import { Table, Button, Form, Container, Card, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import donnees from "../data.json"

function DatePicker(props){
  const {setDate}= props
  const dateref = useRef()
  return(
    <input ref={dateref} type="date"  onChange={()=> {
      setDate(dateref.current.value)

    }}/>
  )
}

function Tableau(props){
  const {liste}= props
  return (
    <Container className="my-4">
      <h1 className="mb-4 text-center">LISTE DES PESSESSION</h1>
        <Card.Body>
          <Table striped bordered hover responsive>
            <thead>
            <tr>
        <th>Possesseur</th>
        <th>Libelle</th>
        <th>Valeur</th>
        <th>Date de Debut</th>
        <th>Date de Fin</th>
        <th>taux d'Amortissement</th>
        <th>Valeur Actuelle</th>
      </tr>
            </thead>
            <tbody>
            {donnees.map((el,i)=>
      <tr>
        <td key={i}>{el.possesseur.nom}</td>
        <td key={i}>{el.libelle}</td>
        <td key={i}>{el.valeur}</td>
        <td key={i}>{el.dateDebut}</td>
        <td key={i}>{el.dateFin}</td>
        <td key={i}>{el.tauxAmortissement}</td>
        <td key={i}>{Date.now()}</td>
      </tr>
        )} 
            </tbody>
          </Table>
        </Card.Body>
    </Container>
  );
}




function App() {
  const [date,setDAte] = useState( new Date());
  return (
    <>
        <Tableau liste={donnees}/>
        <DatePicker /> 
        <button>Montrer le patrimoine</button>
    </>

  )
    
}


export default App
