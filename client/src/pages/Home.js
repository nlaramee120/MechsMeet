import React from "react";
import { useQuery } from "@apollo/client";
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
          <SearchBox placeholder="Enter Name" data={profiles} />
          {loading ? (
            <div>Loading...</div>
          ) : (
            <Carousel
              profiles={profiles}
              title="Search for mechanics by your issue"
            />
          )}
        </div>
      </div>
    </main>
  );
};

export default Home;
