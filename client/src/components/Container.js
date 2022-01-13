import { Elements } from "@stripe/react-stripe-js"
import { loadStripe } from "@stripe/stripe-js"
import React from "react"
import PaymentForm from "./PaymentForm"
require("dotenv").config();


const PUBLIC_KEY = "pk_test_51KFiU0DbKiCmCnSgcKiFHLFY5oKoySivwxDvwCBwQ3XyFXTUuGqg46w8AQxLCNnoetPUsOOJYMMb7r1yBClAioi300UrZ36VSW"

const stripeTestPromise = loadStripe(PUBLIC_KEY)

export default function StripeContainer() {
	return (
		<Elements stripe={stripeTestPromise}>
			<PaymentForm />
		</Elements>
	)
}