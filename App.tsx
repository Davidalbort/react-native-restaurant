import { NavigationContainer } from '@react-navigation/native'
import { RootStack } from './navigators/AppNavigator'

type NavigationProps = Partial<React.ComponentProps<typeof NavigationContainer>>

export default function App(props: NavigationProps) {
	return (
		<NavigationContainer
			{...props}
		>
			<RootStack />
		</NavigationContainer>
	)
}

