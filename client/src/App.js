import React, {useState} from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { ApolloClient, ApolloProvider, InMemoryCache, createHttpLink } from "@apollo/client";
import { setContext } from '@apollo/client/link/context';

// import Home from "./pages/Home";
// import StripeContainer from "./components/Container";
// import './App.css'

import Home from './pages/Home';
import Profile from './pages/Profile';
import Header from './components/Header';
import Footer from './components/Footer';
import Login from './pages/Login';
import Signup from './pages/Signup';
import StripeButton from "./components/Stripe/script.js"
import Success from './components/Stripe/Success'
import Cancel from './components/Stripe/Cancel'

// const client = new ApolloClient({
//   uri: "/graphql",
//   cache: new InMemoryCache(),
// });

const httpLink = createHttpLink({
  uri: '/graphql',
});

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem('id_token');
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

// function App() {
//   return (
//     <ApolloProvider client={client}>
//       <Router>
//         <div>
//             <Route>
//               <StripeButton />
//               <Route exact path="/success" component={Success} />
//               <Route exact path="/cancel" component={Cancel} />
//            </Route>
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
            <Route exact path="/login" component={Login} />
              <Route exact path="/signup" component={Signup} />
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
