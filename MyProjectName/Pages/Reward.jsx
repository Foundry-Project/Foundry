import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image, Pressable } from 'react-native';

const CasinoInterface = () => {
  const ima = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPZrKmaxmMuJH5nA2futuzfHFA2766g7Axmg&s'
  const [timeLeft, setTimeLeft] = useState({
    days: 1,
    hours: 11,
    minutes: 9
  });
  return (
    
    <View style={styles.container}>
        

      {/* Top section with season prize */}
      <View style={styles.nav}>

      </View>
      <View style={styles.imagecontainer} >
      <View style={styles.title}>
        
      <Image source={{uri:ima} } style={styles.image} />

        {/* <span id="rewardId" /> */}
       
      </View>
      </View>
      <View style={styles.countdownContainer}>
        <View style={styles.countdownItems}>
          {/* Next Spin Text */}
          <Text style={styles.nextSpinText}>Call Down</Text>

          <View style={styles.countdownItem}>
            <View style={styles.circle}>
              <Text style={styles.countdownNumber}>{timeLeft.days}</Text>
            </View>
            <Text style={styles.countdownLabel}>Days</Text>
          </View>
          <View style={styles.countdownItem}>
            <View style={styles.circle}>
              <Text style={styles.countdownNumber}>{timeLeft.hours}</Text>
            </View>
            <Text style={styles.countdownLabel}>Hours</Text>
          </View>
          <View style={styles.countdownItem}>
            <View style={styles.circle}>
              <Text style={styles.countdownNumber}>{timeLeft.minutes}</Text>
            </View>
            <Text style={styles.countdownLabel}>Minutes</Text>
          </View>
        </View>
      </View>

      <View style={styles.top} ></View>
      <View style={styles.topSection}>
        <Text style={styles.topSectionText}>your rewards</Text>
        <Text style={styles.chipsText}>🧸</Text>
      </View>

      {/* Middle section with Win 50M Chips and progress */}
      <View style={styles.middleSection}>
        <Text style={styles.winText}>your points                                             980</Text>
        <View style={styles.whitespace}></View>
        <View style={styles.gameModes}>
          <Text style={styles.gameText}>Items found</Text>
          <Text style={styles.gameText}>1</Text>
        </View>
        <View style={styles.whitespace3}></View>

        <View style={styles.progressBar}>
          <View style={styles.progress} />
        </View>
        <View style={styles.whitespace2}></View>
        <Text style={styles.timeLeft}>last update                                   18H 42M</Text>
      </View>
<View style={styles.button}>

  <Pressable style={styles.backButton2}>
    <Text style={styles.backButtonText2}>Claim Rewards</Text>
  </Pressable>
</View>
      {/* Bottom section with quest button */}
      {/* <TouchableOpacity style={styles.questButton}>
        <Text style={styles.questText}>QUEST 2</Text>
      </TouchableOpacity> */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#D8DFE9',
    padding: 20,
  },
  topSection: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 80,
    backgroundColor: '#6892D5',
    padding: 20,
    borderRadius: 10,
    marginBottom: 10,
    marginTop:-9
  },
  topSectionText: {
    color: 'white',
    fontSize: 17,
    // fontWeight: 'bold',
  },
  chipsText: {
    color: 'white',
    fontSize: 24,
    fontWeight: 'bold',
  },
  jokerIcon: {
    width: 50,
    height: 50,
  },
  middleSection: {
    backgroundColor: '#6892D5',
    padding: 20,
    borderRadius: 10,
    marginBottom: 20,
    marginTop:18
  },
  winText: {
    color: '#FFFFFF',
    fontSize: 17,
    marginBottom: 10,
  },
  gameModes: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 5,
  },
  gameText: {
    color: '#FFFFFF',
    fontSize: 17,
  },
  progressBar: {
    height: 10,
    backgroundColor: '#a9b9d6',
    borderRadius: 5,
    marginVertical: 10,
  },
  progress: {
    width: '50%',
    height: '100%',
    backgroundColor: '#00FF00',
    borderRadius: 5,
  },
  timeLeft: {
    color: '#FFFFFF',
    fontSize: 17,
    textAlign: 'right',
  },
  questButton: {
    backgroundColor: '#FF8C00',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
  },
  questText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
  top:{marginTop:28},
  title:{ width: 145,
    height: 145, 
    borderRadius: 75,
    backgroundColor: '#E4EfE9', 
    justifyContent: 'center', 
    alignItems: 'center',marginLeft:100},
  nav:{marginBottom:80},
  space:{marginBottom:10},
  backButton: {
    backgroundColor: '#667EEA',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 120,
    width:140,
    marginLeft:20,
    height:50
  },
  backButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
  backButton2:{
    backgroundColor: '#a3a3a3',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    width:350,
    // marginLeft:100,
    height:50,
    marginTop:20,
    borderBlockColor:'#4A70B5'

  },
  backButtonText2: {
    color: '#1D1A39',
    fontSize: 16,
    fontWeight: 'bold',
    
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
    borderRadius:75 ,
    marginBottom:50,
    marginTop:50,
  },
  whitespace:{marginTop:12},
  whitespace2:{marginTop:12},
  whitespace3:{marginTop:12},
  countdownContainer: {
    marginBottom: 20,
    padding: 20,
    backgroundColor: '#779dd9',
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 31,
  },
  countdownItems: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  countdownItem: {
    alignItems: 'center',
    marginHorizontal: 10,
  },
  countdownNumber: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#3855E8',
  },
  countdownLabel: {
    fontSize: 10,
    color: '#3a5169',
  },
  circle: {
    width: 45,  // Reduced size
    height: 45, // Reduced size
    borderRadius: 22.5,  // Half of width/height for a perfect circle
    backgroundColor: '#E4EfE9',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 5,
  },
  nextSpinText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#F6F4EB',
    marginRight: 20,  // Spacing between text and circles
  },
  imagecontainer:{marginTop:-30}
});

export default CasinoInterface;
