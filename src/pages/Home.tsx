import React, { useEffect, useState } from 'react'
import {
	View,
	SafeAreaView,
	Text,
	StyleSheet,
	TextInput,
	Platform,
	FlatList,
} from 'react-native'

import { Button } from '../components/Button'
import { SkillCard } from '../components/SkillCard'

interface SkillData {
	id: string
	name: string
}

export function Home() {
	const [newSkill, setNewSkill] = useState('')
	const [mySkills, setMySkills] = useState<SkillData[]>([])
	const [greetings, setGreetings] = useState('')

	function handleAddNewSkill() {
		const data = {
			id: String(new Date().getTime()),
			name: newSkill,
		}

		setMySkills(oldState => [...oldState, data])
	}

	function handleRemoveSkill(id: string) {
		setMySkills(oldState => oldState.filter(skill => skill.id !== id))
	}

	useEffect(() => {
		let currentTime = new Date().getHours()

		if (currentTime > 4 && currentTime < 12) {
			setGreetings('Good morning')
		} else if (currentTime >= 12 && currentTime < 18) {
			setGreetings('Good afternoon')
		} else if (currentTime >= 18 && currentTime < 20) {
			setGreetings('Good evening')
		} else if (currentTime) {
			setGreetings('Good night')
		}
	}, [])

	return (
		<>
			<SafeAreaView style={styles.mainContainer}>
				<Text style={styles.title}>Welcome, Diego</Text>

				<Text style={styles.greetings}>{greetings}</Text>

				<TextInput
					style={styles.input}
					placeholder="New skill"
					placeholderTextColor={'#555'}
					onChangeText={setNewSkill}
				/>

				<Button onPress={handleAddNewSkill}>Add</Button>

				<Text style={styles.title}>My skills</Text>

				<FlatList
					data={mySkills}
					keyExtractor={item => item.id}
					renderItem={({ item }) => (
						<SkillCard onPress={() => handleRemoveSkill(item.id)}>
							{item.name}
						</SkillCard>
					)}
				/>
			</SafeAreaView>
		</>
	)
}

const styles = StyleSheet.create({
	mainContainer: {
		flex: 1,
		backgroundColor: '#121015',
		paddingHorizontal: 40,
		paddingVertical: 60,
	},
	title: {
		color: '#fff',
		fontSize: 24,
		fontWeight: 'bold',
		marginBottom: 24,
	},
	input: {
		backgroundColor: '#1f1e25',
		borderRadius: 8,
		padding: Platform.OS === 'ios' ? 16 : 8,
		color: '#fff',
		fontSize: 16,
		marginBottom: 20,
	},
	greetings: {
		color: '#fff',
		fontSize: 16,
		marginTop: -20,
		marginBottom: 24,
	},
})
