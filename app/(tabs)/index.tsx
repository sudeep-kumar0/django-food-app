import { View, Text, StyleSheet, Image, ScrollView } from 'react-native';
import { useFonts, Inter_400Regular, Inter_600SemiBold, Inter_700Bold } from '@expo-google-fonts/inter';
import { useEffect } from 'react';
import { SplashScreen } from 'expo-router';

SplashScreen.preventAutoHideAsync();

export default function HomeScreen() {
  const [fontsLoaded, fontError] = useFonts({
    'Inter-Regular': Inter_400Regular,
    'Inter-SemiBold': Inter_600SemiBold,
    'Inter-Bold': Inter_700Bold,
  });

  useEffect(() => {
    if (fontsLoaded || fontError) {
      SplashScreen.hideAsync();
    }
  }, [fontsLoaded, fontError]);

  if (!fontsLoaded && !fontError) {
    return null;
  }

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.greeting}>Hello,</Text>
        <Text style={styles.name}>John Doe 👋</Text>
      </View>
      
      <View style={styles.banner}>
        <Image
          source={{ uri: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=800&auto=format&fit=crop' }}
          style={styles.bannerImage}
        />
        <View style={styles.bannerContent}>
          <Text style={styles.bannerTitle}>Special Offer</Text>
          <Text style={styles.bannerText}>Get 20% off on your first order!</Text>
        </View>
      </View>

      <Text style={styles.sectionTitle}>Popular Categories</Text>
      <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.categoriesContainer}>
        {['Pizza', 'Burger', 'Sushi', 'Salad', 'Dessert'].map((category, index) => (
          <View key={index} style={styles.categoryCard}>
            <Text style={styles.categoryText}>{category}</Text>
          </View>
        ))}
      </ScrollView>

      <Text style={styles.sectionTitle}>Featured Restaurants</Text>
      <View style={styles.restaurantsGrid}>
        {[
          {
            name: 'Italian Bistro',
            image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&auto=format&fit=crop',
            rating: '4.8',
          },
          {
            name: 'Sushi Master',
            image: 'https://images.unsplash.com/photo-1579871494447-9811cf80d66c?w=800&auto=format&fit=crop',
            rating: '4.5',
          },
        ].map((restaurant, index) => (
          <View key={index} style={styles.restaurantCard}>
            <Image source={{ uri: restaurant.image }} style={styles.restaurantImage} />
            <Text style={styles.restaurantName}>{restaurant.name}</Text>
            <Text style={styles.restaurantRating}>⭐️ {restaurant.rating}</Text>
          </View>
        ))}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F8F8F8',
  },
  header: {
    padding: 24,
    paddingTop: 60,
    backgroundColor: '#ffffff',
  },
  greeting: {
    fontFamily: 'Inter-Regular',
    fontSize: 16,
    color: '#9A9A9D',
  },
  name: {
    fontFamily: 'Inter-Bold',
    fontSize: 24,
    color: '#1A1D26',
    marginTop: 4,
  },
  banner: {
    margin: 24,
    borderRadius: 16,
    overflow: 'hidden',
    backgroundColor: '#ffffff',
    elevation: 4,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
  },
  bannerImage: {
    width: '100%',
    height: 160,
  },
  bannerContent: {
    padding: 16,
  },
  bannerTitle: {
    fontFamily: 'Inter-Bold',
    fontSize: 18,
    color: '#1A1D26',
  },
  bannerText: {
    fontFamily: 'Inter-Regular',
    fontSize: 14,
    color: '#9A9A9D',
    marginTop: 4,
  },
  sectionTitle: {
    fontFamily: 'Inter-SemiBold',
    fontSize: 18,
    color: '#1A1D26',
    marginHorizontal: 24,
    marginTop: 24,
    marginBottom: 16,
  },
  categoriesContainer: {
    paddingHorizontal: 24,
    marginBottom: 24,
  },
  categoryCard: {
    backgroundColor: '#ffffff',
    paddingHorizontal: 20,
    paddingVertical: 12,
    borderRadius: 12,
    marginRight: 12,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 4,
  },
  categoryText: {
    fontFamily: 'Inter-SemiBold',
    fontSize: 14,
    color: '#1A1D26',
  },
  restaurantsGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    padding: 24,
    gap: 16,
  },
  restaurantCard: {
    width: '47%',
    backgroundColor: '#ffffff',
    borderRadius: 16,
    overflow: 'hidden',
    elevation: 4,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
  },
  restaurantImage: {
    width: '100%',
    height: 120,
  },
  restaurantName: {
    fontFamily: 'Inter-SemiBold',
    fontSize: 14,
    color: '#1A1D26',
    margin: 12,
    marginBottom: 4,
  },
  restaurantRating: {
    fontFamily: 'Inter-Regular',
    fontSize: 12,
    color: '#9A9A9D',
    marginHorizontal: 12,
    marginBottom: 12,
  },
});