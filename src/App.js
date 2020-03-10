import React, { useState, useEffect } from "react"
import factService from "./services/facts"
import FactList from "./components/FactList"
import LoadSpinner from "./components/LoadSpinner"
import NewFactsButton from "./components/NewFactsButton"
import { Container, Header } from "semantic-ui-react"
import 'react-toastify/dist/ReactToastify.min.css' 
import { ToastContainer, toast } from "react-toastify";
import './styles.css'

const App = () => {
  const [facts, setFacts] = useState([]);

  useEffect(() => {
    factService
      .getFacts()
      .then(initialFacts => {
        setFacts(initialFacts)
      })
      .catch(error => {
        console.log(error);
        toast.error(error.toString())
      })
  }, [])

  return (
    <Container>
      <Header as="h1" textAlign="center">
        Random cat facts
      </Header>
      <Container>
        { (!facts||facts.length===0) ? <LoadSpinner /> : <FactList facts={facts} />}
      </Container>
      <NewFactsButton setFacts={setFacts} />
      <ToastContainer />
    </Container>
  );
};

export default App;
