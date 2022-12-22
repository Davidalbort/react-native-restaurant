import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { NavigatorScreenParams, CompositeScreenProps } from "@react-navigation/native"
import { MealsScreen, ModalScreen } from "../Screens"

export type RootStackParamList = {
    
    app: NavigatorScreenParams <AppStackParamList>
    modals: {meals_id: string}

}

const Root = createNativeStackNavigator<RootStackParamList>()

export const RootStack = () => {
	return (
		<Root.Navigator screenOptions={{headerShown:false}}>
			<Root.Screen name="app" component={AppStack} />
			<Root.Screen name="modals" component={ModalScreen} />
		</Root.Navigator>
	)
}

export type AppStackParamList = {
   meals : undefined
}



const App = createNativeStackNavigator<AppStackParamList>()

const AppStack = () => {
	return (
		<App.Navigator initialRouteName="meals" >
			
			<App.Screen name="meals" component={MealsScreen} />
		</App.Navigator>
	)
}