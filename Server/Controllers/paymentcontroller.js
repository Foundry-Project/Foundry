const Stripe = require('stripe');
// Replace 'sk_test_...' with your actual test or live secret key
const stripe = Stripe('sk_test_51PvfN9LVzyLGt1G2WlqLYpIYdSrXanhRlKaZnRfpMsWp9m5UxqG8CoiPdqtUNzJe5wACNPTNT9FwFeeYu2v2nHJO009rtjGYSp');

const { StripePayment, Match } = require('../Database/index'); // Adjust the path based on your project structure

const addPayment = async (req, res) => {
  try {
    const { userId, amount } = req.body;

    // Step 1: Create a payment intent with Stripe
    const paymentIntent = await stripe.paymentIntents.create({
      amount: amount * 100, // Amount in cents
      currency: 'usd', // Adjust the currency as needed
      metadata: { userId: userId },
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
