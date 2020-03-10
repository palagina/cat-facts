import React from "react";
import { List } from "semantic-ui-react";

const Fact = ({ fact }) => {
    return (
      <List.Item >
        <List.Icon name='sticky note outline' size='large' verticalAlign='middle' />
        <List.Content>{fact.text} </List.Content>
      </List.Item>
    );
}

export default Fact;