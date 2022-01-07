import React from 'react'
import {
	TouchableOpacity,
	TouchableOpacityProps,
	Text,
	StyleSheet,
} from 'react-native'

interface SkillCardProps extends TouchableOpacityProps {
	children: string
}

export function SkillCard({ children, ...rest }: SkillCardProps) {
	return (
		<TouchableOpacity style={styles.buttonSkill} {...rest}>
			<Text style={styles.textSkill}>{children}</Text>
		</TouchableOpacity>
	)
}

const styles = StyleSheet.create({
	buttonSkill: {
		backgroundColor: '#1f1e25',
		padding: 20,
		borderRadius: 50,
		alignItems: 'center',
		marginBottom: 20,
	},
	textSkill: {
		color: '#fff',
		fontSize: 18,
		fontWeight: 'bold',
	},
})
