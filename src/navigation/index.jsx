import { NavigationContainer } from "@react-navigation/native";
import HomeNavigator from "./home";

function RootNavigator() { 
    return(
        <NavigationContainer>
            <HomeNavigator />
        </NavigationContainer>
    )
}

export default RootNavigator