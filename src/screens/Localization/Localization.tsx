import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import Pages from '../../data/Pages';
import en from '../../locales/en.json';
import tr from '../../locales/tr.json';
import pl from '../../locales/pl.json';

export default function LocalizationScreen() {
  const [selectedLanguage, setSelectedLanguage] = useState('en'); // Başlangıç dili olarak İngilizce
  const translations = {
    en: en.translation,
    tr: tr.translation,
    pl: pl.translation,
  };
  const currentTranslation = translations[selectedLanguage];
  const changeLanguage = (lang: string) => {
    setSelectedLanguage(lang);
  };

  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.function}>Function {Pages[4].index}</Text>
        <Text style={styles.title}>{Pages[4].title}</Text>
        <Text style={styles.description}>{Pages[4].description}</Text>
      </View>
      <View style={styles.languageSwitcher}>
        <TouchableOpacity
          style={[
            styles.languageButton,
            selectedLanguage === 'en' && styles.selectedLanguageButton,
          ]}
          onPress={() => changeLanguage('en')}>
          <Text
            style={[
              styles.languageText,
              selectedLanguage === 'en' && styles.selectedLanguageText,
            ]}>
            English
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.languageButton,
            selectedLanguage === 'tr' && styles.selectedLanguageButton,
          ]}
          onPress={() => changeLanguage('tr')}>
          <Text
            style={[
              styles.languageText,
              selectedLanguage === 'tr' && styles.selectedLanguageText,
            ]}>
            Türkçe
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.languageButton,
            selectedLanguage === 'pl' && styles.selectedLanguageButton,
          ]}
          onPress={() => changeLanguage('pl')}>
          <Text
            style={[
              styles.languageText,
              selectedLanguage === 'pl' && styles.selectedLanguageText,
            ]}>
            Polski
          </Text>
        </TouchableOpacity>
      </View>
      
      <View>
        <Text style={styles.function}>{currentTranslation?.greeting}</Text>
        <Text style={styles.description}>
          {currentTranslation?.welcome?.replace('{{name}}', 'Kullanıcı')}
        </Text>
       <Text style={styles.description}>
          {currentTranslation?.items_one?.replace('{{count}}', '1')}
        </Text>
        <Text style={styles.description}>
          {currentTranslation?.items_other?.replace('{{count}}', '5')}
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 16,
  },
  title: {
    fontSize: 28,
    marginTop: 8,
    color: '#000',
    letterSpacing: -0.75,
  },
  description: {
    fontSize: 16,
    color: '#aaa',
    marginTop: 8,
  },
  function: {
    fontSize: 24,
    color: 'darkblue',
    letterSpacing: -0.5,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  languageSwitcher: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    marginVertical: 16,
  },
  languageButton: {
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 8,
    marginRight: 8,
    backgroundColor: '#f0f0f0',
  },
  selectedLanguageButton: {
    backgroundColor: 'darkblue',
  },
  languageText: {
    fontSize: 16,
    },
  selectedLanguageText: {
    color: '#fff',
  },
});
