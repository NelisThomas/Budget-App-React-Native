import React, { useState } from "react";
import { View, Text } from "react-native";
import { Icon } from "react-native-elements";

const ModalButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <View>
      <View>
        <Icon
          reverse
          name="ios-add"
          type="ionicon"
          color="green"
          onPress={() => setIsVisible(!isVisible)}
        />
      </View>
    </View>
  );
};

export default ModalButton;
