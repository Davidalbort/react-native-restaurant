import { TouchableOpacity, Text, StyleSheet} from 'react-native'

interface PropsListItem {
    name: string,
    onPress: () => void
}

export const ListItem = ({name,onPress}:PropsListItem) => {
	return(
		<TouchableOpacity onPress={onPress} style={styles.container}>
			<Text style={styles.text}>{name}</Text>
		</TouchableOpacity>
	)
}

const styles = StyleSheet.create({
	container:{
		paddingHorizontal: 15,
		height: 60,
		justifyContent: 'center',
		borderBottomWidth: 1,
		borderBottomColor: '#eee',
	},
	text: {
		fontSize: 18,
	},
})