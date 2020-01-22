import React, { useState } from "react";
import { View, TouchableWithoutFeedback, Text } from "react-native";
import { Icon } from "react-native-elements";

const ModalButton = ({openModal}) => {

  return (
    <TouchableWithoutFeedback
      onPress={() => openModal()}
    >
      <Icon
        reverse
        name="ios-add"
        type="ionicon"
        color="green"
      />
    </TouchableWithoutFeedback>
  );
};

export default ModalButton;
