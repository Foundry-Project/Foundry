import { View, Text, ScrollView, StyleSheet } from 'react-native';
import React from 'react';

const Terms = () => {
  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <Text style={styles.header}>Terms & Conditions</Text>
        <Text style={styles.paragraph}>
          These terms and conditions apply to the Foundry app, hereafter referred to as "Application," a lost-and-found service created by Foundry, hereafter referred to as "Service Provider," as a free service.
        </Text>
        <Text style={styles.paragraph}>
          By downloading or using the Application, you agree to these terms. Please read them carefully. Unauthorized copying, modification, or distribution of the Application, or any part of it, is strictly prohibited. All rights related to the Application remain the property of the Service Provider.
        </Text>
        <Text style={styles.paragraph}>
          The Service Provider reserves the right to modify the Application or charge for its services at any time. Any charges will be clearly communicated to you.
        </Text>
        <Text style={styles.subHeader}>Data Security & Responsibility</Text>
        <Text style={styles.paragraph}>
          The Application stores and processes personal data to provide the Service. You are responsible for maintaining the security of your device and access to the Application. Jailbreaking or rooting your phone may compromise security and prevent the Application from functioning correctly.
        </Text>
        <Text style={styles.subHeader}>Third-Party Services</Text>
        <Text style={styles.paragraph}>
          The Application uses third-party services with their own Terms and Conditions:
        </Text>
        <Text style={styles.listItem}>• Google Play Services</Text>
        <Text style={styles.listItem}>• Facebook</Text>
        <Text style={styles.listItem}>• Expo</Text>
        <Text style={styles.subHeader}>Internet & Data Usage</Text>
        <Text style={styles.paragraph}>
          Some functions require an active internet connection. The Service Provider is not responsible if the Application does not function fully due to lack of internet access or data limits.
        </Text>
        <Text style={styles.paragraph}>
          Charges for data usage, including roaming, are your responsibility. Ensure you have permission if you are not the bill payer for the device used.
        </Text>
        <Text style={styles.subHeader}>Application Updates</Text>
        <Text style={styles.paragraph}>
          The Service Provider may update the Application to ensure its functionality. You agree to accept these updates to continue using the Application.
        </Text>
        <Text style={styles.paragraph}>
          The Service Provider may also cease providing the Application at any time. Upon termination, you must stop using the Application and delete it from your device.
        </Text>
        <Text style={styles.subHeader}>Changes to These Terms</Text>
        <Text style={styles.paragraph}>
          The Service Provider may update these Terms and Conditions periodically. Please review this page regularly for any changes.
        </Text>
        <Text style={styles.footer}>Contact Us: Foundryn@gmail.com</Text>
        <Text style={styles.footer}>© 2024 Foundry. All rights reserved.</Text>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f4f4f4',
    paddingHorizontal: '5%',
    paddingVertical: '5%',
  },
  scrollContainer: {
    paddingVertical: '5%',
  },
  header: {
    fontSize: 26,
    fontWeight: 'bold',
    marginBottom: '5%',
    textAlign: 'center',
    color: '#2b2b2b',
  },
  subHeader: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: '5%',
    marginBottom: '3%',
    color: '#333',
  },
  paragraph: {
    fontSize: 16,
    lineHeight: 24,
    marginBottom: '4%',
    color: '#555',
  },
  listItem: {
    fontSize: 16,
    lineHeight: 24,
    marginLeft: '5%',
    marginBottom: '2.5%',
    color: '#555',
  },
  footer: {
    fontSize: 14,
    textAlign: 'center',
    marginTop: '7%',
    color: '#888',
  },
});

export default Terms;
