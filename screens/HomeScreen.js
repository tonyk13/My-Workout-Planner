import React, { useRef, useEffect } from 'react';
import { Animated, Pressable, StyleSheet, Text, SafeAreaView, View } from 'react-native';
import { useIsFocused } from "@react-navigation/native";

const HomeScreen = props => {
    const fadeAnim = useRef(new Animated.Value(0)).current;  // Initial value for opacity: 0

    const FadeInView = (props) => {
        const isFocused = useIsFocused();

        useEffect(() => {
            if (isFocused) {
                Animated.timing(
                    fadeAnim,
                    {
                        delay: 250,
                        toValue: 1,
                        duration: 2000,
                        useNativeDriver: true
                    }
                ).start();
            }
        }, [isFocused]);
      
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
        fadeAnim.setValue(0);
        props.navigation.navigate('Weekly Availability');
    }

    return (
        <SafeAreaView style={styles.container}>
        
            <FadeInView style={{ width: 300, height: 200 }}>
                <Text style={{fontSize: 24, textAlign: 'center', margin: 10}}>WHAT'S STOPPING YOU?</Text>
            </FadeInView>

            <View padding={40}>

            </View>

            <Pressable 
                style={styles.button} 
                onPress={handleStart}
                android_ripple={{color: 'white', borderless: false, borderRadius: 12}}
                >
                <Text 
                    style={styles.text}>
                    {"START"}
                </Text>
            </Pressable>

            <Text style={styles.vesuvi}>
                VESUVI
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
        paddingVertical: 20,
        paddingHorizontal: 40,
        borderRadius: 12,
        elevation: 3,
        backgroundColor: 'green',
    },
    text: {
        fontSize: 20,
        lineHeight: 25,
        fontWeight: 'bold',
        letterSpacing: 0.25,
        color: 'white',
    },
    vesuvi: {
        fontSize: 16,
        paddingTop: 120
    }
});

const shaboy = StyleSheet.create({
    container: {
        paddingTop: 150,
    }
})

export default HomeScreen;