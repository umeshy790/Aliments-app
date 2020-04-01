import React from 'react';
import {StyleSheet, Text, View, Image, Dimensions} from 'react-native';

const NewsApiArticle = ({article}) => {
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
    height: Dimensions.get('window').height - 200,
    // borderTopLeftRadius: 30,
    // borderTopRightRadius: 30,
  },
  body: {
    flex: 1,
    padding: 20,
    position: 'absolute',
    left: 20,
    right: 20,
    bottom: 20,
    backgroundColor: '#ffffff',
    borderRadius: 4,
  },
  title: {
    fontFamily: 'Merriweather',
    fontSize: 22,
    color: '#000',
    lineHeight: 28,
    fontWeight: '500',
  },
  content: {
    paddingTop: 16,
    fontFamily: 'Merriweather',
    fontSize: 20,
    color: '#3C4043',
    lineHeight: 28,
  },
});
