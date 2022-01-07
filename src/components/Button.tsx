import React from 'react'
import {
	TouchableOpacity,
	TouchableOpacityProps,
	Text,
	StyleSheet,
} from 'react-native'

interface ButtonProps extends TouchableOpacityProps {
  children: string
}

export function Button({ children, ...rest }: ButtonProps) {
	return (
		<TouchableOpacity
			style={styles.button}
      activeOpacity={0.7}
			{...rest}
		>
			<Text style={styles.buttonText}>{children}</Text>
		</TouchableOpacity>
	)
}

const styles = StyleSheet.create({
	button: {
		backgroundColor: '#a370f7',
		padding: 16,
		borderRadius: 8,
		alignItems: 'center',
		marginBottom: 20,
	},
	buttonText: {
		color: '#fff',
		fontSize: 16,
		fontWeight: 'bold',
	},
})
