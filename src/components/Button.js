import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

const Button = ({ onPress, children }) => {
    const { button, buttonText } = styles;

    return (
        <TouchableOpacity onPress={onPress} style={button}>
            <Text style={buttonText}>
                {children}
            </Text>
        </TouchableOpacity>
    );
};

const styles = {
    buttonText: {
        alignSelf: 'center',
        color: '#007aff',
        fontWeight: '600',
        paddingTop: 10,
        paddingBottom: 10
    },
    button: {
        flex: 1,
        alignSelf: 'stretch',
        backgroundColor: '#fff',
        borderWidth: 1,
        borderRadius: 5,
        borderColor: '#007aff',
        marginLeft: 5,
        marginRight: 5
    }
};

export default Button;
