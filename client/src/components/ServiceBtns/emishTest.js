import React from 'react';
import '../../pages/Pages.css'

import { emishTest } from '../Stripe/script'

const EmishTest = () => {

return (
    <button
        onClick={emishTest}
        type="button"
        class="payMech btn btn-info"
        data-bs-toggle="modal"
        data-bs-target="#exampleModal"
      >
        Pay 
      </button>
)
}

export default EmishTest