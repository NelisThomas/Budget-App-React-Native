import React from 'react';
import { View } from 'react-native';

import GraphComponent from '../partials/GraphComponent';
import TransactionList from '../partials/TransactionList';
import ModalButton from '../partials/ModalButton';
import Modal from '../partials/Modal';

const BudgetApp = () => {
    return (
        <View>
            <GraphComponent/>
            <TransactionList/>
            <ModalButton/>
            <Modal/>
        </View>
    )
}

export default BudgetApp