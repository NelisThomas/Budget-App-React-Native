import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const GraphComponent = () => {
    return (
        <View style={styles.container}>
            <Text>
                GraphComponent
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      backgroundColor: "red",
      alignItems: "center",
      justifyContent: "center",
      width: '90%',
      height: '30%'
    }
  });

export default GraphComponent