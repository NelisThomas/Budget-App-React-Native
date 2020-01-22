import React, { useState } from "react";
import { Modal, Text, View, StyleSheet, TouchableWithoutFeedback } from "react-native";
import { Icon } from "react-native-elements";

const ModalScreen = ({closeModal}) => {
  return (
    <View style={styles.container}>
      <TouchableWithoutFeedback
        onPress={() => closeModal()}
      >
        <Text>
          Close
        </Text>
      </TouchableWithoutFeedback>
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
  innerCont: {
    backgroundColor: 'purple',
    height: 100
  }
});

export default ModalScreen;
