import React from 'react';
import '../../pages/Pages.css'

import { headlights } from '../Stripe/script'

const Headlights = () => {

return (
    <button
        onClick={headlights}
        type="button"
        class="payMech btn btn-info"
        data-bs-toggle="modal"
        data-bs-target="#exampleModal"
      >
        Pay 
      </button>
)
}

export default Headlights