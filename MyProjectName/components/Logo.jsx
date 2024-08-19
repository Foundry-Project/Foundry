import React, { useEffect, useRef } from 'react';
import { StyleSheet, Image, Animated  } from 'react-native';
import logo from '../assets/logo.webp';

function Logo() {
  const animatedValue = useRef(new Animated.Value(0)).current;

//create the animation
  useEffect(() => {
    Animated.timing(animatedValue, {
      toValue: 1,
      duration: 3000,
      useNativeDriver: true,
    }).start();
  }, [animatedValue]);

  // give the opacity the value of animatedValue
  const opacity = animatedValue;

  return (
    <Animated.View style={[styles.logoContainer, { opacity }]}>
      <Image source={logo} style={styles.logo} />
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  logoContainer: {
    position: 'absolute',
    top: 120,
    left: 0,
    right: 0,
    alignItems: 'center',
  },
  logo: {
    width: 300,
    height: 250,
  },
});

export default Logo;
