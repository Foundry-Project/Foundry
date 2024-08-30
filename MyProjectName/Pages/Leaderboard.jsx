import React from 'react';
import { View, Text, Image, FlatList, StyleSheet, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

const leaderboardData = [
  { id: '1', name: 'Leo', points: 340, image: 'https://img.olympics.com/images/image/private/t_1-1_300/f_auto/v1687307644/primary/cqxzrctscdr8x47rly1g' },
  { id: '2', name: 'Jake', points: 300, image: 'https://m.media-amazon.com/images/M/MV5BNjA0MTU2NDY3MF5BMl5BanBnXkFtZTgwNDU4ODkzMzE@._V1_.jpg' },
  { id: '3', name: 'Gojo', points: 240, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-8CJGn4ptJOSfY1POKkaW3zH8x4I5yMutXQ&s' },
  { id: '4', name: 'H', points: 200, image: 'https://scontent.ftun2-2.fna.fbcdn.net/v/t39.30808-6/448954514_1009318720803169_8150786676694455326_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=1MaGgKIzdxwQ7kNvgGcTUaW&_nc_ht=scontent.ftun2-2.fna&oh=00_AYAtg4VZ7awvCJsNjLToNa8oA3lBzXBpnyHHpaWUU09ANA&oe=66D637C3' },
  { id: '5', name: 'Skander', points: 299, image: 'https://scontent.ftun2-2.fna.fbcdn.net/v/t39.30808-6/417543108_8186213894727101_3686918146502554772_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=SqnH5mbn3rUQ7kNvgHpYXnQ&_nc_ht=scontent.ftun2-2.fna&oh=00_AYARPbNVVS2CoX3XOIK4OuDeLrepJZ1Qm5ncTsC9FBT4MA&oe=66D61BDC' },
  { id: '6', name: 'Iheb', points: 280, image: 'https://scontent.ftun2-2.fna.fbcdn.net/v/t39.30808-6/320596982_1366545180753212_5587115914580901047_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=833d8c&_nc_ohc=lR8ehVHvp8cQ7kNvgEVKp9S&_nc_ht=scontent.ftun2-2.fna&oh=00_AYCeqDAN03vJ003S5L80El2FurWzLSWwKzk5VX6B_JA8Mw&oe=66D61F8A' },
  { id: '7', name: 'Louiz', points: 221, image: 'https://scontent.ftun2-2.fna.fbcdn.net/v/t39.30808-6/294421711_152264370720801_5811520362820882838_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=oT6tHViFo6YQ7kNvgGpZ-bL&_nc_ht=scontent.ftun2-2.fna&oh=00_AYAEUcLl3eZPV0HjVPkTNLKWkLHG09hymGRnf5lertEu0g&oe=66D613B1' },
  { id: '8', name: 'Fourat', points: 301, image: 'https://scontent.ftun2-2.fna.fbcdn.net/v/t39.30808-6/236903142_1755071148029149_2565624037998871111_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=a5f93a&_nc_ohc=SMJUhXca_aQQ7kNvgHKxG1P&_nc_ht=scontent.ftun2-2.fna&_nc_gid=AxrUSn1L1Eab7hxuptO0rjF&oh=00_AYDm0VJUkU1K4zOg5Rs0unRXik5yJ2MdC5v-RXfDOA4fRw&oe=66D630AE' },
  { id: '9', name: 'Hssin', points: 299, image: 'https://scontent.ftun2-2.fna.fbcdn.net/v/t31.18172-8/18238458_10213318820473459_2618234230653671874_o.jpg?_nc_cat=110&ccb=1-7&_nc_sid=1d70fc&_nc_ohc=4lnIDCq_yt0Q7kNvgElw-gS&_nc_ht=scontent.ftun2-2.fna&oh=00_AYB7QZznQQ0HqoGVPfy_r1NbpGJlWuF5zjqHb4W8tyvchw&oe=66F7B910' },
  { id: '10', name: 'Najm', points: 210, image: 'https://scontent.ftun2-2.fna.fbcdn.net/v/t1.6435-1/192790910_497807158233809_8416446244804759926_n.jpg?stp=c0.7.720.719a_dst-jpg_s200x200&_nc_cat=108&ccb=1-7&_nc_sid=0ecb9b&_nc_ohc=7KCsHhxJN68Q7kNvgFV34mi&_nc_ht=scontent.ftun2-2.fna&oh=00_AYCXk1jgHMm_XWrsErH7yrIP4FmwCEAhkaKT8v3YBcLVYA&oe=66F7F4B4' },
  { id: '11', name: 'Shady Mourad', points: 300, image: 'https://media.discordapp.net/attachments/1234973477660790804/1276233078632878184/36837_1452703410738_4993719_n.jpg?ex=66d159ed&is=66d0086d&hm=acecf9fc7e7b9b4e5e49ea1bfec35d6e6b870140b49b47d65f55a9f5c7d40943&=&format=webp&width=280&height=409' },
]



leaderboardData.sort((a, b) => b.points - a.points)

const LeaderboardScreen = () => {
  const renderItem = ({ item, index }) => (
    <View style={styles.itemContainer}>
      <View style={styles.rankContainer}>
        <Text style={styles.rank}>{index + 1}</Text>
      </View>
      <Image source={{ uri: item.image }} style={styles.avatar} />
      <View style={styles.nameContainer}>
        <Text style={styles.name}>{item.name}</Text>
        <Text style={styles.points}>{item.points} points</Text>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      
      <View style={styles.topUserContainer}>
        <Image source={{ uri: leaderboardData[0].image }} style={styles.topAvatar} />
        <Text style={styles.topUserName}>{leaderboardData[0].name}</Text>
        <Text style={styles.topUserPoints}>{leaderboardData[0].points} points</Text>
      </View>
      <FlatList
        data={leaderboardData}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        style={styles.list}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: '3%',
    paddingVertical:"10%"
  },
  header: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: '5%',
  },
  topUserContainer: {
    alignItems: 'center',
    marginBottom: '7%',
  },
  topAvatar: {
    width: '30%',
    height: undefined,
    aspectRatio: 1, 
    borderRadius: 100, 
    borderColor:"#FF8500",
    borderWidth:2
  },
  topUserName: {
    fontSize: 16,
    fontWeight: 'bold',
    marginVertical: '5%',
  },
  topUserPoints: {
    fontSize: 14,
    color: '#FF4500',
  },
  list: {
    flex: 1,
  },
  itemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: '2.5%', 
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  rankContainer: {
    width: '10%',
    alignItems: 'center',
  },
  rank: {
    fontSize: 14,
    fontWeight: 'bold',
  },
  avatar: {
    width: '15%', 
    height: undefined,
    aspectRatio: 1, 
    borderRadius: 35, 
    marginRight: '8%',
    borderColor:"blue",
    borderWidth:1,
  },
  nameContainer: {
    flex: 1,
  },
  name: {
    fontSize: 12,
    fontWeight: 'bold',
  },
  points: {
    fontSize: 10,
    color: '#407BFF',
    marginVertical:"2%"
  },
});

export default LeaderboardScreen;
