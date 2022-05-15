import { IonCheckbox, IonItem, IonList, IonText } from '@ionic/react'
import React from 'react'
import Category from '../../models/Category'
import './CategoryPicker.css'

interface CategoryPickerProps {
	selectedCategories: string[]
	setSelectedCategories: (categories: string[]) => void
}

const CategoryPicker: React.FC<CategoryPickerProps> = ({
	selectedCategories,
	setSelectedCategories,
}) => {
	const [categories, setCategories] = React.useState<Category[]>([])

	React.useEffect(() => {
		fetch(
			'https://cb07d15a-8339-49d7-a38c-139503f15b67.mock.pstmn.io/categories'
		)
			.then(res => res.json())
			.then(res => setCategories(res))
	}, [])

	return (
		<IonList>
			{categories.map(category => (
				<IonItem key={category.id}>
					<IonCheckbox
						checked={selectedCategories.includes(category.id)}
						onIonChange={() =>
							selectedCategories.includes(category.id)
								? setSelectedCategories(
										selectedCategories.filter(id => id !== category.id)
								  )
								: setSelectedCategories([...selectedCategories, category.id])
						}
					/>
					<IonText>{category.name}</IonText>
				</IonItem>
			))}
		</IonList>
	)
}

export default CategoryPicker
