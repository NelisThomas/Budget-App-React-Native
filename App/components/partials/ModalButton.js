import React, { useState } from "react";
import { View, Text } from "react-native";
import { Icon } from "react-native-elements";
import ModalScreen from "./ModalScreen";

const ModalButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  const clickHandler = () => {
    setIsVisible(!isVisible);
  };

  return (
    <View>
      {isVisible && (
        <View>
          <ModalScreen test={isVisible}></ModalScreen>
        </View>
      )}

      <View>
        <Icon
          reverse
          name="ios-add"
          type="ionicon"
          color="green"
          onPress={clickHandler}
        />
      </View>
    </View>
  );
};

export default ModalButton;
