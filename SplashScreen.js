import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image, SafeAreaView } from 'react-native';
import * as Animatable from 'react-native-animatable';
import { LinearGradient } from 'expo-linear-gradient';
import { useNavigation } from '@react-navigation/native';

const SplashScreen = () => {
  const navigation = useNavigation();
  const [showLeftImages, setShowLeftImages] = useState(false);
  const [showNumbers, setShowNumbers] = useState(false); // Numbers resmini ekleyin

  useEffect(() => {
    // Sol resimleri 2 saniye sonra göster
    setTimeout(() => {
      setShowLeftImages(true);
    }, 2000);

    // Numbers resmini 4 saniye sonra göster
    setTimeout(() => {
      setShowNumbers(true);
    }, 4000);

    // Ana ekranı 6 saniye sonra göster
    setTimeout(() => {
      navigation.navigate('HomeScreen');
    }, 6000);
  }, [navigation]);

  return (
    <LinearGradient
      colors={['#5170FF', '#FF66C4']}
      style={styles.gradient}
    >
      <SafeAreaView style={styles.container}>
        <View style={styles.imageContainer}>
          {showLeftImages && (
            <>
              <Animatable.Image
                animation="slideInDown"
                duration={2000}
                source={require('./assets/leftImage1.png')}
                style={styles.image}
              />
              <Animatable.Image
                animation="slideInDown"
                duration={2000}
                source={require('./assets/leftImage2.png')}
                style={styles.image}
              />
            </>
          )}
        </View>
        <View style={styles.rightContainer}>
          <Animatable.Image
            animation="slideInDown"
            duration={2000}
            source={require('./assets/rightImage1.png')}
            style={styles.image}
          />
          <Animatable.Image
            animation="slideInDown"
            duration={2000}
            source={require('./assets/rightImage2.png')}
            style={styles.image}
          />
        </View>
        {showNumbers && (
          <View style={styles.numbersContainer}>
            <Animatable.Image
              animation="slideInUp" // Numbers resminin yukarıdan aşağı kaymasını sağlar
              duration={1000}
              source={require('./assets/numbers.png')}
              style={styles.image}
            />
          </View>
        )}
      </SafeAreaView>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
  },
  gradient: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'flex-start',
    padding: 20,
  },
  rightContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'flex-end',
    padding: 20,
  },
  numbersContainer: {
    flex: 1,
    justifyContent: 'flex-end', // Sayfanın alt ortasına kaydırmak için 'flex-end' kullanın
    alignItems: 'center',
  },
  image: {
    width: 200,
    height: 200,
    marginBottom: 10,
  },
});

export default SplashScreen;
