import React from "react";
import { Segment, Dimmer, Loader } from "semantic-ui-react"

const LoadSpinner = () => {
    return (
      <Segment >
        <Dimmer active inverted>
          <Loader content='Loading more facts' size="huge"/>
        </Dimmer>
      </Segment>
    );
  }

  export default LoadSpinner;