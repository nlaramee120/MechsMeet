import React from 'react';
import '../../pages/Pages.css'

import { oilChange } from '../Stripe/script'

const OilChange = () => {

return (
    <button
        onClick={oilChange}
        type="button"
        class="payMech btn btn-info"
        data-bs-toggle="modal"
        data-bs-target="#exampleModal"
      >
        Pay 
      </button>
)
}

export default OilChange