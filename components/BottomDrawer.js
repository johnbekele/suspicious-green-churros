
import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';


export default function BottomDrawer ({ navigation }) {
  return (
    <View style={styles.bottomDrawer}>
      <Text style={styles.drawerText}>This is a bottom drawer!</Text>
      <TouchableOpacity onPress={() => navigation.closeDrawer()}>
        <Text style={styles.closeButton}>Close</Text>
      </TouchableOpacity>
    </View>
  );
}



const styles = StyleSheet.create({
  bottomDrawer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: '#fff',
    padding: 20,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    elevation: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: -3 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
  },
  drawerText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  closeButton: {
    fontSize: 16,
    color: 'red',
    marginTop: 20,
  },
});