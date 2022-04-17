import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import { toast } from 'react-toastify'

function New() {
	const navigate = useNavigate()

	const [formData, setformData] = useState({
		name: '',
		math: '',
		chemistry: '',
		physics: '',
	})

	const onChange = (e) => {
		setformData((prevState) => ({
			...prevState,
			[e.target.name]: e.target.value,
		}))
	}

	const { name, math, chemistry, physics } = formData

	const onSubmit = (e) => {
		e.preventDefault()

		axios({
			method: 'post',
			url: '/api/marks',
			data: formData,
		})
			.then((res) => {
				if (res.status === 200) {
					navigate('/ranks')
					toast.success('Success')
				}
			})
			.catch((err) =>
				toast.error(
					'Please fill in all the fields and make sure the marks do not exceed 100.' +
						'\n' +
						err.message
				)
			)
	}

	return (
		<>
			<div className='heading'>
				<h1>New entry</h1>
			</div>
			<div className='form'>
				<form onSubmit={onSubmit}>
					<div className='form-group'>
						<input
							type='text'
							id='name'
							name='name'
							value={name}
							placeholder='Enter name'
							onChange={onChange}
						/>
					</div>
					<div className='form-group'>
						<input
							type='number'
							id='math'
							name='math'
							value={math}
							placeholder='Enter math marks'
							onChange={onChange}
						/>
					</div>
					<div className='form-group'>
						<input
							type='number'
							id='chemistry'
							name='chemistry'
							value={chemistry}
							placeholder='Enter chemistry marks'
							onChange={onChange}
						/>
					</div>
					<div className='form-group'>
						<input
							type='number'
							id='physics'
							name='physics'
							value={physics}
							placeholder='Enter physics marks'
							onChange={onChange}
						/>
					</div>
					<div className='form-btn'>
						<button type='submit'>Submit</button>
					</div>
				</form>
			</div>
		</>
	)
}

export default New
