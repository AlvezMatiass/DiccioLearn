import { StatusBar } from 'expo-status-bar';
import { View, ActivityIndicator, SafeAreaView } from 'react-native';
import { useFonts } from 'expo-font'
import { styles } from './style';
import { Provider } from 'react-redux';

import RootNavigator from './navigation';
import { store } from './store';

const App = () => {

  const [ loaded ] = useFonts({
    'Inter-Regular': require('../assets/fonts/Inter-Regular.ttf'),
    'Inter-Medium': require('../assets/fonts/Inter-Medium.ttf'),
    'Inter-Bold': require('../assets/fonts/Inter-Bold.ttf'),
    'Inter-Light': require('../assets/fonts/Inter-Light.ttf')
  })

  if(!loaded) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator />
      </View>
    )
  }

  return (
    <Provider store={store}>
      <SafeAreaView style={styles.container}>
        <StatusBar style="auto" />
        <RootNavigator />
      </SafeAreaView>
    </Provider>
  );
}

export default App