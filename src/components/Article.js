/* eslint-disable react-native/no-inline-styles */
import React, {useContext} from 'react';
import {View, Image, StyleSheet, Text, TouchableOpacity} from 'react-native';
import {timeOfArticle} from '../utils/formate';
import {ThemeContext} from '../theme';

const Article = ({result, goToArticle}) => {
  const theme = useContext(ThemeContext);

  return (
    <TouchableOpacity onPress={goToArticle}>
      <View
        style={{
          ...styles.container,
          backgroundColor: theme.surfaceBackgroundColor,
        }}>
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
            <Text
              style={{
                ...styles.title,
                color: theme.primaryTextColor,
                ...theme.font.regular,
              }}>
              {result.webTitle}
            </Text>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
                paddingTop: 5,
              }}>
              <View
                style={{
                  ...styles.section,
                  backgroundColor: theme.primaryColor,
                }}>
                <Text style={{...styles.subTitle, ...theme.font.regular}}>
                  {result.sectionName}
                </Text>
              </View>
              <Text
                style={{
                  ...styles.subTitle,
                  ...theme.font.medium,
                  color: theme.primaryTextColorLight,
                }}>
                {timeOfArticle(result.webPublicationDate)}
              </Text>
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
    marginBottom: 10,
  },
  article: {
    flexDirection: 'row',
  },
  imageContainer: {
    width: 80,
    minHeight: 80,
    borderRadius: 10,
  },
  body: {
    flex: 1,
    paddingLeft: 10,
  },
  title: {
    flex: 1,
    fontSize: 14,
    lineHeight: 18,
  },
  section: {
    height: 22,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 10,
  },
  subTitle: {
    fontSize: 12,
    color: '#ffffff',
  },
});

export default Article;
