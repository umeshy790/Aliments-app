import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/dist/MaterialIcons';

const NewsApiArticle = ({article, toWebView}) => {
  return (
    <View style={styles.container}>
      <Image
        source={{
          uri: article.urlToImage,
        }}
        style={styles.img}
      />

      <View style={styles.body}>
        <Text style={styles.title}>{article.title}</Text>
        <Text style={styles.content}>
          {article.content ? article.content.split('[')[0] : null}
        </Text>
      </View>

      <TouchableOpacity style={styles.iconBtn} onPress={toWebView}>
        <Icon name="launch" size={30} color="#ffffff" />
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
    backgroundColor: '#ffffff',
  },
  title: {
    fontFamily: 'Merriweather',
    fontSize: 20,
    color: '#000',
    lineHeight: 28,
    fontWeight: '500',
  },
  content: {
    paddingTop: 16,
    fontFamily: 'Merriweather',
    fontSize: 18,
    color: '#3C4043',
    lineHeight: 28,
  },

  iconBtn: {
    position: 'absolute',
    right: 20,
    bottom: 30,
    backgroundColor: 'rgba(29, 161, 242, 1)',
    height: 60,
    width: 60,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: (60 + 60) / 2,
  },
});
