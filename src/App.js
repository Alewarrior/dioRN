import React from 'react';
import {
  View,
  Image,
  StyleSheet,
  SafeAreaView,
  StatusBar,
  Text,
  Pressable,
  Linking,
} from 'react-native';

const colorGithub = '#010409';
const colorFontGithub = '#C9D1D9';
const colorDarkFontGithub = '#4F565E';

const imageProfileGithub =
  'https://avatars.githubusercontent.com/u/26288575?v=4';
const urlToMyGithub = 'https://github.com/Alewarrior';

const App = () => {
  const handlePressGoToGithub = async () => {
    console.log('Verificando link');
    const res = await Linking.canOpenURL(urlToMyGithub);
    if (res) {
      console.log('Link aprovado');
      console.log('Abrindo link....');
      await Linking.openURL(urlToMyGithub);
    }
  };

  return (
    <SafeAreaView style={style.container}>
      <StatusBar backgroundColor={colorGithub} barStyle="light-content" />
      <View style={style.content}>
        <Image
          accessibilityLabel="Alessandro Rocha com fundo castelo"
          style={style.avatar}
          source={{uri: imageProfileGithub}}
        />
        <Text
          accessibilityLabel="Nome: Alessandro Rocha"
          style={[style.defaultText, style.name]}>
          Alessandro Rocha
        </Text>
        <Text
          accessibilityLabel="Nickname: Alewarrior"
          style={[style.defaultText, style.nickname]}>
          Alewarrior
        </Text>
        <Text
          accessibilityLabel="Descrição: Alessandro Rocha"
          style={[style.defaultText, style.description]}>
          Desenvolvedor de Software | Analista de Sistemas
          DIO Campus Expert | Aluno na DIO
        </Text>

        {/* DIO */}
        <View style={[style.changeFlex, style.firstCircle]}>
                <View style={style.darkCircle}></View>
                <View style={style.darkCircle}></View>
                <View style={style.darkCircle}></View>
                <View style={style.darkCircle}></View>
                <View style={style.darkCircle}></View>
                <View style={style.darkCircle}></View>
                <View style={style.darkCircle}></View>
                <View style={style.darkCircle}></View>
                <View style={style.darkCircle}></View>
                <View style={style.darkCircle}></View>
                <View style={style.darkCircle}></View>
                <View style={style.darkCircle}></View>
                <View style={style.darkCircle}></View>
                <View style={style.darkCircle}></View>
                <View style={style.darkCircle}></View>
                <View style={style.darkCircle}></View>
                <View style={style.darkCircle}></View>
                <View style={style.darkCircle}></View>
                <View style={style.darkCircle}></View>
            </View>
            <View style={[style.changeFlex]}>
                <View style={style.darkCircle}></View>
                <View style={style.lightCircle}></View>
                <View style={style.lightCircle}></View>
                <View style={style.darkCircle}></View>
                <View style={style.darkCircle}></View>
                <View style={style.darkCircle}></View>
                <View style={style.lightCircle}></View>
                <View style={style.darkCircle}></View>
                <View style={style.darkCircle}></View>
                <View style={style.darkCircle}></View>
                <View style={style.lightCircle}></View>
                <View style={style.darkCircle}></View>
                <View style={style.darkCircle}></View>
                <View style={style.redCircle}></View>
                <View style={style.redCircle}></View>
                <View style={style.darkCircle}></View>
                <View style={style.redCircle}></View>
                <View style={style.redCircle}></View>
                <View style={style.darkCircle}></View>
            </View>
            <View style={[style.changeFlex]}>
                <View style={style.darkCircle}></View>
                <View style={style.lightCircle}></View>
                <View style={style.darkCircle}></View>
                <View style={style.lightCircle}></View>
                <View style={style.darkCircle}></View>
                <View style={style.darkCircle}></View>
                <View style={style.lightCircle}></View>
                <View style={style.darkCircle}></View>
                <View style={style.darkCircle}></View>
                <View style={style.lightCircle}></View>
                <View style={style.darkCircle}></View>
                <View style={style.lightCircle}></View>
                <View style={style.darkCircle}></View>
                <View style={style.redCircle}></View>
                <View style={style.redCircle}></View>
                <View style={style.redCircle}></View>
                <View style={style.redCircle}></View>
                <View style={style.redCircle}></View>
                <View style={style.darkCircle}></View>
            </View>
            <View style={[style.changeFlex]}>
                <View style={style.darkCircle}></View>
                <View style={style.lightCircle}></View>
                <View style={style.darkCircle}></View>
                <View style={style.lightCircle}></View>
                <View style={style.darkCircle}></View>
                <View style={style.darkCircle}></View>
                <View style={style.lightCircle}></View>
                <View style={style.darkCircle}></View>
                <View style={style.darkCircle}></View>
                <View style={style.lightCircle}></View>
                <View style={style.darkCircle}></View>
                <View style={style.lightCircle}></View>
                <View style={style.darkCircle}></View>
                <View style={style.darkCircle}></View>
                <View style={style.redCircle}></View>
                <View style={style.redCircle}></View>
                <View style={style.redCircle}></View>
                <View style={style.darkCircle}></View>
                <View style={style.darkCircle}></View>
            </View>
            <View style={[style.changeFlex]}>
                <View style={style.darkCircle}></View>
                <View style={style.lightCircle}></View>
                <View style={style.lightCircle}></View>
                <View style={style.darkCircle}></View>
                <View style={style.darkCircle}></View>
                <View style={style.darkCircle}></View>
                <View style={style.lightCircle}></View>
                <View style={style.darkCircle}></View>
                <View style={style.darkCircle}></View>
                <View style={style.darkCircle}></View>
                <View style={style.lightCircle}></View>
                <View style={style.darkCircle}></View>
                <View style={style.darkCircle}></View>
                <View style={style.darkCircle}></View>
                <View style={style.darkCircle}></View>
                <View style={style.redCircle}></View>
                <View style={style.darkCircle}></View>
                <View style={style.darkCircle}></View>
                <View style={style.darkCircle}></View>
            </View>
            <View style={[style.changeFlex]}>
                <View style={style.darkCircle}></View>
                <View style={style.darkCircle}></View>
                <View style={style.darkCircle}></View>
                <View style={style.darkCircle}></View>
                <View style={style.darkCircle}></View>
                <View style={style.darkCircle}></View>
                <View style={style.darkCircle}></View>
                <View style={style.darkCircle}></View>
                <View style={style.darkCircle}></View>
                <View style={style.darkCircle}></View>
                <View style={style.darkCircle}></View>
                <View style={style.darkCircle}></View>
                <View style={style.darkCircle}></View>
                <View style={style.darkCircle}></View>
                <View style={style.darkCircle}></View>
                <View style={style.darkCircle}></View>
                <View style={style.darkCircle}></View>
                <View style={style.darkCircle}></View>
                <View style={style.darkCircle}></View>
            </View>
            {/* Botão */}
            <Pressable onPress={handlePressGoToGithub}>
                <View style={style.button}>
                    <Text style={[style.defaultText, style.textButton]}>
                        Open in Github
                    </Text>
                </View>
            </Pressable>
        </View>
    </SafeAreaView>
    );
};
