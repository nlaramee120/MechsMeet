import React from "react";
import { useQuery } from "@apollo/client";

// import ProfileList from "../components/ProfileList";
import ProfileForm from "../components/ProfileForm";
import Carousel from "../components/Carousel";
import SearchBox from "../components/SearchBox";

import { QUERY_PROFILES } from "../utils/queries";

const Home = () => {
  const { loading, data } = useQuery(QUERY_PROFILES);
  const profiles = data?.profiles || [];
  

  return (
    <main>
      <h1>MechsMeet</h1>
      <div className="flex-row justify-center">
        <div className="col-12 col-md-10 mb-3 p-3">
          <ProfileForm />
        </div>
      
        <div className="col-12 col-md-10 my-3">
        <SearchBox placeholder= "Enter Name" data={profiles}/>
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