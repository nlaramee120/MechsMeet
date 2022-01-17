import React from 'react';
import '../../pages/Pages.css'

import { genCheckup } from '../Stripe/script'

const GenCheckup = () => {

return (
    <button
        onClick={genCheckup}
        type="button"
        class="payMech btn btn-info"
        data-bs-toggle="modal"
        data-bs-target="#exampleModal"
      >
        Pay 
      </button>
)
}

export default GenCheckup