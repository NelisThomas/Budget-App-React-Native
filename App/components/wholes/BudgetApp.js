import React, { useState } from "react";
import { StyleSheet, View, Text, Modal } from "react-native";

import GraphComponent from "./GraphComponent";
import TransactionList from "./TransactionList";
import ModalButton from "./ModalButton";
import ModalScreen from './ModalScreen';

const BudgetApp = () => {
    const [modalActive, setModalActive] = useState(false);

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
