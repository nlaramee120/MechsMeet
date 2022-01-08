import React, {useState} from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
import Home from "./pages/Home";
import StripeContainer from "./components/Container";
import './App.css'


const client = new ApolloClient({
  uri: "/graphql",
  cache: new InMemoryCache(),
});

function App() {
  const [showItem, setShowItem] = useState(false)
  return (
    <ApolloProvider client={client}>
      <Router>
        <div>
          <Switch>
            <Route>
              {showItem ? <StripeContainer/> : <><h3>$10</h3><button onClick={() => setShowItem(true)}>Purchase</button></>}
              <Home />
            </Route>
          </Switch>
        </div>
      </Router>
    </ApolloProvider>
  );
}

export default App;
