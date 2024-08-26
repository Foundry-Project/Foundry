import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image, Pressable } from 'react-native';

const CasinoInterface = () => {
  const ima = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPZrKmaxmMuJH5nA2futuzfHFA2766g7Axmg&s'

  return (
    
    <View style={styles.container}>
      
      {/* Top section with season prize */}
      <View style={styles.nav}>

      </View>
      <View style={styles.title}>
        
      <Image source={{uri:ima} } style={styles.image} />

        {/* <span id="rewardId" /> */}
       
      </View>
      <View style={styles.top} ></View>
      <View style={styles.topSection}>
        <Text style={styles.topSectionText}>YOUR POINTS</Text>
        <Text style={styles.chipsText}>7,980</Text>
      </View>

      {/* Middle section with Win 50M Chips and progress */}
      <View style={styles.middleSection}>
        <Text style={styles.winText}>WIN 10 DT </Text>
        <View style={styles.gameModes}>
          <Text style={styles.gameText}>Items found</Text>
          <Text style={styles.gameText}>1</Text>
        </View>
        <View style={styles.progressBar}>
          <View style={styles.progress} />
        </View>
        <Text style={styles.timeLeft}>18H 42M</Text>
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
    backgroundColor: '#002D5E',
    padding: 20,
    borderRadius: 10,
    marginBottom: 30,
  },
  topSectionText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
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
    backgroundColor: '#002D5E',
    padding: 20,
    borderRadius: 10,
    marginBottom: 20,
    marginTop:40
  },
  winText: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  gameModes: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 5,
  },
  gameText: {
    color: '#FFFFFF',
    fontSize: 14,
  },
  progressBar: {
    height: 10,
    backgroundColor: '#1A1A1A',
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
    fontSize: 14,
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
  top:{marginTop:68},
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
    backgroundColor: '#3b4467',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    width:140,
    marginLeft:100,
    height:50,
    marginTop:58
  },
  backButtonText2: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
    borderRadius:75 
  },
});

export default CasinoInterface;
