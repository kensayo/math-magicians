import { React, useEffect, useState } from 'react';

function Quote() {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState('');

  useEffect(() => {
    fetch('https://api.quotable.io/random?minLength=150')
      .then((res) => res.json())
      .then(
        (result) => {
          setIsLoaded(true);
          setItems(result);
        },
        (error) => {
          setIsLoaded(true);
          setError(error);
        },
      );
  }, []);

  if (error) {
    return (
      <div className="d-flex justify-content-center p-5 m-5">
        <p className="w-50 fs-5">
          <strong>Error: </strong>
          {error.message}
        </p>
      </div>
    );
  } if (!isLoaded) {
    return (
      <div className="d-flex justify-content-center p-5 m-5">
        <p className="w-50 fs-5 fw-boldtext-align-center">Loading...</p>
      </div>
    );
  }
  return (
    <div className="d-flex justify-content-center p-5 m-5">
      <p className="w-50 fs-5">
        {items.content}
        {' '}
        -
        {' '}
        <strong>{items.author}</strong>
      </p>

    </div>
  );
}

export default Quote;
