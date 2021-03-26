import React from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';

export default function Input({style, onChangeText, ...props}) {
  return (
    <TextInput {...props} style={[styles.input, style]} onChangeText={onChangeText}/>
  );
}

const styles = StyleSheet.create({
  input: {
      backgroundColor: '#ccc',
      width: '100%',
      padding: 20,
      borderRadius: 8,
  }
});