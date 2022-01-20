import React from 'react';
import { useQuery, useMutation } from '@apollo/client';
import Auth from '../../utils/auth';
import { REMOVE_SKILL } from '../../utils/mutations';
import { QUERY_ME } from '../../utils/queries';
import { useParams } from "react-router-dom";

const SkillsList = ({skills,isLoggedInUser = true }) => {
  const { profileId } = useParams();
  const [removeSkill, { error }] = useMutation(REMOVE_SKILL);
  const { loading, data } = useQuery(QUERY_ME, {
    variables: { profileId: profileId },
  });
  const profile = data?.me || data?.profile || {};

 

  const handleRemoveSkill = async (skill) => {
    try {

      await removeSkill({
        variables: { profileId : data.me._id, skill },
      });
    } catch (err) {
      console.log("not logged in");
    }
  };

  if (!skills.length) {
    return <h3>No Skills Yet</h3>;
  }

  return (
    <div>
    <div className="flex-row justify-space-between my-4">
      {skills &&
        skills.map((skill) => (
          <div key={skill} className="col-12 col-xl-6">
            <div className="card mb-3">
              <h4 className="card-header bg-dark text-light p-2 m-0 display-flex justify-space-between align-center">
                <span>{skill}</span>
                {isLoggedInUser && (
                    <button
                      className="btn btn-sm btn-danger ml-auto"
                      onClick={() => handleRemoveSkill(skill)}
                    >
                      X
                    </button>
                  )}
              </h4>
            </div>
          </div>
        ))}
    </div>
    {error && (
      <div className="my-3 p-3 bg-danger text-white">{error.message}</div>
    )}
  </div>
);
};

export default SkillsList;
