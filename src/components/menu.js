import React from 'react';
import {Alert} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function Menu(){
[
    'dark',
  ].map((variant, idx) => (
    <Alert key={idx} variant={variant}>
      This is a {variant} alert—check it out!
    </Alert>
  ));
}

export default Menu