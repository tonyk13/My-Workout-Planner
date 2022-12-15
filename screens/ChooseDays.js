import React from 'react';
import {StyleSheet, View, Text, Pressable} from 'react-native';

const ChooseDays = props => {
    function handleNext() {
        console.log("next");
    }

    return (
        <View style={styles.container}>
            <Text style={{fontSize: 20, textAlign: 'center', paddingBottom: 30}}>
                Which days can you work out?
            </Text>

            <Pressable
                style={{backgroundColor: 'white', padding: 10, borderRadius: 12, width: 220, elevation: 8}}
                android_ripple={{color: 'green', borderless: false, borderRadius: 12}}
                >
                <Text style={{fontSize: 20, color: 'black', textAlign: 'center'}}>
                    Sunday
                </Text>
            </Pressable>
            <View padding={5}>

            </View>
            <Pressable 
                style={{backgroundColor: 'white', padding: 10, borderRadius: 12, width: 220, elevation: 8}}
                android_ripple={{color: 'green', borderless: false, borderRadius: 12}}
                >
                <Text style={{fontSize: 20, color: 'black', textAlign: 'center'}}>
                    Monday
                </Text>
            </Pressable>
            <View padding={5}>

            </View>
            <Pressable 
                style={{backgroundColor: 'white', padding: 10, borderRadius: 12, width: 220, elevation: 8}}
                android_ripple={{color: 'green', borderless: false, borderRadius: 12}}
                >
                <Text style={{fontSize: 20, color: 'black', textAlign: 'center'}}>
                    Tuesday
                </Text>
            </Pressable>
            <View padding={5}>

            </View>
            <Pressable 
                style={{backgroundColor: 'white', padding: 10, borderRadius: 12, width: 220, elevation: 8}}
                android_ripple={{color: 'green', borderless: false, borderRadius: 12}}
                >
                <Text style={{fontSize: 20, color: 'black', textAlign: 'center'}}>
                    Wednesday
                </Text>
            </Pressable>
            <View padding={5}>

            </View>
            <Pressable 
                style={{backgroundColor: 'white', padding: 10, borderRadius: 12, width: 220, elevation: 8}}
                android_ripple={{color: 'green', borderless: false, borderRadius: 12}}
                >
                <Text style={{fontSize: 20, color: 'black', textAlign: 'center'}}>
                    Thursday
                </Text>
            </Pressable>
            <View padding={5}>

            </View>
            <Pressable 
                style={{backgroundColor: 'white', padding: 10, borderRadius: 12, width: 220, elevation: 8}}
                android_ripple={{color: 'green', borderless: false, borderRadius: 12}}
                >
                <Text style={{fontSize: 20, color: 'black', textAlign: 'center'}}>
                    Friday
                </Text>
            </Pressable>
            <View padding={5}>

            </View>
            <Pressable 
                style={{backgroundColor: 'white', padding: 10, borderRadius: 12, width: 220, elevation: 8}}
                android_ripple={{color: 'green', borderless: false, borderRadius: 12}}
                >
                <Text style={{fontSize: 20, color: 'black', textAlign: 'center'}}>
                    Saturday
                </Text>
            </Pressable>

            <View padding={20}>

            </View>

            <View flexDirection="row">
                <Pressable
                    style={{backgroundColor: '#ce2544', padding: 20, borderRadius: 12, width: 120}}
                    android_ripple={{color: 'white', borderless: false, borderRadius: 12}}
                    onPress={handleNext}
                    >
                    <Text style={{fontSize: 20, color: 'white', textAlign: 'center'}}>
                        RESET
                    </Text>
                </Pressable>
                <View padding={15}>

                </View>
                <Pressable
                        style={{backgroundColor: 'green', padding: 20, borderRadius: 12, width: 120}}
                        android_ripple={{color: 'white', borderless: false, borderRadius: 12}}
                        onPress={handleNext}
                        >
                        <Text style={{fontSize: 20, color: 'white', textAlign: 'center'}}>
                            NEXT
                        </Text>
                </Pressable>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: -10
    },
    availableTopics: {
        flex: 1,
        margin: 0
    },
    title: {
        fontSize: 18,
        paddingVertical: 0
    }
});

export default ChooseDays;