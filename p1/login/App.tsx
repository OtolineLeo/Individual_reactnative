// import { StatusBar } from 'expo-status-bar';
// import { StyleSheet, Text, View } from 'react-native';
import React from "react";
import { View, Text, TextInput, TouchableOpacity, Image } from 'react-native';
import { styles } from './styles';
import g2 from './gaming2.avif';
import icon3 from './icons8.png';
import iconPesq from './iconPesquisar.png';
import iconSac from './iconSacola.png';

const App = () => {

  return <View style={styles.container}>
    <View style={styles.newContainer}>
      <Image source={icon3} style={styles.icon} />
      <Image source={g2} style={styles.pic} />
        <View style={styles.test}>
          <Image source={iconPesq} style={styles.icon2} />
          <Image source={iconSac} style={styles.icon2} />
        </View>
    </View>
    <Text style={styles.title}>
      LOGIN
    </Text>

    <Text style={styles.label}>EMAIL</Text>
      <TextInput style={styles.input}
      />

      <View style={styles.labelRow}>
        <Text style={styles.label}>PASSWORD</Text>
        <Text style={styles.forgot}>Forgot password?</Text>
      </View>
        <TextInput style={styles.input}
        />
      
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>SIGN IN</Text>
      </TouchableOpacity>

      <Text style={styles.crAccount}>Create account</Text>

  </View>
};

export default App;