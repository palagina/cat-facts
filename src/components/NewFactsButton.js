import React from 'react'
import factService from "../services/facts"
import { Button, Container } from "semantic-ui-react";

const NewFactsButton = ({setFacts}) => {

  //sends GET request with a 1sec timeout
    const fetchNewFacts = () => {
      setFacts([]);
      setTimeout(() => {
        factService
        .getFacts()
        .then(initialFacts => {
          setFacts(initialFacts);
        })
        .catch(error => {
          console.log(error.message);
        });
      }, 1000);
    };

  return (
    <Container textAlign='center'>
      <Button primary onClick={fetchNewFacts} content="New facts" />
    </Container>
  );
}

export default NewFactsButton