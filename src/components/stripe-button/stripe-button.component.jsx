import React from 'react'
import StripeCheckout from 'react-stripe-checkout'

const StripeCheckoutButton = ({price}) => {
    const priceForStripe = price * 100;
    const publishableKey = 'pk_test_51JBzKyI8E1STigj3M7yXO0XssRoHO9jUJgxgoa9LYrCc1XSxVNZjX1tJ2F6BXMvCvrzXN3qqcpBuEAXzH0LlL1Ds00aB55n6uP'
    
    const onToken = token => {
        console.log(token);
        alert('Payment Succesful')
    }
    return (
        <StripeCheckout 
        label="Pay Now"
        name="Ecommerce"
        billingAddress
        shippingAddress
        image=""
        description={`Your total is $${price}`}
        amount={priceForStripe}
        panelLabel="Pay Now"
        token={onToken}
        stripeKey={publishableKey}
        />
    )
}

export default StripeCheckoutButton
