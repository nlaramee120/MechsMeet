import React from 'react';
import '../../pages/Pages.css'

import { paintJob } from '../Stripe/script'

const PaintJob = () => {

return (
    <button
        onClick={paintJob}
        type="button"
        class="payMech btn btn-info"
        data-bs-toggle="modal"
        data-bs-target="#exampleModal"
      >
        Pay 
      </button>
)
}

export default PaintJob