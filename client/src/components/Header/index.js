import React from "react";
// Import React Router Link component for internal hyperlinks
import { Link } from "react-router-dom";
import "./Header.css";
import Auth from "../../utils/auth";

const Header = () => {
  if (Auth.loggedIn())
    return (
      <div>
        <header className="bg-primary text-dark mb-4 display-flex align-center">
          <div className="headerLinks container flex-column justify-space-between-lg justify-center ">
            <div className="homeLink">
              <Link className="text-dark" to="/">
                <h1 className="m-0" style={{ fontSize: "1.5rem" }}>
                  Mechanic Looker Upper
                </h1>
              </Link>
            </div>
            <div className="navLinks">
              <Link className="myProfile text-dark" to="/me/:profileId">
                <h1 className="m-1" style={{ fontSize: "1.2rem" }}>
                  My Profile
                </h1>
              </Link>
              <Link
                onClick={() => Auth.logout()}
                className="logoutBtn text-dark"
              >
                <h1 className="m-1" style={{ fontSize: "1.2rem" }}>
                  Sign Out
                </h1>
              </Link>
            </div>
          </div>
          {/* <p className="headerQuote m-0" style={{ fontSize: "1rem", fontWeight: "700" }}>
        Find your man (or woman) in uniform...
      </p> */}
        </header>
        <img className="headerImg" src="/images/group2crop.png" alt="text" />
      </div>
    );

  if (!Auth.loggedIn())
    return (
      <div>
        <header className="bg-primary text-dark mb-4 display-flex align-center">
          <div className="headerLinks container flex-column justify-space-between-lg justify-center ">
            <div className="homeLink">
              <Link className="text-dark" to="/">
                <h1 className="m-0" style={{ fontSize: "1.5rem" }}>
                  Mechanic Looker Upper
                </h1>
              </Link>
            </div>
            <div className="navLinks">
              <Link className="loginBtn text-dark" to="/login">
                <h1 className="m-1" style={{ fontSize: "1.2rem" }}>
                  Sign In
                </h1>
              </Link>
            </div>
          </div>
        </header>
        <img className="headerImg" src="/images/group2crop.png" alt="text" />
      </div>
    );
};

// const Header = () => {
//   return (
//     <header className="bg-primary text-dark mb-4 display-flex align-center">
//       <div className="headerLinks container flex-column justify-space-between-lg justify-center ">
//         <div className="homeLink">
//           <Link className="text-dark" to="/">
//             <h1 className="m-0" style={{ fontSize: "1.5rem" }}>
//               Mechanic Looker Upper
//             </h1>
//           </Link>
//         </div>
//         <div className="navLinks">
//           <Link className="myProfile text-dark" to="/me/:profileId">
//             <h1 className="m-1" style={{ fontSize: "1.2rem" }}>
//               My Profile
//             </h1>
//           </Link>
//           <Link className="loginBtn text-dark" to="/login">
//             <h1 className="m-1" style={{ fontSize: "1.2rem" }}>
//               Sign In
//             </h1>
//           </Link>
//           {Auth.loggedIn && <Link onClick={() => Auth.logout()} className="logoutBtn text-dark">
//             <h1 className="m-1" style={{ fontSize: "1.2rem" }}>
//               Sign Out
//             </h1>
//           </Link>}
//         </div>
//       </div>
//       {/* <p className="headerQuote m-0" style={{ fontSize: "1rem", fontWeight: "700" }}>
//         Find your man (or woman) in uniform...
//       </p> */}
//     </header>
//   );
// };

export default Header;
