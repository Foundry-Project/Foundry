// import { StatusBar } from 'expo-status-bar';
// import FirstPage from './Pages/FirstPage';
import { SafeAreaView, Settings } from 'react-native';
import AppNavigator from './Pages/AppNavigator';
import Terms from './Pages/Terms';
import NavBar from './components/NavBar';
import Setting from './Pages/Settings'
import Privacy from './Pages/Privacy';
import Found from './Onboarding/Found';
import Getback from './Onboarding/Getback';
import Lost from './Onboarding/Lost';
import Leaderboard from './Pages/Leaderboard';
import Welcome from './Onboarding/Welcome';
// import Categorycard from './components/Categorycard';
// import CategoriesList from './components/CategoriesList';
export default function App() {
  return (
    <SafeAreaView style={{flex:1}}>


   <Leaderboard/>
   {/* <NavBar/> */}
    </SafeAreaView>



  )}
