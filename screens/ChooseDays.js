import React from 'react';
import {StyleSheet, View, Text, Pressable} from 'react-native';

const ChooseDays = props => {
    // find a way to disable remaining day buttons when days.length == maxDays
    // find a day to change day button color after being pressed
    // disable "NEXT" button until days.length == maxDays
    // when "RESET" button is pressed unselect all day buttons

    global.days = [];
    
    if (global.routine = "FULL BODY") {
        let maxDays = 3;
        // can't select consecutive days
    }
    if (global.routine = "UPPER LOWER") {
        let maxDays = 4;
    }
    if (global.routine = "5 DAY PUSH PULL LEGS") {
        let maxDays = 5;
    }
    if (global.routine = "6 DAY PUSH PULL LEGS") {
        let maxDays = 6;
    }

    function handleNext() {
        console.log("next");
        console.log(days);
    }

    function handleReset() {
        days.length = 0;
        console.log(days);
    }

    return (
        <View style={styles.container}>
            <Text style={{fontSize: 20, textAlign: 'center', paddingBottom: 30}}>
                Which days can you work out?
            </Text>

            <Pressable
                style={{backgroundColor: 'white', padding: 10, borderRadius: 12, width: 220, elevation: 8}}
                android_ripple={{color: 'green', borderless: false, borderRadius: 12}}
                onPress={() => days.push("Sunday")}
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
                onPress={() => days.push("Monday")}
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
                onPress={() => days.push("Tuesday")}
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
                onPress={() => days.push("Wednesday")}
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
                onPress={() => days.push("Thursday")}
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
                onPress={() => days.push("Friday")}
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
                onPress={() => days.push("Saturday")}
                >
                <Text style={{fontSize: 20, color: 'black', textAlign: 'center'}}>
                    Saturday
                </Text>
            </Pressable>

            <View padding={20}>

            </View>

            <View flexDirection="row">
                <Pressable
                    style={styles.resetButton}
                    android_ripple={{color: 'white', borderless: false, borderRadius: 12}}
                    onPress={handleReset}
                    >
                    <Text style={{fontSize: 20, color: 'white', textAlign: 'center'}}>
                        RESET
                    </Text>
                </Pressable>
                <View padding={15}>

                </View>
                <Pressable
                    style={styles.nextButton}
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
    },
    resetButton: {
        backgroundColor: '#ce2544',
        padding: 20,
        borderRadius: 12,
        width: 120,
        elevation: 3
    },
    nextButton: {
        backgroundColor: 'green',
        padding: 20,
        borderRadius: 12,
        width: 120,
        elevation: 3
    }
});

export default ChooseDays;