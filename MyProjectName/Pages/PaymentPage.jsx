
// import React, { useState, useEffect } from 'react';
// import { View, Text, Button, Alert, StyleSheet } from 'react-native';
// import { CardForm, useStripe, useConfirmPayment } from '@stripe/stripe-react-native'; // Moved useConfirmPayment import here
// import axios from 'axios';
// import { useAppContext } from '../context'; // Adjust the path to your context file
// import { BASE_URL } from '../wifiip.js'; // Import the base URL

// const CheckoutForm = () => {
//   const { userid } = useAppContext();
//   const [clientSecret, setClientSecret] = useState(null);
//   const [cardDetails, setCardDetails] = useState(null);
//   const { confirmPayment, loading } = useConfirmPayment();

//   useEffect(() => {
//     const fetchPaymentIntent = async () => {
//       try {
//         const payObj = {
//           amount: 1000, // Amount in the smallest currency unit (e.g., 10 TND = 1000 cents)
//           userId: userid,
//         };
//         const response = await axios.post(`${BASE_URL}/payment/create`, payObj);
//         setClientSecret(response.data.clientSecret);
//         console.log('Client secret received:', response.data.clientSecret);
//       } catch (error) {
//         console.error('Error fetching client secret:', error);
//         Alert.alert('Error', 'There was an issue preparing the payment.');
//       }
//     };

//     fetchPaymentIntent();
//   }, [userid]);

//   const handlePayPress = async () => {
//     if (!clientSecret || !cardDetails?.complete) {
//       Alert.alert('Error', 'Client secret is missing, or card details are incomplete.');
//       return;
//     }

//     try {
//       // Confirm the payment with Stripe using CardForm's collected data
//       const { error, paymentIntent } = await confirmPayment(clientSecret, {
//         type: 'Card',
//         paymentMethodType: 'Card',
//         // paymentMethodData: {
//         //   billingDetails: { email: 'email@example.com' }, // Add any billing details if required
//         // },
//       });

//       if (error) {
//         console.error('Payment error:', error);
//         Alert.alert('Payment failed', error.message);
//       } else if (paymentIntent?.status === 'succeeded') {
//         Alert.alert('Payment successful', 'Your payment was successful.');
//         // Optionally navigate to another screen here
//       }
//     } catch (err) {
//       console.error('Unexpected error:', err);
//       Alert.alert('Error', 'An unexpected error occurred. Please try again later.');
//     }
//   };

//   return (
//     <View style={styles.container}>
//       <Text style={styles.title}>Checkout</Text>
//       <CardForm
//         style={styles.cardForm}
//         onFormComplete={(details) => {
//           console.log('Card Details onFormComplete:', details);
//           setCardDetails(details);
//         }}
//       />
//       <Button
//         title={loading ? 'Processing...' : 'Pay'}
//         onPress={handlePayPress}
//         disabled={!clientSecret || !cardDetails?.complete || loading}
//         color="#db4444"
//       />
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     padding: 20,
//     backgroundColor: '#f5f5f5',
//   },
//   title: {
//     fontSize: 24,
//     marginBottom: 20,
//     textAlign: 'center',
//   },
//   cardForm: {
//     width: '100%',
//     height: 200, // Adjust height as needed
//     marginVertical: 30,
//   },
// });

// export default CheckoutForm;


// import React, { useState, useEffect } from 'react';
// import { View, Text, Button, Alert, StyleSheet } from 'react-native';
// import { CardForm, useStripe, useConfirmPayment } from '@stripe/stripe-react-native';
// import axios from 'axios';
// import { useAppContext } from '../context'; // Adjust the path to your context file
// import { BASE_URL } from '../wifiip.js'; // Import the base URL

// const CheckoutForm = () => {
//   const { userid } = useAppContext();
//   const [clientSecret, setClientSecret] = useState(null);
//   const [cardDetails, setCardDetails] = useState(null);
//   const { confirmPayment, loading } = useConfirmPayment();

//   useEffect(() => {
//     const fetchPaymentIntent = async () => {
//       try {
//         const payObj = {
//           amount: 1000, // Amount in the smallest currency unit (e.g., 10 TND = 1000 cents)
//           userId: userid,
//         };
//         const response = await axios.post(`${BASE_URL}/payment/create`, payObj);
//         setClientSecret(response.data.clientSecret);
//         console.log('Client secret received:', response.data.clientSecret);
//       } catch (error) {
//         console.error('Error fetching client secret:', error);
//         Alert.alert('Error', 'There was an issue preparing the payment.');
//       }
//     };

//     fetchPaymentIntent();
//   }, [userid]);

//   const handlePayPress = async () => {
//     console.log('Pay button pressed'); // Debugging log

//     if (!clientSecret || !cardDetails?.complete) {
//       Alert.alert('Error', 'Client secret is missing, or card details are incomplete.');
//       return;
//     }

//     try {
//       console.log('Confirming payment...'); // Debugging log
      
//       // Confirm the payment with Stripe using CardForm's collected data
//       const { error, paymentIntent } = await confirmPayment(clientSecret, {
//         type: 'Card',
//         paymentMethodType: 'Card',
//         paymentMethodData: {
//           billingDetails: { email: 'email@example.com' }, // Add any billing details if required
//         },
//       });

//       console.log('Payment intent result:', { error, paymentIntent }); // Log the full response

//       if (error) {
//         console.error('Payment error:', error);
//         Alert.alert('Payment failed', error.message);
//       } else if (paymentIntent?.status === 'succeeded') {
//         Alert.alert('Payment successful', 'Your payment was successful.');
//         console.log('Payment successful:', paymentIntent); // Additional log
//         // Optionally navigate to another screen here
//       } else {
//         console.log('PaymentIntent status:', paymentIntent?.status); // Log other statuses
//       }
//     } catch (err) {
//       console.error('Unexpected error:', err);
//       Alert.alert('Error', 'An unexpected error occurred. Please try again later.');
//     }
//   };

//   return (
//     <View style={styles.container}>
//       <Text style={styles.title}>Checkout</Text>
//       <CardForm
//         style={styles.cardForm}
//         onFormComplete={(details) => {
//           console.log('Card Details onFormComplete:', details);
//           setCardDetails(details);
//         }}
//       />
//       <Button
//         title={loading ? 'Processing...' : 'Pay'}
//         onPress={handlePayPress}
//         disabled={!clientSecret || !cardDetails?.complete || loading}
//         color="#db4444"
//       />
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     padding: 20,
//     backgroundColor: '#f5f5f5',
//   },
//   title: {
//     fontSize: 24,
//     marginBottom: 20,
//     textAlign: 'center',
//   },
//   cardForm: {
//     width: '100%',
//     height: 200, // Adjust height as needed
//     marginVertical: 30,
//   },
// });

// export default CheckoutForm;


import React, { useState, useEffect } from 'react';
import { View, Text, Button, Alert, StyleSheet } from 'react-native';
import { CardForm, useStripe, useConfirmPayment } from '@stripe/stripe-react-native';
import axios from 'axios';
import { useAppContext } from '../context'; // Adjust the path to your context file
import { BASE_URL } from '../wifiip.js'; // Import the base URL

const CheckoutForm = () => {
  const { userid } = useAppContext();
  const [clientSecret, setClientSecret] = useState(null);
  const [cardDetails, setCardDetails] = useState(null);
  const { confirmPayment, loading } = useConfirmPayment();

  useEffect(() => {
    const fetchPaymentIntent = async () => {
      try {
        const payObj = {
          amount: 1000, // Amount in the smallest currency unit (e.g., 10 TND = 1000 cents)
          userId: userid,
        };
        const response = await axios.post(`${BASE_URL}/payment/create`, payObj);
        setClientSecret(response.data.clientSecret);
        console.log('Client secret received:', response.data.clientSecret);
      } catch (error) {
        console.error('Error fetching client secret:', error);
        Alert.alert('Error', 'There was an issue preparing the payment.');
      }
    };

    fetchPaymentIntent();
  }, [userid]);

  const handlePayPress = async () => {
    console.log('Pay button pressed'); // Debugging log

    if (!clientSecret || !cardDetails?.complete) {
      Alert.alert('Error', 'Client secret is missing, or card details are incomplete.');
      return;
    }

    try {
      console.log('Confirming payment...'); // Debugging log

      // Confirm the payment with Stripe using CardForm's collected data
      const { error, paymentIntent } = await confirmPayment(clientSecret, {
        type: 'Card',
        paymentMethodType: 'Card',
        paymentMethodData: {
          billingDetails: { email: 'email@example.com' }, // Add any billing details if required
        },
      });

      console.log('Payment intent result:', { error, paymentIntent }); // Log the full response

      if (error) {
        console.error('Payment error:', error);
        Alert.alert('Payment failed', error.message);
      } else if (paymentIntent?.status?.toLowerCase() === 'succeeded') {
        Alert.alert('Payment successful', 'Your payment was successful.');
        console.log('Payment successful:', paymentIntent); // Additional log
        // Optionally navigate to another screen here
      } else {
        console.log('Unhandled PaymentIntent status:', paymentIntent?.status); // Log other statuses
      }
    } catch (err) {
      console.error('Unexpected error:', err);
      Alert.alert('Error', 'An unexpected error occurred. Please try again later.');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Checkout</Text>
      <CardForm
        style={styles.cardForm}
        onFormComplete={(details) => {
          console.log('Card Details onFormComplete:', details);
          setCardDetails(details);
        }}
      />
      <Button
        title={loading ? 'Processing...' : 'Pay'}
        onPress={handlePayPress}
        disabled={!clientSecret || !cardDetails?.complete || loading}
        color="#db4444"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f5f5f5',
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
    textAlign: 'center',
  },
  cardForm: {
    width: '100%',
    height: 200, // Adjust height as needed
    marginVertical: 30,
  },
});

export default CheckoutForm;
