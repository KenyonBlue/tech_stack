import React, { Component } from 'react';
import { CardSection } from './common';
import { Text } from 'react-native';

class ListItem extends Component {
    render() {
        return (
            <CardSection>
                <Text>{this.props.library.item.title}</Text>
            </CardSection>
        );
    }
}

export default ListItem;