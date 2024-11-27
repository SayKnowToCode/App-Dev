import React from 'react';
import { View, StyleSheet, StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Ionicons } from '@expo/vector-icons';

// Import your screens
import CustomHeader from './components/CustomHeader';
import Home from './screens/Home';
import About from './screens/About';
import New from './screens/New';
import Other from './screens/Other';

// Create Tab and Stack navigators
const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

// Tab Navigator
function AppTabs() {
    return (
        <Tab.Navigator
            screenOptions={({ route }) => ({
                headerShown: false,
                tabBarIcon: ({ focused, color, size }) => {
                    let iconName;

                    if (route.name === 'Home') {
                        iconName = focused ? 'home' : 'home-outline';
                    } else if (route.name === 'About') {
                        iconName = focused ? 'information-circle' : 'information-circle-outline';
                    } else if (route.name === 'New') {
                        iconName = focused ? 'add-circle' : 'add-circle-outline';
                    } else if (route.name === 'Other') {
                        iconName = focused ? 'ellipsis-horizontal' : 'ellipsis-horizontal-outline';
                    }

                    return <Ionicons name={iconName} size={size} color={color} />;
                },
                tabBarActiveTintColor: '#000',
                tabBarInactiveTintColor: 'gray',
            })}
        >
            <Tab.Screen name="Home" component={Home} />
            <Tab.Screen name="About" component={About} />
            <Tab.Screen name="New" component={New} />
            <Tab.Screen name="Other" component={Other} />
        </Tab.Navigator>
    );
}

// Stack Navigator
function AppStack() {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name="Home"
                component={Home}
                options={{ headerShown: false }} // You can toggle header for specific screens
            />
            <Stack.Screen
                name="Tabs"
                component={AppTabs}
                options={{ headerShown: false }} // Hide header for tabs
            />
        </Stack.Navigator>
    );
}

// Main App component
export default function App() {
    return (
        <NavigationContainer>
            <View style={styles.container}>
                <StatusBar barStyle="dark-content" backgroundColor="#f8f8f8" />
                <CustomHeader /> {/* Your custom header */}
                <AppStack />
            </View>
        </NavigationContainer>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});
