import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { useLayoutEffect } from 'react'
import { View, Text, StyleSheet, FlatList } from 'react-native'
import { AppStackParamList, RootStackParamList } from '../navigators/AppNavigator'
import { CompositeNavigationProp, CompositeScreenProps} from '@react-navigation/native'
import { StackNavigationProp } from '@react-navigation/stack'
import { ListItem } from '../components/ListItem'


type MealsScreenProps = CompositeScreenProps<
	NativeStackScreenProps<AppStackParamList,'meals'>,
	NativeStackScreenProps<RootStackParamList>>



const data = [
	{
		id: 'lala',
		name: 'Churarrsco',
		desc: 'Plato típuco'
	}
]

export const MealsScreen = ({navigation}:MealsScreenProps) => {
	useLayoutEffect(() => {
		navigation.setOptions({
			title: "Meals available" ,
		})
	})
	return (
		<View>
			<FlatList
				style={styles.list}
				data={data}
				keyExtractor={x => x.id}
				renderItem={({item}) => (
					<ListItem 
						onPress={ () => navigation.navigate('modals',{meals_id: item.id})}
						name={item.name}
					/>
				)}
			/>
		</View>
	)
}

const styles = StyleSheet.create({
	container:{
		flex: 1,
		backgroundColor: '#fff',
		alignItems: 'flex-start',
	},
	list: {
		alignSelf: 'stretch'
	}
})