import React from 'react';
import './InformationCard.css';
import Data from './data';
import Pagination from '../../../node_modules/react-bootstrap/Pagination';

const active = 1;
const items = [];
for (let number = 1; number <= 5; number += 1) {
  items.push(
    <Pagination.Item key={number} active={number === active}>
      {number}
    </Pagination.Item>,
  );
}
function InformationCard() {
  return (
    <div>
      <div className="carDiv">
        {
          Data.map((ob, key) => (
            <div className="card text-center">
              <div className="overflow">
                <img src={ob.logo} alt="refugee" className="card-img-top" />
              </div>
              <div className="card-body text-dark">
                <h4 className="card-title">{ob.name}</h4>
                <p className="card-text text-secondary">
                  {ob.description}
                </p>
                <a href={ob.url} className="btn btn-outline-success">
                Read More
                </a>
              </div>
            </div>
          ))
          }
      </div>
      <Pagination>
        <Pagination.First />
        <Pagination.Prev />
        <Pagination.Item>{1}</Pagination.Item>
        <Pagination.Ellipsis />

        <Pagination.Item>{10}</Pagination.Item>
        <Pagination.Item>{11}</Pagination.Item>
        <Pagination.Item active>{12}</Pagination.Item>
        <Pagination.Item>{13}</Pagination.Item>
        <Pagination.Item disabled>{14}</Pagination.Item>

        <Pagination.Ellipsis />
        <Pagination.Item>{20}</Pagination.Item>
        <Pagination.Next />
        <Pagination.Last />
      </Pagination>
    </div>
  );
}
export default InformationCard;
