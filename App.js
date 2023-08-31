import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';

const RandomNumberGame = () => {
  const [randomNumber, setRandomNumber] = useState(null);
  const [isEven, setIsEven] = useState(null);
  const [userChoice, setUserChoice] = useState(null);

  useEffect(() => {
    generateRandomNumber();
  }, []);

  const generateRandomNumber = () => {
    const number = Math.floor(Math.random() * 900) + 1; 
    setRandomNumber(number);
    setIsEven(null);
    setUserChoice(null);
  };

  const checkNumber = (isEven) => {
    setIsEven(isEven);
    if ((randomNumber % 2 === 0 && isEven) || (randomNumber % 2 !== 0 && !isEven)) {
      setUserChoice(true); 
    } else {
      setUserChoice(false); 
    }
  };

  return (
    <View style={styles.container}>
      {randomNumber !== null && (
        <>
          <View style={styles.image}>
            <Image source={require("./assets/colorful-removebg.png")} />
          </View>
          
          <View style={styles.texthead}>
            <Text style={styles.text3}>ODD NUMBER OR </Text>
            <Text style={styles.text3}>EVEN NUMBER? </Text>            
            <Text style={styles.text1}>{randomNumber} </Text>
          </View>
       
          <View style={styles.buttonContainer}>
            <TouchableOpacity style={styles.button} onPress={() => checkNumber(true)}>
              <Text style={styles.buttonText}>EVEN NUMBER</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={() => checkNumber(false)}>
              <Text style={styles.buttonText}>ODD NUMBER</Text>
            </TouchableOpacity>
          </View>
          {
            userChoice !== null && (
              <Text style={styles.result}>
                {userChoice ? 'Congratulations' : 'You should look at the ones digit:)'}
              </Text>
            )
          }
          <TouchableOpacity style={styles.buttonNew} onPress={generateRandomNumber}>
            <Text style={styles.buttonText}>LET'S GET THE NEW NUMBER:)</Text>
          </TouchableOpacity>
        </>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection:'column',
    
    backgroundColor: '#CAF7FA',
  },
  image: {
    width: 80,
    height: 80,
    marginTop: 60,
    borderRadius:63,
    marginBottom: 75,
alignContent:'center',
paddingLeft:63,

  },
  text1: {
    fontSize: 40,
    fontWeight:'bold',
    marginBottom: 5,
    color:'#EE4239',
 
  },
  text2: {
    fontSize: 20,
    marginBottom: 10,
    color:'#1580C2',
  },
  text3: {
    fontSize: 32,
    marginBottom: 5,
    alignItems:'center',
    color:'#1580C2',
    justifyContent:'center'
  },
    texthead: {
    fontSize: 32,
    marginBottom: 5,
marginTop:165,
    alignItems:'center',
    color:'#1580C2',
    justifyContent:'center'
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  button: {
    backgroundColor: 'lightblue',
    paddingHorizontal: 20,
    paddingVertical: 10,
    margin: 5,
    borderRadius: 8,
    
  },
  buttonNew: {
    backgroundColor: 'lightblue',
    paddingHorizontal: 20,
    paddingVertical: 10,
    margin: 5,
    borderRadius: 8,
    marginTop:42
    
  },
  buttonText: {
    fontSize: 18,
    color:'#1580C2',
    fontWeight:'bold',
    textAlign:'center',
    
  },
  result: {
    marginTop: 10,
    fontSize: 24,
    fontWeight: 'bold',
    color:'#FDBD21',
    alignItems:'center',
    padding:44,
    
  },
});

export default RandomNumberGame;
