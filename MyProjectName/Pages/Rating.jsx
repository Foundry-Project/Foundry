import NavBar from '../components/NavBar';
import Logo from '../components/Logo';
import Button from '../components/Button';
import { StyleSheet, Text, View, SafeAreaView, Pressable } from 'react-native';

function Rating() {
  return (
    <SafeAreaView style={styles.container}>
      {/* Logo with margin */}
      <Logo style={styles.logo} />
      <View style={styles.textcontainer}>  
      </View>
      <Text style={styles.mainText}>Your opinion matters to us</Text>
      <View style={styles.textcontainer2}></View>
      <Text style={styles.secondaryText}>
        We work super hard to serve you best
      </Text>
      <Text style={styles.secondaryText}>
        and would love to know how would you rate our app
      </Text>
      <View style={styles.starsContainer}>
        <Text style={styles.star}>⭐</Text>
        <Text style={styles.star}>⭐</Text>
        <Text style={styles.star}>⭐</Text>
        <Text style={styles.star}>⭐</Text>
        <Text style={styles.star}>⭐</Text>
      </View>
      <View style={styles.submit}></View>
      <Button text="Submit" style={styles.submitButton} />
      <View style={styles.notnow}></View>
      <Pressable style={styles.notNowButton}>
        <Text style={styles.notNowText}>Not Now !</Text>
      </Pressable>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F9FF', // Adjusted background color
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20, // Added padding for spacing
  },
  logo: {
    marginBottom: 30, // Added margin for spacing between logo and text
  },
  mainText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 10, // Spacing between text
    textAlign: 'center', // Center the text
  },
  secondaryText: {
    fontSize: 16,
    color: '#666',
    textAlign: 'center',
    marginBottom: 5, // Spacing between secondary text lines
  },
  starsContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginVertical: 20, // Space above and below stars
  },
  star: {
    fontSize: 32, // Increase star size
    marginHorizontal: 5, // Space between stars
  },
  submitButton: {
    color:'#a9a9a9',
    backgroundColor: '#E0E7FF', // Adjust button color to light blue
    paddingVertical: 10,
    paddingHorizontal: 40,
    borderRadius: 25, // Make button rounded
    marginBottom: 20, // Space between buttons
  },
  notNowButton: {
    marginTop: 10,
  },
  notNowText: {
    fontSize: 14,
    color: '#666', // Lighter color for "Not Now"
    textDecorationLine: 'underline', // Add underline to match the screenshot
  },
  textcontainer:{marginBottom:200},
  textcontainer2:{marginBottom:40},
  submit:{marginBottom:20},
  notnow:{marginBottom:15}
});

export default Rating
