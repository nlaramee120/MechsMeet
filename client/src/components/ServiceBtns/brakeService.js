import React from 'react';
import '../../pages/Pages.css'

import { brakeService } from '../Stripe/script'

const BrakeService = () => {

return (
    <button
        onClick={brakeService}
        type="button"
        class="payMech btn btn-info"
        data-bs-toggle="modal"
        data-bs-target="#exampleModal"
      >
        Pay 
      </button>
)
}

export default BrakeService
