import React from 'react';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import tw from 'tailwind-react-native-classnames';


const HomeScreen = () => {
    return (
        /* 
            SafeAreaView is a type of View that prevents the text/other stuff from 
            entering parts of the screen taken up by notches or other default things on the phone
        */
        <SafeAreaView>
            <Text>
                This is the homescreen
            </Text>
        </SafeAreaView>
    )
}

export default HomeScreen;

const styles = StyleSheet.create({

});