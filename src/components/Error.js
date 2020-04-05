import React, {useContext} from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import {ThemeContext} from '../theme';

const Error = ({message, refetch}) => {
  const theme = useContext(ThemeContext);

  return (
    <View style={{...styles.container, backgroundColor: theme.backgroundColor}}>
      <Text
        style={{
          ...styles.txt,
          ...theme.font.bold,
          color: theme.primaryTextColor,
        }}>
        {message}
      </Text>
      <TouchableOpacity
        style={{...styles.btn, borderColor: theme.primaryColor}}
        onPress={() => refetch()}>
        <Text
          style={{
            ...styles.btnText,
            ...theme.font.medium,
            color: theme.primaryColor,
          }}>
          Retry
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  txt: {
    fontSize: 14,
    paddingBottom: 16,
  },
  btn: {
    height: 40,
    paddingHorizontal: 20,
    alignContent: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderRadius: 4,
  },
  btnText: {
    fontSize: 14,
  },
});

export default Error;
