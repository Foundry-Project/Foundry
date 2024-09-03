import React, { useState, useEffect } from 'react';
import { View, Text, Button, Alert, StyleSheet } from 'react-native';
import { CardField, useStripe } from '@stripe/stripe-react-native';
import axios from 'axios';
import { useNavigation } from '@react-navigation/native'; // Using React Navigation for navigation
import { useCart } from '../../context'; // Ensure correct import based on your context setup

const CheckoutForm = () => {
  const stripe = useStripe();
  const navigation = useNavigation(); // Use React Navigation for navigation
  const { totalAmount } = useCart(); // Access totalAmount from your context
   const [clientSecret, setClientSecret] = useState<string | null>(null);

  useEffect(() => {
    const fetchPaymentIntent = async () => {
      try {
        const payObj = {
          amount: totalAmount,
          userId: userId,
        };
        
        const response = await axios.post('http://localhost:3000/payment/checkout', payObj);
        setClientSecret(response.data.clientSecret);
        console.log('Client secret received:', response.data.clientSecret);
      } catch (error) {
        console.error('Error fetching client secret:', error);
        Alert.alert('Error', 'There was an issue preparing the payment.');
      }
    };

    fetchPaymentIntent();
  }, [userId, totalAmount]);

  const handlePayPress = async () => {
    if (!stripe || !clientSecret) {
      Alert.alert('Error', 'Stripe is not properly initialized.');
      return;
    }

    // Confirm the payment with Stripe
    const { error, paymentIntent } = await stripe.confirmPayment(clientSecret, {
      paymentMethodType: 'Card',
    });

    if (error) {
      console.error('Payment error:', error);
      Alert.alert('Payment failed', error.message);
    } else if (paymentIntent?.status === 'succeeded') {
      Alert.alert('Payment successful', 'Your payment was successful.');
      navigation.navigate('CheckoutSucceed'); // Adjust based on your route name
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Checkout</Text>
      <CardField
        postalCodeEnabled={false}
        placeholder={{
          number: '4242 4242 4242 4242',
        }}
        cardStyle={styles.cardStyle}
        style={styles.cardField}
      />
      <Button
        title="Pay"
        onPress={handlePayPress}
        disabled={!clientSecret}
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
  cardStyle: {
    backgroundColor: '#FFFFFF',
    textColor: '#000000',
  },
  cardField: {
    width: '100%',
    height: 50,
    marginVertical: 30,
  },
});

export default CheckoutForm;
