import React from 'react';
import { View, Text, Image, FlatList, StyleSheet,ScrollView } from 'react-native';

import Ionicons from 'react-native-vector-icons/MaterialCommunityIcons';

const data = [
  { id: '1', name: 'Sebastian', username: '@username', score: 1124, avatar: 'https://m.media-amazon.com/images/M/MV5BNjA0MTU2NDY3MF5BMl5BanBnXkFtZTgwNDU4ODkzMzE@._V1_.jpg', up: true },
  { id: '2', name: 'Jason', username: '@username', score: 875, avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-8CJGn4ptJOSfY1POKkaW3zH8x4I5yMutXQ&s', up: false },
  { id: '3', name: 'BLACK', username: '@username', score: 774, avatar: 'https://hips.hearstapps.com/hmg-prod/images/9th-annual-ves-awards---red-carpet.jpg', up: true }, {id: '4', name: 'BLACK', username: '@username', score: 774, avatar: 'https://hips.hearstapps.com/hmg-prod/images/9th-annual-ves-awards---red-carpet.jpg', up: true },
  {id: '5', name: 'BLACK', username: '@username', score: 774, avatar: 'https://hips.hearstapps.com/hmg-prod/images/9th-annual-ves-awards---red-carpet.jpg', up: true },{id: '8', name: 'BLACK', username: '@username', score: 774, avatar: 'https://hips.hearstapps.com/hmg-prod/images/9th-annual-ves-awards---red-carpet.jpg', up: true }
];

const Leaderboard = () => {
  const renderUser = ({ item }) => (
  <ScrollView>
      <View style={styles.userContainer}>
        
      <Image source={{ uri: item.avatar }} style={styles.userAvatar} />
      <View style={styles.userInfo}>
        
        <Text style={styles.userName}>{item.name}</Text>
        <Text style={styles.userUsername}>{item.username}</Text>
       
      </View>
      <Text style={styles.userScore}>{item.score}</Text>
      <Ionicons 
        name={item.up ? "arrow-up" : "arrow-down"} 
        size={20} 
        color={item.up ? "green" : "red"} 
        style={styles.scoreChangeIcon}
      />
      
    </View>
     </ScrollView>
  );

  return (
    <View style={styles.container}>
      {/* Leaderboard Top 3 */}
      <View style={styles.topThreeContainer}>
        <View style={styles.userTop}>
          <Text style={styles.rank}>2</Text>
          <Image source={{ uri: 'https://prod-media.beinsports.com/image/1700809223820_e311dcc0-1177-4ad1-91f0-e621f3afba06.jpg' }} style={styles.topAvatar} />
          <Text style={styles.topName}>Steven</Text>
          <Text style={styles.topScore}>1847</Text>
        </View>
        <View style={styles.userTopPrimary}>
          <Ionicons name='crown-outline' size={20} color={'gold'} />
          <Image source={{ uri: 'https://fcb-abj-pre.s3.amazonaws.com/img/jugadors/MESSI.jpg' }} style={styles.topAvatarPrimary} />
          <Text style={styles.topNamePrimary}>Leo</Text>
          <Text style={styles.topScorePrimary}>2430</Text>
        </View>
        <View style={styles.userTop}>
          <Text style={styles.rank}>3</Text>
          <Image source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNYR2v0pwofkDwd9y1bAHyTAxA1J9DGEMzYQ&s' }} style={styles.topAvatar} />
          <Text style={styles.topName}>Elisabeth</Text>
          <Text style={styles.topScore}>1674</Text>
        </View>
      </View>

      {/* Remaining Leaderboard */}
      <FlatList
        data={data}
        renderItem={renderUser}
        keyExtractor={item => item.id}
        style={styles.list}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
    marginVertical:'5%',
   
  },
  topThreeContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: '5%',
    backgroundColor: '#fff',
    borderRadius: 10,
    marginVertical: '20%',
  },
  userTop: {
    alignItems: 'center',
    flex: 1,
    
  },
  userTopPrimary: {
    alignItems: 'center',
    flex: 1,
    marginVertical: '-5%',
  },
  topAvatar: {
    width: '70%',
    height: undefined,
    aspectRatio: 1,
    borderRadius: 50,
    borderColor: '#007AFF',
    borderWidth: 2,
    marginVertical: '10%',
  },
  topAvatarPrimary: {
    width: '80%',
    height: undefined,
    aspectRatio: 1,
    borderRadius: 50,
    borderColor: 'gold',
    borderWidth: 2,
  },
  topName: {
    marginTop: '10%',
    fontSize: 16,
    fontWeight: 'bold',
  },
  topNamePrimary: {
    marginTop: '5%',
    fontSize: 18,
    fontWeight: 'bold',
    color: '#FF8C00',
  },
  topScore: {
    fontSize: 14,
    color: '#007AFF',
  },
  topScorePrimary: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#FF8C00',
  },
  list: {
    marginHorizontal: '5%',
    marginTop: '-10%',
  },
  userContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: '5%',
    borderBottomColor: '#ddd',
    borderBottomWidth: 1,
  },
  userAvatar: {
    width: '15%',
    height: undefined,
    aspectRatio: 1,
    borderRadius: 25,
    marginRight: '3%',
  },
  userInfo: {
    flex: 1,
  },
  userName: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  userUsername: {
    fontSize: 14,
    color: '#666',
  },
  userScore: {
    fontSize: 16,
    fontWeight: 'bold',
    marginRight: '2%',
  },
  scoreChangeIcon: {
    marginLeft: '2%',
  },
  rank: {
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default Leaderboard;
