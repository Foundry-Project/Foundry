import React, { useEffect,useState } from 'react';
import { SafeAreaView, View, Text, StyleSheet, ScrollView, TouchableOpacity, Image } from 'react-native';
import NavBar from '../components/NavBar';
import jdida from '../assets/jdida.png';
import axios from 'axios';
import { BASE_URL } from '../wifiip.js'; // Import the base URL
import { useAppContext } from '../context'; // Adjust the path to your context file
import { useNavigation } from '@react-navigation/native';

const Notification = () => {
    const { userid, notifications, setnotifications, postId, setpostId } = useAppContext();
    const navigation = useNavigation(); // Initialize the navigation
    const [ref, setref] = useState(false);

    useEffect(() => {
        // Fetch notifications from the API
        const fetchNotifications = async () => {
            try {
                const response = await axios.get(`${BASE_URL}/notif/notifications/${userid}`);
                setnotifications(response.data);
            } catch (error) {
                console.error('Error fetching notifications:', error);
            }
        };

        fetchNotifications();
    }, [ref]);
console.log("nottt",notifications.length);

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.innerContainer}>
                <View style={styles.titleContainer}>
                    <Text style={styles.title}>Notifications</Text>
                </View>
                <ScrollView contentContainerStyle={styles.scrollViewContent}>
                    <TouchableOpacity style={styles.clearButton}>
                        <Text style={styles.clearText}>Clear</Text>
                    </TouchableOpacity>
                    
                    {notifications.length === 0 ? ( // Check if there are no notifications
                        <Text style={styles.noNotifications}>No notifications available</Text>
                    ) : (
                        notifications.map(notification => (
                            <TouchableOpacity
                                key={notification.id}
                                style={styles.notificationCard}
                                onPress={() => {
                                    setpostId(notification.postId); // Set the post ID
                                    navigation.navigate('Matchechnotif'); // Navigate to the 'Matchechnotif' screen

                                    // Update notification status
                                    axios.put(`${BASE_URL}/notif/updatenotif/${notification.id}`, { seen: true })
                                        .then(() => {
                                            console.log("Notification updated successfully");
                                            setref(!ref)
                                        })
                                        .catch((err) => {
                                            console.error("Error updating notification:", err); // Improved error handling
                                        });
                                }}
                            >
                                <Image source={jdida} style={styles.notificationImage} />
                                <View style={styles.notificationText}>
                                    <Text style={styles.date}>{new Date(notification.date).toLocaleDateString()}</Text>
                                    <Text style={styles.message}>{notification.content}</Text>
                                </View>
                            </TouchableOpacity>
                        ))
                    )}
                </ScrollView>
                <NavBar navigation={navigation} />
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F8FCFB',
    },
    innerContainer: {
        flex: 1,
        justifyContent: 'space-between',
    },
    scrollViewContent: {
        flexGrow: 1,
        padding: 20,
    },
    titleContainer: {
        alignItems: 'center',
        marginBottom: 25,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginTop: 25,
    },
    clearButton: {
        alignSelf: 'flex-end',
        marginBottom: 16,
    },
    clearText: {
        color: 'blue',
        fontSize: 16,
    },
    noNotifications: { // Style for 'No notifications available' text
        textAlign: 'center',
        fontSize: 18,
        marginVertical: 20,
        color: 'gray',
    },
    notificationCard: {
        flexDirection: 'row',
        backgroundColor: '#f0f0f0',
        borderRadius: 10,
        padding: 12,
        marginBottom: 12,
        alignItems: 'center',
    },
    notificationImage: {
        width: 50,
        height: 50,
        marginRight: 12,
    },
    notificationText: {
        flex: 1,
    },
    date: {
        fontSize: 14,
        fontWeight: 'bold',
    },
    message: {
        fontSize: 14,
        marginTop: 4,
    },
});

export default Notification;
