/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, Image, StyleSheet, Text, TouchableOpacity} from 'react-native';
import {timeOfArticle} from '../utils/formate';

const Article = props => {
  const {result, goToArticle} = props;

  return (
    <TouchableOpacity onPress={goToArticle}>
      <View>
        <View style={styles.container}>
          <View style={styles.article}>
            {result.fields ? (
              <Image
                style={styles.imageContainer}
                source={{
                  uri: result.fields.thumbnail,
                }}
              />
            ) : null}

            <View style={styles.body}>
              <Text style={styles.title}>{result.webTitle}</Text>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  paddingTop: 5,
                }}>
                <View style={styles.section}>
                  <Text style={styles.subTitle}>{result.sectionName}</Text>
                </View>
                <Text
                  style={{
                    ...styles.subTitle,
                    color: "color: 'rgb(101, 119, 135)'",
                  }}>
                  {timeOfArticle(result.webPublicationDate)} ago
                </Text>
              </View>
            </View>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  article: {
    flexDirection: 'row',
  },
  imageContainer: {
    width: 70,
    minHeight: 70,
    borderRadius: 10,
  },
  body: {
    flex: 1,
    paddingLeft: 10,
  },
  title: {
    fontFamily: 'Merriweather',
    flex: 1,
    fontSize: 16,
    color: '#000',
    textAlign: 'justify',
  },
  section: {
    height: 22,
    backgroundColor: 'rgba(29, 161, 242, 1)',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 10,
  },
  subTitle: {
    fontFamily: 'Merriweather',
    fontSize: 14,
    color: '#ffffff',
  },
});

export default Article;
