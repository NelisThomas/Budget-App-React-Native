import React, { useState } from "react";
import { View, Text, StyleSheet, FlatList, SafeAreaView } from "react-native";
import { List, ListItem } from "react-native-elements";

const TransactionList = props => {
    return (
        <View style={styles.container}>
            <FlatList
                data={props.transactionList}
                renderItem={({ item }) => (
                    <View style={styles.itemRow}>
                        <View
                            style={{
                                flex: 1,
                                backgroundColor: "blue"
                            }}
                        >
                            <Text style={styles.item}>{item.date}</Text>
                        </View>
                        <View
                            style={{
                                backgroundColor: "red",
                                flex: 1
                            }}
                        >
                            <Text style={styles.item}>{item.type}</Text>
                        </View>
                        <View
                            style={{
                                backgroundColor: "green",
                                flex: 1
                            }}
                        >
                            <Text style={styles.item}>{item.value}</Text>
                        </View>
                    </View>
                )}
                keyExtractor={item => item.id}
            ></FlatList>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        width: "90%",
        height: "30%",
        backgroundColor: "yellow"
    },
    item: {
        textAlign: "center"
    },
    itemRow: {
        flexDirection: "row",
        marginTop: 5
    }
});

export default TransactionList;
