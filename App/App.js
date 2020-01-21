import React from "react";
import { StyleSheet, Text, View } from "react-native";

import BudgetApp from "./components/wholes/BudgetApp";

export default function App() {
  return (
    <View style={styles.container}>
      <BudgetApp />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});
