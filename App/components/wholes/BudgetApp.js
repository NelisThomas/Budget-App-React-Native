import React, { useState } from "react";
import { StyleSheet, View, Text } from "react-native";

import GraphComponent from "./GraphComponent";
import TransactionList from "./TransactionList";
import ModalButton from "./ModalButton";
import ModalScreen from './ModalScreen';

const BudgetApp = () => {
  return (
    <View style={styles.container}>
        <GraphComponent/>
        <ModalScreen/>
        <TransactionList />
        <ModalButton/>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
      flex: 1
  }
});
export default BudgetApp;
