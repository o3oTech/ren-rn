import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import { WebView } from 'react-native-webview';
import Constants from 'expo-constants';

export default function App() {
  return (
    <View style={styles.container}>
      <WebView style={styles.box} source={{ uri: 'https://ren-o3otech.vercel.app/' }} />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgba(26, 28, 42, 0.5)',
  },
  box: {
    flex: 1,
    marginTop: Constants.statusBarHeight,
  }
});
