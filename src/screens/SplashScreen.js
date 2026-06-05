import React, { useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

export default function SplashScreen({ navigation }) {
    useEffect(() => {
        const timer = setTimeout(() => {
            navigation.replace('Onboarding');
        }, 3000);

        return () => clearTimeout(timer);
    }, []);

    return (
        <LinearGradient
            colors={['#63B5AF', '#EEF8F7']}
            style={styles.container}
        >
            <Text style={styles.text}>mono</Text>
        </LinearGradient>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        color: '#fff',
        fontSize: 42,
        fontWeight: '700',
        letterSpacing: 2,
    },
});