import {React, useState} from 'react';
import {StyleSheet, View, Text, Pressable} from 'react-native';

global.days = [];
let maxDays = 0;

const ChooseDays = props => {
    // once a button is selected, pressing it again should unselect it
    // find a way to disable remaining day buttons when days.length == maxDays
    // find a day to change day button color after being pressed
    // disable "NEXT" button until days.length == maxDays
    // when "RESET" button is pressed unselect all day buttons

    // 0 = not selected or disabled yet
    // 1 = selected
    // 2 = disabled
    const [sundayState, setSundayState] = useState(0);
    const [mondayState, setMondayState] = useState(0);
    const [tuesdayState, setTuesdayState] = useState(0);
    const [wednesdayState, setWednesdayState] = useState(0);
    const [thursdayState, setThursdayState] = useState(0);
    const [fridayState, setFridayState] = useState(0);
    const [saturdayState, setSaturdayState] = useState(0);

    console.log(global.routine);
    
    if (global.routine == "FULL BODY") {
        maxDays = 3;
        // shouldn't be able to select consecutive days
    }
    if (global.routine == "UPPER LOWER") {
        maxDays = 4;
    }
    if (global.routine == "5 DAY PUSH PULL LEGS") {
        maxDays = 5;
    }
    if (global.routine == "6 DAY PUSH PULL LEGS") {
        maxDays = 6;
    }

    function addSunday() {
        if (days.length == 0 || days.indexOf("Sunday") == -1) {
            if (days.length < maxDays) {
                days.push("Sunday");
                setSundayState(1);
                
                if (global.routine == "FULL BODY") {
                    setMondayState(2);
                }
            } 
        }
    }

    function addMonday() {
        if (days.length == 0 || days.indexOf("Monday") == -1) {
            if (days.length < maxDays) {
                days.push("Monday");
                setMondayState(1);
    
                if (global.routine == "FULL BODY") {
                    setTuesdayState(2);
                }
            } 
        }
    }
    
    function addTuesday() {
        if (days.length == 0 || days.indexOf("Tuesday") == -1) {
            if (days.length < maxDays) {
                days.push("Tuesday");
                setTuesdayState(1);
    
                if (global.routine == "FULL BODY") {
                    setWednesdayState(2);
                }
            } 
        }
    }

    function addWednesday() {
        if (days.length == 0 || days.indexOf("Wednesday") == -1) {
            if (days.length < maxDays) {
                days.push("Wednesday");
                setWednesdayState(1);
    
                if (global.routine == "FULL BODY") {
                    setThursdayState(2);
                }
            } 
        }
    }

    function addThursday() {
        if (days.length == 0 || days.indexOf("Thursday") == -1 ) {
            if (days.length < maxDays) {
                days.push("Thursday");
                setThursdayState(1);
    
                if (global.routine == "FULL BODY") {
                    setFridayState(2);
                }
            } 
        }
    }

    function addFriday() {
        if (days.length == 0 || days.indexOf("Friday") == -1 ) {
            if (days.length < maxDays) {
                days.push("Friday");
                setFridayState(1);

                if (global.routine == "FULL BODY") {
                    setSaturdayState(2);
                }
            } 
        }
    }

    function addSaturday() {
        if (days.length == 0 || days.indexOf("Saturday") == -1 ) {
            if (days.length < maxDays) {
                days.push("Saturday");
                setSaturdayState(1);

                if (global.routine == "FULL BODY") {
                    setSundayState(2);
                }
            } 
        }
    }

    if (days.length == maxDays) {
        if (sundayState == 0) setSundayState(2);
        if (mondayState == 0) setMondayState(2);
        if (tuesdayState == 0) setTuesdayState(2);
        if (wednesdayState == 0) setWednesdayState(2);
        if (thursdayState == 0) setThursdayState(2);
        if (fridayState == 0) setFridayState(2);
        if (saturdayState == 0) setSaturdayState(2);     
    }

    function handleReset() {
        console.log("reset");
        days.length = 0;
        setSundayState(0);
        setMondayState(0);
        setTuesdayState(0);
        setWednesdayState(0);
        setThursdayState(0);
        setFridayState(0);
        setSaturdayState(0); 
        console.log(days);
    }

    function handleNext() {
        console.log("next");
        console.log(days);
    }

    return (
        <View style={styles.container}>
            <Text style={{fontSize: 20, textAlign: 'center', paddingBottom: 30}}>
                Which days can you work out?
            </Text>

            <Pressable
                style={[styles.dayButton, { backgroundColor: (sundayState > 0) ? (sundayState > 1) ? 'gray' : '#53a2ed' : 'white' }]}
                android_ripple={{color: 'white', borderless: false, borderRadius: 12}}
                onPress={addSunday}
                disabled={sundayState == 2}
                >
                <Text style={{fontSize: 20, color: (sundayState == 0) ? 'black' : 'white', textAlign: 'center'}}>
                    Sunday
                </Text>
            </Pressable>
            <View padding={5}>

            </View>
            <Pressable 
                style={[styles.dayButton, { backgroundColor: (mondayState > 0) ? (mondayState > 1) ? 'gray' : '#53a2ed' : 'white' }]}
                android_ripple={{color: 'white', borderless: false, borderRadius: 12}}
                onPress={addMonday}
                disabled={mondayState == 2}
                >
                <Text style={{fontSize: 20, color: (mondayState == 0) ? 'black' : 'white', textAlign: 'center'}}>
                    Monday
                </Text>
            </Pressable>
            <View padding={5}>

            </View>
            <Pressable 
                style={[styles.dayButton, { backgroundColor: (tuesdayState > 0) ? (tuesdayState > 1) ? 'gray' : '#53a2ed' : 'white' }]}
                android_ripple={{color: 'white', borderless: false, borderRadius: 12}}
                onPress={addTuesday}
                disabled={tuesdayState == 2}
                >
                <Text style={{fontSize: 20, color: (tuesdayState == 0) ? 'black' : 'white', textAlign: 'center'}}>
                    Tuesday
                </Text>
            </Pressable>
            <View padding={5}>

            </View>
            <Pressable 
                style={[styles.dayButton, { backgroundColor: (wednesdayState > 0) ? (wednesdayState > 1) ? 'gray' : '#53a2ed' : 'white' }]}
                android_ripple={{color: 'white', borderless: false, borderRadius: 12}}
                onPress={addWednesday}
                disabled={wednesdayState == 2}
                >
                <Text style={{fontSize: 20, color: (wednesdayState == 0) ? 'black' : 'white', textAlign: 'center'}}>
                    Wednesday
                </Text>
            </Pressable>
            <View padding={5}>

            </View>
            <Pressable 
                style={[styles.dayButton, { backgroundColor: (thursdayState > 0) ? (thursdayState > 1) ? 'gray' : '#53a2ed' : 'white' }]}
                android_ripple={{color: 'white', borderless: false, borderRadius: 12}}
                onPress={addThursday}
                disabled={thursdayState == 2}                
                >
                <Text style={{fontSize: 20, color: (thursdayState == 0) ? 'black' : 'white', textAlign: 'center'}}>
                    Thursday
                </Text>
            </Pressable>
            <View padding={5}>

            </View>
            <Pressable 
                style={[styles.dayButton, { backgroundColor: (fridayState > 0) ? (fridayState > 1) ? 'gray' : '#53a2ed' : 'white' }]}
                android_ripple={{color: 'white', borderless: false, borderRadius: 12}}
                onPress={addFriday}
                disabled={fridayState == 2}                
                >
                <Text style={{fontSize: 20, color: (fridayState == 0) ? 'black' : 'white', textAlign: 'center'}}>
                    Friday
                </Text>
            </Pressable>
            <View padding={5}>

            </View>
            <Pressable 
                style={[styles.dayButton, { backgroundColor: (saturdayState > 0) ? (saturdayState > 1) ? 'gray' : '#53a2ed' : 'white' }]}
                android_ripple={{color: 'white', borderless: false, borderRadius: 12}}
                onPress={addSaturday}
                disabled={saturdayState == 2}                
                >
                <Text style={{fontSize: 20, color: (saturdayState == 0) ? 'black' : 'white', textAlign: 'center'}}>
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
    dayButton: {
        backgroundColor: 'white', 
        padding: 10, 
        borderRadius: 12, 
        width: 220, 
        elevation: 8
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