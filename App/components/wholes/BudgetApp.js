import React, { useState } from "react";
import { StyleSheet, View, Text } from "react-native";

import GraphComponent from "../partials/GraphComponent";
import TransactionList from "../partials/TransactionList";
import ModalButton from "../partials/ModalButton";

const BudgetApp = () => {
  return (
    <View style={styles.container}>
      <ModalButton />
      <TransactionList />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {}
});
export default BudgetApp;
