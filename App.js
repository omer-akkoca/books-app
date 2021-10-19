import { createAppContainer, createSwitchNavigator } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";

import BookScreen from "./src/screens/bookScreen";
import BookDetailScreen from "./src/screens/bookDetailScreen";

const navigator = createStackNavigator(
  {
    Books : BookScreen,  // uygulamamın gıdebılecegı yolları tanıtıyorum.
    BookDetail : BookDetailScreen
  },
  {
    initialRouteName : "Books", // baslangıc yolu ne olacak onu ayarladım
    defaultNavigationOptions : {
      title : "Books",  //stackNavıgotorun baslıgı bu olacak dedım
      headerTitleAlign : "center"
    }
  }
); 

export default createAppContainer(navigator) // bu sekılde export ederek uygulamamı router mantıgı ıle calısrıtıyorum