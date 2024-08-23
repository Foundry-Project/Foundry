import React from 'react';
import { SafeAreaView, View, Text, StyleSheet, ScrollView, TouchableOpacity, Image } from 'react-native';
import NavBar from '../components/NavBar';
import img from '../assets/img.webp';

const notifications = [
    { id: 1, date: '20/3/2022 - 7:30 AM', message: 'Lorem ipsum dolor sit amet consectetur. Sit volutpat urna elit faucibus urna. Ultrices ultricies imperdiet.' },
    { id: 2, date: '20/3/2022 - 7:30 AM', message: 'Lorem ipsum dolor sit amet consectetur. Sit volutpat urna elit faucibus urna. Ultrices ultricies imperdiet.' },
    { id: 3, date: '20/3/2022 - 7:30 AM', message: 'Lorem ipsum dolor sit amet consectetur. Sit volutpat urna elit faucibus urna. Ultrices ultricies imperdiet.' },
    { id: 4, date: '20/3/2022 - 7:30 AM', message: 'Lorem ipsum dolor sit amet consectetur. Sit volutpat urna elit faucibus urna. Ultrices ultricies imperdiet.' },
    { id: 5, date: '20/3/2022 - 7:30 AM', message: 'Lorem ipsum dolor sit amet consectetur. Sit volutpat urna elit faucibus urna. Ultrices ultricies imperdiet.' },
    { id: 6, date: '20/3/2022 - 7:30 AM', message: 'Lorem ipsum dolor sit amet consectetur. Sit volutpat urna elit faucibus urna. Ultrices ultricies imperdiet.' },
    { id: 7, date: '20/3/2022 - 7:30 AM', message: 'Lorem ipsum dolor sit amet consectetur. Sit volutpat urna elit faucibus urna. Ultrices ultricies imperdiet.' },
    { id: 8, date: '20/3/2022 - 7:30 AM', message: 'Lorem ipsum dolor sit amet consectetur. Sit volutpat urna elit faucibus urna. Ultrices ultricies imperdiet.' },
];

const Notification = ({ navigation }) => {
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.innerContainer}>
                <ScrollView contentContainerStyle={styles.scrollViewContent}>
                    <View style={styles.titleContainer}>
                        <Text style={styles.title}>Notifications</Text>
                    </View>
                    <TouchableOpacity style={styles.clearButton}>
                        <Text style={styles.clearText}>Clear</Text>
                    </TouchableOpacity>
                    {notifications.map(notification => (
                        <View key={notification.id} style={styles.notificationCard}>
                            <Image source={img} style={styles.notificationImage} />
                            <View style={styles.notificationText}>
                                <Text style={styles.date}>{notification.date}</Text>
                                <Text style={styles.message}>{notification.message}</Text>
                            </View>
                        </View>
                    ))}
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
        justifyContent: 'space-between', // Pushes content to the top and NavBar to the bottom
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
    },
    clearButton: {
        alignSelf: 'flex-end',
        marginBottom: 16,
    },
    clearText: {
        color: 'blue',
        fontSize: 16,
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
