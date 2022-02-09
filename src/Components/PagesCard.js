import React from 'react';
import { Link } from 'react-router-dom';

export default function PagesCard({image, description, links, title}) {
  return (
      
              <div className="card" style={{ width: '20rem' }}>
                  <img className="card-img-top" src='/hekto.png' alt="the image alt text here" />
                  <div className="card-body">
                      <h5 className="card-title text-primary">{ title }</h5>
                      <p className="card-text">{description}
                      </p>
                      <Link to={links} className="btn btn-outline-dark">Learn more</Link>
                  </div>
              </div>
    

  )
}
