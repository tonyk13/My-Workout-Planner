import React from 'react';
import { StyleSheet, View, Text, Pressable } from 'react-native';
import { useState } from 'react';

const WeeklyAvailability = props => {
    const [days, setDays] = useState(3);
    let showDays = false;

    if (days >= 3 && days <= 7) {
        showDays = true;
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
                <View padding={25}>
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
                        disabled={days == 7}>
                        <Text style={{fontSize: 48, color: 'white'}}>+</Text>
                    </Pressable>
                </View>
            </View>
            <View>
                {showDays && <Pressable 
                    style={{backgroundColor: 'black', padding: 20, borderRadius: 12, width: 120}}
                    android_ripple={{color: 'white', borderless: false, borderRadius: 12}}
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
        paddingBottom: 250
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
        backgroundColor: 'black',
        justifyContent: "center",
        elevation: 3,
        padding: 10,
        flexDirection: "row",
        width: 80,
        borderRadius: 12,
    }
});

export default WeeklyAvailability;