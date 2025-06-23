import React from "react";
import { View, Image } from "react-native";
import { styles } from './styles';
import g2 from './gaming2.avif';
import icon3 from './icons8.png';
import iconPesq from './iconPesquisar.png';
import iconSac from './iconSacola.png';
import capa from './capa.jpeg';
import carrosel from './carrosel.png';

const App = () =>{

  return <View style={styles.container}>
    <View style={styles.newContainer}>
      <Image source={icon3} style={styles.icon} />
      <Image source={g2} style={styles.pic} />
        <View style={styles.test}>
          <Image source={iconPesq} style={styles.icon2} />
          <Image source={iconSac} style={styles.icon2} />
        </View>
    </View>
          <Image source={capa} style={styles.capa} />
          <Image source={carrosel} style={styles.carrosel} />
    </View>
}

export default App;