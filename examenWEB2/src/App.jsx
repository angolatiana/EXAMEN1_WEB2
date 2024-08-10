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
      <h1 className="mb-4 text-center">Liste des Possessions</h1>
      <Card className="mb-4 background-section">
        <Card.Body>
          <Table striped bordered hover responsive>
            <thead>
            <tr>
        <th>possesseur</th>
        <th>libelle</th>
        <th>valeur</th>
        <th>dateDebut</th>
        <th>dateFin</th>
        <th>tauxAmortissement</th>
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
      </Card>
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
