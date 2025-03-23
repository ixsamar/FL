import React from 'react';
import {SafeAreaView, Text, View, TouchableOpacity} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {styles} from './styles';

const Login = ({navigation}: {navigation: any}) => {
  return (
    <LinearGradient colors={['#6a11cb', '#2575fc']} style={styles.container}>
      <SafeAreaView style={styles.safeArea}>
        <View style={styles.content}>
          <Text style={styles.title}>Welcome</Text>
          <Text style={styles.subtitle}>
            Experience the best services at your fingertips.
          </Text>

          <View style={styles.infoBox}>
            <Text style={styles.infoText}>Personalized Content</Text>
            <Text style={styles.infoText}>Fast & Secure</Text>
            <Text style={styles.infoText}>Seamless Experience</Text>
            <Text style={styles.infoText}>Find Freelance Work</Text>
            <Text style={styles.infoText}>Discover Job Opportunities</Text>
            <Text style={styles.infoText}>Referral-Based Network</Text>
          </View>
        </View>

        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('Drawer')}>
          <LinearGradient
            colors={['#FFD700', '#FFC107']}
            style={styles.buttonGradient}>
            <Text style={styles.buttonText}>Get Started</Text>
          </LinearGradient>
        </TouchableOpacity>
      </SafeAreaView>
    </LinearGradient>
  );
};

export default Login;
