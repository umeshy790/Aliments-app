import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  ActivityIndicator,
  FlatList,
} from 'react-native';
import {useQuery} from '@apollo/react-hooks';
import {gql} from 'apollo-boost';
import NewsApiArticle from '../components/NewsApiArticle';
import Error from '../components/Error';

const NEWS_API_ARTICLES = gql`
  query getResponse($page: Int!) {
    newApiResponse(page: $page) {
      articles {
        title
        content
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

  console.log(data);

  return (
    <View style={styles.container}>
      {networkStatus === 1 || networkStatus === 2 || networkStatus === 4 ? (
        <View style={styles.loading}>
          <ActivityIndicator size="large" color="rgba(29, 161, 242, 1)" />
        </View>
      ) : (
        <View style={{flex: 1, backgroundColor: 'yellow'}}>
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
    // backgroundColor: 'red',
  },
  loading: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
