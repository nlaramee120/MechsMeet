import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js"
import axios from "axios"
import React, { useState } from 'react'


const CARD_OPTIONS = {
	iconStyle: "solid",
	style: {
		base: {
			iconColor: "#c4f0ff",
			color: "#fff",
			fontWeight: 500,
			fontFamily: "Roboto, Open Sans, Segoe UI, sans-serif",
			fontSize: "16px",
			fontSmoothing: "antialiased",
			":-webkit-autofill": { color: "#fce883" },
			"::placeholder": { color: "#87bbfd" }
		},
		invalid: {
			iconColor: "#ffc7ee",
			color: "#ffc7ee"
		}
	}
}

export default function PaymentForm() {
    const [success, setSuccess ] = useState(false)
    const stripe = useStripe()
    const elements = useElements()

    // const handleSubmit = async () => {
        const button = document.querySelector("button")
        button.addEventListener("click", () => {
        console.log("i was pressed")
          fetch("http://localhost:3001/create-checkout-session", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              items: [
                { id: 1, quantity: 3 },
                { id: 2, quantity: 1 },
              ],
            }),
          })
            .then(res => {
              if (res.ok) return res.json()
              return res.json().then(json => Promise.reject(json))
            })
            .then(({ url }) => {
              window.location = url
            })
            .catch(e => {
              console.error(e.error)
            })
        })
    //     e.preventDefault()
    //     const {error, paymentMethod} = await stripe.createPaymentMethod({
    //         type: "card",
    //         card: elements.getElement(CardElement)
    //     })


    // if(!error) {
    //     try {
    //         const {id} = paymentMethod
    //         const response = await axios.post("http://localhost:3001/payment", {
    //             amount: 1000,
    //             id
    //         })

    //         if(response.data.success) {
    //             console.log("Successful payment")
    //             setSuccess(true)
    //         }

    //     } catch (error) {
    //         console.log("Error", error)
    //     }
    // } else {
    //     console.log(error.message)
    // }
// }

    return (
        <button className="button">Checkout</button>
    //     <>
    //     {!success ? 
    //     <form onSubmit={handleSubmit}>
    //         <fieldset className="FormGroup">
    //             <div className="FormRow">
    //                 <CardElement options={CARD_OPTIONS}/>
    //             </div>
    //         </fieldset>
    //         <button>Pay</button>
    //     </form>
    //     :
    //    <div>
    //        <h2>Purchase Successful!</h2>
    //    </div> 
    //     }
        
    //     </> 
    )
}