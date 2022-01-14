import React from 'react';
import { Link } from 'react-router-dom';
import { useQuery } from '@apollo/client';

import ProfileList from '../components/ProfileList';
import ProfileForm from '../components/ProfileForm';
import Carousel from '../components/Carousel';

import { QUERY_PROFILES } from '../utils/queries';

const Home = () => {
  const { loading, data } = useQuery(QUERY_PROFILES);
  const profiles = data?.profiles || [];

  return (
    <main>
      <div className="flex-row justify-center">
        <div
          className="col-12 col-md-10 mb-3 p-3"
          style={{ border: '1px solid #1a1a1a' }}
        >
          <ProfileForm />
        </div>

        <div className="col-12 col-md-10 my-3">
          {loading ? (
            <div>Loading...</div>
          ) : (
            <Carousel
            // or ProfileList
              profiles={profiles}
              title="Search for mechanics by your issue"
            />
          )}
        </div>
      </div>
    </main>
  );
};

// import { QUERY_MATCHUPS } from '../utils/queries';

// const Home = () => {
//   const { loading, data } = useQuery(QUERY_MATCHUPS, {
//     fetchPolicy: "no-cache"
//   });

//   const matchupList = data?.matchups || [];

//   return (
//     <div>
//       <h1>Hello world!</h1>
//     </div>
//   );
// };

export default Home;
