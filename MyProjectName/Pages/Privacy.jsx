import { View, Text, ScrollView, StyleSheet } from 'react-native';
import React from 'react';

const Privacy = () => {
  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <Text style={styles.header}>Privacy Policy</Text>
        <Text style={styles.paragraph}>
          This Privacy Policy applies to the Foundry app ("Application"), a lost and found service created by Foundry ("Service Provider"). This service is provided for free and is intended for use "AS IS".
        </Text>
        <Text style={styles.subHeader}>Information Collection and Use</Text>
        <Text style={styles.paragraph}>
          The Application collects certain information when you download and use it. This may include details such as:
        </Text>
        <Text style={styles.listItem}>• Your device's Internet Protocol address (e.g., IP address)</Text>
        <Text style={styles.listItem}>• The pages you visit within the Application</Text>
        <Text style={styles.listItem}>• The time and date of your visits</Text>
        <Text style={styles.listItem}>• The operating system on your device</Text>
        <Text style={styles.paragraph}>
          The Application does not gather precise location data from your mobile device.
        </Text>
        <Text style={styles.paragraph}>
          The Service Provider may use this information to contact you with important updates, required notices, and marketing promotions. For a better experience, you may be asked to provide personally identifiable information such as your email, age, location, and gender. This information will be retained and used as described in this Privacy Policy.
        </Text>
        <Text style={styles.subHeader}>Third-Party Access</Text>
        <Text style={styles.paragraph}>
          The Service Provider may share aggregated, anonymized data with third parties to help improve the Application and service. The Application also uses third-party services, each with its own Privacy Policy:
        </Text>
        <Text style={styles.listItem}>• Google Play Services</Text>
        <Text style={styles.listItem}>• Facebook</Text>
        <Text style={styles.paragraph}>
          The Service Provider may disclose User Provided and Automatically Collected Information in certain situations:
        </Text>
        <Text style={styles.listItem}>• As required by law</Text>
        <Text style={styles.listItem}>• To protect your safety or the safety of others</Text>
        <Text style={styles.listItem}>• To investigate fraud or respond to a government request</Text>
        <Text style={styles.subHeader}>Opt-Out Rights</Text>
        <Text style={styles.paragraph}>
          You can stop all collection of information by uninstalling the Application using your device's standard uninstall process.
        </Text>
        <Text style={styles.subHeader}>Data Retention</Text>
        <Text style={styles.paragraph}>
          The Service Provider will retain your data as long as you use the Application. To request deletion of your data, contact us at foundry.tn@gmail.com.
        </Text>
        <Text style={styles.subHeader}>Children's Privacy</Text>
        <Text style={styles.paragraph}>
          The Application does not knowingly collect data from children under 13. If you believe your child has provided personal information, please contact us to have it removed.
        </Text>
        <Text style={styles.subHeader}>Security</Text>
        <Text style={styles.paragraph}>
          The Service Provider is committed to protecting your information through physical, electronic, and procedural safeguards.
        </Text>
        <Text style={styles.subHeader}>Changes to This Policy</Text>
        <Text style={styles.paragraph}>
          This Privacy Policy may be updated periodically. Please review this page regularly for changes.
        </Text>
        <Text style={styles.footer}> 2024</Text>
        <Text style={styles.footer}>
          Contact Us: foundry.tn@gmail.com
        </Text>
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

export default Privacy;
