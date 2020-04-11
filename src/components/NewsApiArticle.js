import React, {useContext} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/dist/MaterialIcons';
import {ThemeContext} from '../theme';

const NewsApiArticle = ({article, toWebView}) => {
  const theme = useContext(ThemeContext);

  return (
    <View style={styles.container}>
      <Image
        source={{
          uri: article.urlToImage,
        }}
        style={styles.img}
      />

      <View
        style={{...styles.body, backgroundColor: theme.surfaceBackgroundColor}}>
        <Text
          style={{
            ...styles.title,
            ...theme.font.bold,
            color: theme.primaryTextColor,
          }}>
          {article.title}
        </Text>
        <Text
          style={{
            ...styles.content,
            ...theme.font.light,
            color: theme.primaryTextColorLight,
          }}>
          {article.description}
        </Text>
      </View>

      <TouchableOpacity style={styles.iconBtn} onPress={toWebView}>
        <Icon name="launch" size={26} color="#ffffff" />
      </TouchableOpacity>
    </View>
  );
};

export default NewsApiArticle;

const styles = StyleSheet.create({
  container: {
    height: Dimensions.get('window').height,
    position: 'relative',
  },
  img: {
    height: 280,
    width: Dimensions.get('window').width,
  },
  body: {
    flex: 1,
    padding: 20,
  },
  title: {
    fontSize: 18,
    lineHeight: 28,
  },
  content: {
    paddingTop: 16,
    fontSize: 16,
    lineHeight: 28,
  },

  iconBtn: {
    borderWidth: 1,
    borderColor: 'rgba(29, 161, 242, 1)',
    position: 'absolute',
    right: 20,
    bottom: 30,
    backgroundColor: 'rgba(29, 161, 242, 1)',
    height: 59,
    width: 59,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: (59 + 59) / 2,
    shadowColor: 'rgba(29, 161, 242, 1)',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.29,
    shadowRadius: 4.65,
    elevation: 7,
  },
});
