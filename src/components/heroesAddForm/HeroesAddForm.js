// Задача для этого компонента:
// Реализовать создание нового героя с введенными данными. Он должен попадать
// в общее состояние и отображаться в списке + фильтроваться
// Уникальный идентификатор персонажа можно сгенерировать через uiid
// Усложненная задача:
// Персонаж создается и в файле json при помощи метода POST
// Дополнительно:
// Элементы <option></option> желательно сформировать на базе
// данных из фильтров

import { ErrorMessage, Field, Form, Formik, useField } from 'formik';
import { useDispatch, useSelector } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import * as Yup from 'yup';
import { useHttp } from '../../hooks/http.hook';

import { heroAdded, heroAddingError } from '../../actions';

const MyTextInput = ({ label, ...props }) => {
	const [field, meta] = useField(props);
	const isTextarea = props.as === 'textarea';
	return (
		<>
			<label htmlFor={props.name} className='form-label fs-4'>
				{label}
			</label>
			{isTextarea ? (
				<textarea {...props} {...field} />
			) : (
				<input {...props} {...field} />
			)}
			{meta.touched && meta.error ? (
				<div className='error'>{meta.error}</div>
			) : null}
		</>
	);
};

const HeroesAddForm = () => {
	const { filters } = useSelector((state) => state);
	const dispatch = useDispatch();
	const { request, clearError } = useHttp();

	const options = filters.map(({ element, label }) => {
		if (element !== 'all') return <option value={element}>{label}</option>;
	});
	return (
		<Formik
			initialValues={{
				id: '',
				name: '',
				description: '',
				element: '',
			}}
			validationSchema={Yup.object({
				name: Yup.string()
					.min(2, 'Минимум 2 символа!')
					.required('Обязательное поле!'),
				description: Yup.string()
					.min(10, 'Минимум 10 символов!')
					.required('Обязательное поле!'),
				element: Yup.string().required('Выберите элемент!'),
			})}
			onSubmit={(values) => {
				clearError();
				values.id = uuidv4();
				console.log(JSON.stringify(values, null, 2));
				request(
					'http://localhost:3001/heroes',
					'POST',
					JSON.stringify(values, null, 2)
				)
					.then(() => dispatch(heroAdded(values)))
					.catch(() => dispatch(heroAddingError()));
			}}
		>
			<Form className='border p-4 shadow-lg rounded'>
				<div className='mb-3'>
					<MyTextInput
						label='Имя нового героя'
						required
						type='text'
						name='name'
						className='form-control'
						id='name'
						placeholder='Как меня зовут?'
					/>
				</div>

				<div className='mb-3'>
					<MyTextInput
						label='Описание'
						required
						name='description'
						className='form-control'
						id='description'
						placeholder='Что я умею?'
						style={{ height: '130px' }}
						as='textarea'
					/>
				</div>

				<div className='mb-3'>
					<label htmlFor='element' className='form-label'>
						Выбрать элемент героя
					</label>
					<Field
						required
						className='form-select'
						id='element'
						name='element'
						as='select'
					>
						<option>Я владею элементом...</option>
						{options}
					</Field>
					<ErrorMessage className='error' name='element' component='div' />
				</div>

				<button type='submit' className='btn btn-primary'>
					Создать
				</button>
			</Form>
		</Formik>
	);
};

export default HeroesAddForm;
