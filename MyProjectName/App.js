
// import { StatusBar } from 'expo-status-bar';
// import FirstPage from './Pages/FirstPage';
import { SafeAreaView } from 'react-native';
import AppNavigator from './Pages/AppNavigator';
// import Map from './components/Map'
// import SignUpPage from './Pages/SignUpPage'
// import Settings from'./Pages/Settings'

export default function App() {
  return (
    <SafeAreaView style={{flex:1}}>
      <AppNavigator />
      
    {/* <Settings/> */}
    {/* <SignUpPage /> */}

    </SafeAreaView>
    


  )}
