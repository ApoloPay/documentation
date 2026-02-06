---
sidebar_position: 3
---

# Usage

Here is a basic example of how to use the Payment Button.

```javascript
import { ApoloPay } from '@apolopay/payment-button-sdk';

const pymentButton = new ApoloPay({
    clientId: 'YOUR_CLIENT_ID',
    publicKey: 'YOUR_PUBLIC_KEY',
    // ... options
});

pymentButton.mount('#payment-button-container');
```

Refer to the [API Reference](/docs/gateway/apolopay-gateway-payment-button) for backend integration.
