import React, { useState } from "react";
import { Modal, Text, View, StyleSheet, TouchableWithoutFeedback, TextInput } from "react-native";
import { Icon } from "react-native-elements";

const ModalScreen = ({closeModal}) => {
    return (
        <View style={styles.container}>
            <TouchableWithoutFeedback
            onPress={() => closeModal()}
            >
                <View style={styles.closeButton}>
                    <Text>
                        Close
                    </Text>
                </View>
            </TouchableWithoutFeedback>

            <TextInput
                editable
                keyboardType='number-pad'
                style={styles.textInput}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        position: 'absolute',
        alignContent: 'center',
        alignItems: 'center',
        backgroundColor: '#403f3d',
        alignItems: 'center',
        flex: 1,
        marginTop: '10%',
        height: '80%',
        width: '80%',
        borderRadius: 10,
        borderColor: '#c9c7c1',
        borderWidth: 2
    },
    closeButton: {
        backgroundColor: 'red',
        borderRadius: 3
    },
    textInput: {
        height: 50,
        borderColor: 'white',
        borderWidth: 1,
        color: 'white'

    }
});

export default ModalScreen;
