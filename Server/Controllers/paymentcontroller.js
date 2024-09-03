const Stripe = require('stripe');
const stripe = Stripe('sk_test_51PmGTfGJLYc4RI3yLAfbrcUe6u0gIo2l4lEcA0NstyDHwyIHv3yW4xbOM0MvNmg5c7GfdtUJssgouHfoQx4BddtS00hEPmhSzZ');

const { StripePayment, Match } = require('../Database/index'); // Adjust the path based on your project structure

const addPayment = async (req, res) => {
  try {
    const { userId, amount } = req.body; // Removed cartIds since it's not needed

    // Step 1: Create a payment intent with Stripe
    const paymentIntent = await stripe.paymentIntents.create({
      amount: amount * 100, // Amount in cents
      currency: 'tnd', // Updated to Tunisian Dinar (TND)
    });

    // Step 2: Create a payment record in your database
    const payment = await StripePayment.create({
      userId,
      stripePaymentId: paymentIntent.id,
      amount,
      status: 'pending', // Set initial status as 'pending'
    });

    // Step 3: Update matches to confirm the match after payment and set paymentId
    await Match.update(
      { 
        confirmmatch: true,  // Confirm match
        paymentId: payment.id // Set the paymentId in Match table
      },
      {
        where: {
          userId: userId, // Match the user making the payment
          handled: false, // Ensure it's an unhandled match
        },
      }
    );

    // Step 4: Send response back to the client with the client secret
    res.json({ clientSecret: paymentIntent.client_secret });
  } catch (error) {
    console.error('Error during payment process:', error);
    res.status(500).send('Internal Server Error');
  }
};

module.exports = { addPayment };
