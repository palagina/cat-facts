import React from "react";
import Fact from "./Fact";
import { List } from "semantic-ui-react"

const FactList = ({ facts }) => {
  const factList = () =>
    facts.map((fact, id) => (
        <Fact
          key={id}
          fact={fact}
        />
      ));

  return (
      <List divided relaxed animated verticalAlign='middle'>{factList()}</List>
  );
}

export default FactList;