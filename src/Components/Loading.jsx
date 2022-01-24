import React from 'react'

export default function Loading() {
    return (
      <div className="d-flex justify-content-center">
        <h3>Loading...</h3>
        <div className="spinner-border text-primary" role="status">
          <span className="sr-only">Loading...</span>
        </div>
        <div className="spinner-border text-success" role="status">
          <span className="sr-only">Loading...</span>
        </div>
        <div className="spinner-border text-danger" role="status">
          <span className="sr-only">Loading...</span>
        </div>
        <div className="spinner-border text-warning" role="status">
          <span className="sr-only">Loading...</span>
        </div>
      </div>
    );
}
