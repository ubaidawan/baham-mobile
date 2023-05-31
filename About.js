import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const About = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Welcome to Baham!</Text>
            <Text style={styles.description}>
                Baham is a learning project turned initiative that aims to reduce the carbon footprint from Karachi and optimize the use of private vehicles by sharing rides among university students, staff, and faculty members.
            </Text>
            <Text style={styles.description}>
                Our goal is to create a sustainable transportation network within the university community, promoting carpooling and reducing traffic congestion.
            </Text>
            <Text style={styles.description}>
                Together, we can make a positive impact on the environment and foster a sense of community by connecting people who share similar routes and schedules.
            </Text>
            <Text style={styles.footer}>Join Baham today and be part of the solution!</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: '#fff',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    description: {
        fontSize: 16,
        marginBottom: 10,
    },
    footer: {
        fontSize: 14,
        fontStyle: 'italic',
        marginTop: 'auto',
    },
});

export default About;