import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const BudgetApp = () => {
    return (
        <View>
            <GraphComponent/>
            <ExpensesList/>
            <AddExpenseButton/>
            <ExpensesModal/>
        </View>
    )
}