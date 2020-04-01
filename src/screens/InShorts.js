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

const NEWS_API_ARTICLES = gql`
  {
    newApiResponse {
      articles {
        title
        content
        urlToImage
        url
      }
    }
  }
`;

const InShorts = () => {
  const {error, data, loading, networkStatus, refetch} = useQuery(
    NEWS_API_ARTICLES,
    {
      variables: {page: 1, search: null},
      notifyOnNetworkStatusChange: true,
    },
  );

  return (
    <View style={styles.container}>
      {loading ? (
        <View style={styles.loading}>
          <ActivityIndicator size="large" color="#0086da" />
        </View>
      ) : (
        <FlatList
          data={data.newApiResponse.articles}
          pagingEnabled={true}
          renderItem={({item}) => <NewsApiArticle article={item} />}
          keyExtractor={(_, index) => String(index)}
          showsVerticalScrollIndicator={false}
        />
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
