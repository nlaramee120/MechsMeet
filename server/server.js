require("dotenv").config();

const express = require('express');
const path = require('path');
const { ApolloServer } = require('apollo-server-express');
const db = require('./config/connection');
const { typeDefs, resolvers } = require('./schemas');
const cors = require("cors")
const stripe = require("stripe")(process.env.STRIPE_PRIVATE_KEY)
// import { QUERY_SINGLE_SERVICE } from '../client/src/utils/queries'



const { authMiddleware } = require('./utils/auth');

const app = express();
const PORT = process.env.PORT || 3001;
const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: authMiddleware
});

server.applyMiddleware({ app });

app.use(express.urlencoded({ extended: false }));
//we can change this to true but I think with our files it has to be false
app.use(express.json());

app.use(cors())

const storeItems = new Map([
  [1, { priceInCents: 9500, name: "General Checkup" }],
  [2, { priceInCents: 13000, name: "Brake Service" }],
  [3, { priceInCents: 18000, name: "Headlights" }],
  [4, { priceInCents: 5000, name: "Oil Change" }],
  [5, { priceInCents: 25000, name: "Paint Job" }],
  [6, { priceInCents: 2000, name: "Emissions Test" }],
])

app.post("/create-checkout-session", async (req, res) => {
  try {
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      mode: "payment",
      line_items: req.body.items.map(item => {
        const storeItem = storeItems.get(item.id)
        return {
          price_data: {
            currency: "usd",
            product_data: {
              name: storeItem.name,
            },
            unit_amount: storeItem.priceInCents,
          },
          quantity: item.quantity,
        }
      }),
      success_url: `${process.env.CLIENT_URL}/success`,
      cancel_url: `${process.env.CLIENT_URL}/cancel`,
    })
    res.json({ url: session.url })
  } catch (e) {
    res.status(500).json({ error: e.message })
  }
})

// Serve up static assets could be useful later
// app.use('/images', express.static(path.join(__dirname, '../client/images')));

// if we're in production, serve client/build as static assets
if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '../client/build')));
}

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/build/index.html'));
});

db.once('open', () => {
  app.listen(PORT, () => {
    console.log(`API server running on port ${PORT}!`);
    // log where we can go to test our GQL API
    console.log(`Use GraphQL at http://localhost:${PORT}${server.graphqlPath}`);
  });
});
