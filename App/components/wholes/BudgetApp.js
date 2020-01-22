import React, { useState } from "react";
import { StyleSheet, View, AsyncStorage } from "react-native";

import GraphComponent from "./GraphComponent";
import TransactionList from "./TransactionList";
import ModalButton from "./ModalButton";
import ModalScreen from './ModalScreen';

const BudgetApp = () => {
    const [modalActive, setModalActive] = useState(false);
    const [transactionArray, setTransactionArray] = useState([]);

    const storeData = async () => {
        try {
            await AsyncStorage.setItem('@MySuperStore:key', 'I like to save it.');
        } catch (error) {
            // Error saving data
        }
    };

    const retrieveData = async () => {
        try {
            const value = await AsyncStorage.getItem('TASKS');
            if (value !== null) {
                // We have data!!
                console.log(value);
            }
        } catch (error) {
            // Error retrieving data
        }
    };

  return (
    <View style={styles.container}>
        <GraphComponent/>
        <TransactionList />
        {!modalActive && 
            <ModalButton
                openModal={() => setModalActive(true)}
            />
        }
        {modalActive && 
            <ModalScreen
              closeModal={() => setModalActive(false)}
            />
        }
    </View>
  );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#2b4369',
        alignItems: 'center'
    }
});
export default BudgetApp;
