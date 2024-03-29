import React from 'react';

interface SampleProps {
	id?: string;
}

const Sample = ({ id }: SampleProps) => (
  <div>
    <ol className="breadcrumb">
      <li className="breadcrumb-item">Home</li>
      <li className="breadcrumb-item active">Sample</li>
    </ol>
    <h2>Remote App - Sample</h2>
    <p>This is the sample remote application.</p>
    <p>Parameter: {id || 'No id found'} </p>
  </div>
);

export default Sample;