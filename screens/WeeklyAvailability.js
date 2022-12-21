import React from 'react';
import { StyleSheet, View, Text, Pressable } from 'react-native';
import { useState } from 'react';

const WeeklyAvailability = props => {
    const [days, setDays] = useState(3);
    let showDays = false;
    global.routine = "";
    global.days.length = 0;

    if (days == 3) {
        global.routine = "FULL BODY";
        console.log(global.routine);
    }
    if (days == 4) {
        global.routine = "UPPER LOWER";
        console.log(global.routine);
    }
    if (days == 5) {
        global.routine = "5 DAY PUSH PULL LEGS";
        console.log(global.routine);
    }
    if (days == 6) {
        global.routine = "6 DAY PUSH PULL LEGS";
        console.log(global.routine);
    }

    if (days >= 3 && days <= 7) {
        showDays = true;
    }

    function handleNext() {
        props.navigation.navigate('Choose Days');
    }

    return (
        <View style={styles.container} flexDirection="column">
            <View style={styles.howManyDays}>
                <Text style={styles.title}>How many days per week?</Text>
            </View>

            <View flexDirection="row">
                <View>
                    <Pressable 
                        style={styles.plusMinusButtons}
                        onPress={() => {
                            setDays((current) => current - 1);
                        }}
                        android_ripple={{color: 'white', borderless: false, borderRadius: 12}}
                        disabled={days == 3}
                        >
                        <Text style={{fontSize: 48, color: 'white'}}>-</Text>
                    </Pressable>
                </View>
                <View paddingTop={15} padding={35}>
                    <Text style={{fontSize: 40}}>
                        {days}
                    </Text>
                </View>
                <View>
                    <Pressable 
                        style={styles.plusMinusButtons}
                        onPress={() => {
                            setDays((current) => current + 1);
                        }}
                        android_ripple={{color: 'white', borderless: false, borderRadius: 12}}
                        disabled={days == 6}>
                        <Text style={{fontSize: 48, color: 'white'}}>+</Text>
                    </Pressable>
                </View>
            </View>

            <View paddingBottom={50} paddingTop={20}>
                {days == 3 && <Text style={styles.title}>FULL BODY</Text>}
                {days == 4 && <Text style={styles.title}>UPPER LOWER</Text>}
                {days == 5 && <Text style={styles.title}>5 DAY PUSH PULL LEGS</Text>}
                {days == 6 && <Text style={styles.title}>6 DAY PUSH PULL LEGS</Text>}
            </View>

            <View>
                {showDays && <Pressable style={styles.nextButton}
                    android_ripple={{color: 'white', borderless: false, borderRadius: 12}}
                    onPress={handleNext}
                    >
                    <Text style={{fontSize: 20, color: 'white', textAlign: 'center'}}>
                        NEXT
                    </Text>
                </Pressable>}
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
        padding: 20,
        paddingTop: 100,
        paddingBottom: 100,
    },
    howManyDays: {
        flex: 1,
        margin: 20,
        flexDirection: 'row'
    },
    title: {
        fontSize: 24,
        alignItems: 'center',
        justifyContent: 'center',
        margin: -2
    },
    plusMinusButtons: {
        backgroundColor: '#53a2ed',
        justifyContent: "center",
        elevation: 3,
        padding: 10,
        flexDirection: "row",
        width: 80,
        borderRadius: 12,
    },
    nextButton: {
        elevation: 3,
        backgroundColor: 'green', 
        padding: 20, 
        borderRadius: 12, 
        width: 120
    }
});

export default WeeklyAvailability;