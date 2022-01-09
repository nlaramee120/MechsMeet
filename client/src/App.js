import React, {useState} from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";

// import Home from "./pages/Home";
// import StripeContainer from "./components/Container";
// import './App.css'

import Home from './pages/Home';
import Profile from './pages/Profile';
import Header from './components/Header';
import Footer from './components/Footer';

const client = new ApolloClient({
  uri: "/graphql",
  cache: new InMemoryCache(),
});

// function App() {
//   const [showItem, setShowItem] = useState(false)
//   return (
//     <ApolloProvider client={client}>
//       <Router>
//         <div>
//           <Switch>
//             <Route>
//               {showItem ? <StripeContainer/> : <><h3>$10</h3><button onClick={() => setShowItem(true)}>Purchase</button></>}
//               <Home />
//             </Route>
//           </Switch>
//         </div>
//       </Router>
//     </ApolloProvider>
//   );
// }

function App() {
  return (
    <ApolloProvider client={client}>
      {/* Wrap page elements in Router component to keep track of location state */}
      <Router>
        <div className="flex-column justify-flex-start min-100-vh">
          <Header />
          <div className="container">
            {/* Define routes to render different page components at different paths */}
            <Route exact path="/" component={Home} />
            {/* Define a route that will take in variable data */}
            <Route exact path="/profiles/:profileId" component={Profile} />
          </div>
          <Footer />
        </div>
      </Router>
    </ApolloProvider>
  );
}

export default App;
