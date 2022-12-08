import React, { useRef, useEffect } from 'react';
import { Animated, Pressable, StyleSheet, Text, SafeAreaView } from 'react-native';

const HomeScreen = props => {
    const FadeInView = (props) => {
        const fadeAnim = useRef(new Animated.Value(0)).current;  // Initial value for opacity: 0
    
        useEffect(() => {
            Animated.timing(
                fadeAnim,
                {
                    delay: 1000,
                    toValue: 1,
                    duration: 2000,
                    useNativeDriver: true
                }
            ).start();
        }, [fadeAnim])
      
        return (
            <Animated.View                 // Special animatable View
                style={{
                ...props.style,
                opacity: fadeAnim,         // Bind opacity to animated value
                }}
            >
                {props.children}
            </Animated.View>
        );
    }

    function handleStart() {
        // find a way to reset the animation
        props.navigation.navigate('Weekly Availability');
    }

    return (
        <SafeAreaView style={styles.container}>
        
            <FadeInView style={{ width: 300, height: 200 }}>
                <Text style={{fontSize: 24, textAlign: 'center', margin: 10}}>WHAT'S STOPPING YOU?</Text>
            </FadeInView>

            <Pressable 
                style={styles.button} 
                onPress={handleStart}>
                <Text 
                    style={styles.text}>
                    {"START"}
                </Text>
            </Pressable>

            <Text style={shaboy.container}>
                BROUGHT TO YOU BY VESUVI
            </Text>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: 100,
        fontSize: 24,
        paddingLeft: 10,
        paddingRight: 10,
    },
    button: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 12,
        paddingHorizontal: 32,
        borderRadius: 4,
        elevation: 3,
        backgroundColor: 'black',
    },
    text: {
        fontSize: 16,
        lineHeight: 21,
        fontWeight: 'bold',
        letterSpacing: 0.25,
        color: 'white',
    },
});

const shaboy = StyleSheet.create({
    container: {
        paddingTop: 150,
    }
})

export default HomeScreen;