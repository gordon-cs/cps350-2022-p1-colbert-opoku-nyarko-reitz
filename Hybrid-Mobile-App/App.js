import { StyleSheet, View, Text, Image, Colors } from 'react-native';
import { BottomAppBar, TopAppBar } from './src/UI/AppBar.js';
import React, { Component, useEffect, useState } from 'react';
import EventCards from './src/UI/EventCards.js';
import UndoPreference from './src/UI/UndoPreference.js';
import {UndoButton} from './src/UI/UndoPreference.js';



const App = () => {
    return (
      <View style={styles.container}>
        <TopAppBar/>
        <View style={{bottom:15, justifyContent:'center',top: 20, paddingTop:10}}>
        <EventCards/>
        </View>
        <BottomAppBar/>
        <View style={{bottom:25,backgroundColor:'white',borderRadius:7 }}>
        <UndoButton/>
        </View>
      </View>
    );
}




const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  Buttoncontainer: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },


});

export default App;

