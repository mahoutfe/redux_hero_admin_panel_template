// Задача для этого компонента:
// Реализовать создание нового героя с введенными данными. Он должен попадать
// в общее состояние и отображаться в списке + фильтроваться
// Уникальный идентификатор персонажа можно сгенерировать через uiid
// Усложненная задача:
// Персонаж создается и в файле json при помощи метода POST
// Дополнительно:
// Элементы <option></option> желательно сформировать на базе
// данных из фильтров

import { ErrorMessage, Field, Form, Formik } from 'formik';
import { useDispatch, useSelector } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import * as Yup from 'yup';
import { useHttp } from '../../hooks/http.hook';

import { heroAdded } from '../../actions';

const HeroesAddForm = () => {
	const { heroes } = useSelector((state) => state);
	const dispatch = useDispatch();
	const { request } = useHttp();

	return (
		<Formik
			initialValues={{
				id: uuidv4(),
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
				console.log(JSON.stringify(values, null, 2));
				dispatch(heroAdded(heroes, values));
				request(
					'http://localhost:3001/heroes',
					'POST',
					JSON.stringify(values, null, 2)
				);
			}}
		>
			<Form className='border p-4 shadow-lg rounded'>
				<div className='mb-3'>
					<label htmlFor='name' className='form-label fs-4'>
						Имя нового героя
					</label>
					<Field
						required
						type='text'
						name='name'
						className='form-control'
						id='name'
						placeholder='Как меня зовут?'
					/>
					<ErrorMessage className='error' name='name' component='div' />
				</div>

				<div className='mb-3'>
					<label htmlFor='description' className='form-label fs-4'>
						Описание
					</label>
					<Field
						required
						name='description'
						className='form-control'
						id='description'
						placeholder='Что я умею?'
						style={{ height: '130px' }}
						as='textarea'
					/>
					<ErrorMessage className='error' name='description' component='div' />
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
						<option value='fire'>Огонь</option>
						<option value='water'>Вода</option>
						<option value='wind'>Ветер</option>
						<option value='earth'>Земля</option>
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
