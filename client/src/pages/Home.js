import React from 'react';
import { Link } from 'react-router-dom';
import { useQuery } from '@apollo/client';
// import { QUERY_MATCHUPS } from '../utils/queries';
// import ProfileList from '../components/ProfileList';
// import ProfileForm from '../components/ProfileForm';

import { QUERY_PROFILES } from '../utils/queries';


const Home = () => {
  // const { loading, data } = useQuery(QUERY_MATCHUPS, {
  //   fetchPolicy: "no-cache"
  // });

  // const matchupList = data?.matchups || [];
  const { loading, data } = useQuery(QUERY_PROFILES);
  const profiles = data?.profiles || [];


  return (
    <div>
      <h1>Hello world!</h1>
    </div>
  );
};

export default Home;
