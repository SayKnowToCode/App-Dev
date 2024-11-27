// components/CustomHeader.js
import React from 'react';
import { View, TextInput, StyleSheet, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function CustomHeader() {
    return (
        <View style={styles.headerContainer}>
            <TouchableOpacity>
                <Ionicons name="person-circle-outline" size={30} color="black" />
            </TouchableOpacity>
            <TextInput
                style={styles.searchBar}
                placeholder="Search"
                placeholderTextColor="#999"
            />
            <View style={styles.iconsContainer}>
                <TouchableOpacity>
                    <Ionicons name="chatbubbles-outline" size={24} color="black" />
                </TouchableOpacity>
                <TouchableOpacity style={styles.iconSpacing}>
                    <Ionicons name="notifications-outline" size={24} color="black" />
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    headerContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 10,
        height: 60,
        backgroundColor: '#f8f8f8',
        elevation: 4,
    },
    searchBar: {
        flex: 1,
        marginHorizontal: 10,
        paddingHorizontal: 10,
        height: 40,
        borderRadius: 20,
        backgroundColor: '#e0e0e0',
        color: '#000',
    },
    iconsContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    iconSpacing: {
        marginLeft: 10,
    },
});
