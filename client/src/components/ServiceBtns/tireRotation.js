import React from 'react';
import '../../pages/Pages.css'

import { tireRotation } from '../Stripe/script'

const TireRotation = () => {

return (
    <button
        onClick={tireRotation}
        type="button"
        class="payMech btn btn-info"
        data-bs-toggle="modal"
        data-bs-target="#exampleModal"
      >
        Pay 
      </button>
)
}

export default TireRotation