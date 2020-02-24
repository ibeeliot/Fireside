import React, { Component } from 'react';
import {
  BrowserRouter,
  Switch,
  Route,
  Link
} from 'react-router-dom';
import { 
  Container, 
  Button, 
  Form, 
  FormGroup, 
  Label, 
  Input, 
  FormText,
  Table 
} from 'reactstrap';

const Results = props => {
  const { queriedGrounds } = props;

  let homeButton;
  let tableResults;

  let results = [1]
  // const results = queryResults.map(camp => {
  //   <Camp camp={camp}/>
  if(results.length > 0){
    tableResults = <Table className="Table" hover>
                      <thead>
                        <tr>
                          <th>Camp</th>
                          <th>Pets</th>
                          <th>Sewer-hookup</th>
                          <th>Water-hookup</th>
                          <th>waterfront</th>
                          <th>Longitude</th>
                          <th>Latitude</th>
                        </tr>
                      </thead>
                      {/* <tbody>
                       {results}
                      </tbody> */}
                    </ Table>;
    homeButton = <Button className="findMore" color="secondary" >Find More </Button>;
  }

  
 
  return (
      <div className="Results">
        <h1>Your Next Adventure Awaits</h1>
        <Button className="returnHome" outline color="info">Return Home </Button>
        {tableResults}
        {/* <Table hover>
        <thead>
          <tr>
            <th>Camp</th>
            <th>Pets</th>
            <th>Sewer-hookup</th>
            <th>Water-hookup</th>
            <th>waterfront</th>
            <th>Longitude</th>
            <th>Latitude</th>
          </tr>
        </thead>
        <tbody>
          {results}
        </tbody> 
        </Table> */}
        {homeButton}
      </div>
  );
}
export default Results;