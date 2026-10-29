import React from 'react';
import { Link } from 'react-router-dom';
import ReciepeForm from '../components/ReciepeForm';

export default function AddRecipie() {
  return (
    <div className="add-recipe-page">
      <div className="page-breadcrumb">
        <Link to="/" className="breadcrumb-link">
          <svg
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <line x1="19" y1="12" x2="5" y2="12" />
            <polyline points="12 19 5 12 12 5" />
          </svg>
          Back to recipes
        </Link>
      </div>

      <div className="form-container">
        <ReciepeForm />
      </div>
    </div>
  );
}

