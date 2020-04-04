import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';

const Error = ({message, refetch}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.txt}>{message}</Text>
      <TouchableOpacity style={styles.btn} onPress={() => refetch()}>
        <Text style={styles.btnText}>Retry</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ffffff',
  },
  txt: {
    fontFamily: 'Merriweather',
    fontSize: 12,
    color: '#000',
    paddingBottom: 16,
  },
  btn: {
    height: 35,
    paddingHorizontal: 20,
    alignContent: 'center',
    justifyContent: 'center',
    borderColor: 'rgba(29, 161, 242, 1)',
    borderWidth: 1,
    borderRadius: 4,
  },
  btnText: {
    fontSize: 14,
    color: 'rgba(29, 161, 242, 1)',
  },
});

export default Error;
