import React from 'react';
import { useQuery, gql } from '@apollo/client';

const GET_COUNTRIES = gql`
  query {
    countries {
      code
      name
      native
      emoji
    }
  }
`;

const Countries = () => {
  const { loading, error, data } = useQuery(GET_COUNTRIES);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  return (
    <div>
      <h2>Lista de países</h2>
      <ul>
        {data.countries.map(country => (
          <li key={country.code}>
            {country.name} - {country.emoji}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Countries;
