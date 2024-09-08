
// import React from 'react';
// import { SafeAreaView, View, Text, StyleSheet } from 'react-native';
// import Icons from 'react-native-vector-icons/Ionicons';

// function NotifIcons({ color = 'white', hasNotifications = false }) {
//   return (
//     <SafeAreaView style={styles.container}>
//       <View style={styles.iconContainer}>
//         <Icons name='notifications-outline' size={20} color={color} />
//         {hasNotifications && <View style={styles.redDot} />}
//       </View>
//       <Text style={{ marginTop: '1%', color: color }}>Info</Text>
//     </SafeAreaView>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   iconContainer: {
//     position: 'relative',
//   },
//   redDot: {
//     position: 'absolute',
//     top: -5,
//     right: -5,
//     width: 10,
//     height: 10,
//     borderRadius: 5,
//     backgroundColor: 'red',
//   },
// });

// export default NotifIcons;

import React from 'react';
import { SafeAreaView, View, Text, StyleSheet } from 'react-native';
import Icons from 'react-native-vector-icons/Ionicons';

function NotifIcons({ color = 'white', hasNotifications = false }) {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.iconContainer}>
        <Icons name='notifications-outline' size={20} color={color} />
        {/* Show red dot only if there are notifications */}
        {hasNotifications && <View style={styles.redDot} />}
      </View>
      <Text style={{ marginTop: '1%', color: color }}>Info</Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  iconContainer: {
    position: 'relative',
  },
  redDot: {
    position: 'absolute',
    top: -5,
    right: -5,
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: 'red',
  },
});

export default NotifIcons;
