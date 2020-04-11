/* eslint-disable react-native/no-inline-styles */
import React, {useContext} from 'react';
import {
  StyleSheet,
  View,
  ActivityIndicator,
  FlatList,
  Dimensions,
} from 'react-native';
import {useQuery} from '@apollo/react-hooks';
import {gql} from 'apollo-boost';
import NewsApiArticle from '../components/NewsApiArticle';
import Error from '../components/Error';
import {ThemeContext} from '../theme';

const NEWS_API_ARTICLES = gql`
  query getResponse($page: Int!) {
    newApiResponse(page: $page) {
      articles {
        title
        description
        urlToImage
        url
      }
    }
  }
`;

const InShorts = ({navigation}) => {
  const {error, data, networkStatus, refetch} = useQuery(NEWS_API_ARTICLES, {
    variables: {page: 1},
    notifyOnNetworkStatusChange: true,
  });

  const theme = useContext(ThemeContext);

  function navigateToWebView(uri) {
    navigation.navigate('WebView', {uri: uri});
  }

  async function handleRefech() {
    try {
      await refetch();
    } catch (_) {}
  }

  if (error) {
    return (
      <Error
        message={error.message.split(':')[1]}
        refetch={() => handleRefech()}
      />
    );
  }

  return (
    <View style={{...styles.container, backgroundColor: theme.backgroundColor}}>
      {networkStatus === 1 || networkStatus === 2 || networkStatus === 4 ? (
        <View style={styles.loading}>
          <ActivityIndicator size="large" color={theme.primaryColor} />
        </View>
      ) : (
        <View style={{height: Dimensions.get('window').height}}>
          <FlatList
            data={data.newApiResponse.articles}
            contentContainerStyle={{flexGrow: 1}}
            pagingEnabled={true}
            renderItem={({item}) => (
              <NewsApiArticle
                article={item}
                toWebView={() => navigateToWebView(item.url)}
              />
            )}
            keyExtractor={(_, index) => String(index)}
            showsVerticalScrollIndicator={false}
            removeClippedSubviews={true}
            style={{flex: 1}}
          />
        </View>
      )}
    </View>
  );
};

export default InShorts;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  loading: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
