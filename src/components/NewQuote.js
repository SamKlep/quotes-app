import React from "react";
import Button from "react-bootstrap/Button";

const NewQuote = () => {
  return (
    <div className='button-container'>
      <Button variant='success' size='lg' block>
        New Quote
      </Button>
    </div>
  );
};

export default NewQuote;
