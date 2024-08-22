
// import { StatusBar } from 'expo-status-bar';
import FirstPage from './Pages/FirstPage';
import { SafeAreaView } from 'react-native';
import Getback from './Onboarding/Getback';
import Found from './Onboarding/Found';
import Welcome from './Onboarding/Welcome';
import Lost from './Onboarding/Lost';
import Leaderboard from './Pages/Leaderboard';
import Settings from './Pages/Settings';
import NavBar from './components/NavBar'
export default function App() {
  return (
    <SafeAreaView style={{flex:1}}>
    <Settings/>
<NavBar/>
    </SafeAreaView>
    


  )}
