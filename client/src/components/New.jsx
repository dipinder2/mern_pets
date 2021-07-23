import {useState} from 'react';
import axios from 'axios'
import {Link,navigate} from '@reach/router'


const New = (props) => {
	const [pet,setPet] = useState({
			name:"",
			type:"",
			description:"",
			skill1:"",
			skill2:"",
			skill3:""
	})

	const [error,setError] = useState({})
	const handleChange = e =>{
			const {name,value} = e.target
			setPet({...pet,[name]:value})
	} 
	const handleSubmit = e =>{
			e.preventDefault()
			const {name,value} = e.target
			axios.post(`http://localhost:8000/api/pets`,pet)
			.then(res=>{
				setPet({
				name:""
			})
				navigate('/')
			})
			.catch(err=>{
				const {errors,name} = err.response.data
				setError(errors)
			})
	}
  return (
    <>
	    <h1>new pet</h1>
	    <Link className="btn btn-success" to="/">back to list</Link>
	    <form onSubmit={handleSubmit}>
	    	<h4>Add a new pet:</h4>
	    	<p>Name:
	    	<br/>
	    		<input value={pet.name} onChange={handleChange} type="text" name="name"/>
	    		{ error.name ? <p style={{color:"red"}}>{error.name.message}</p>: null}
	    		<br/>
				</p>
	    	<p>type:
	    	<br/>
	    		<input value={pet.type} onChange={handleChange} type="text" name="type"/>
	    		{ error.type ? <p style={{color:"red"}}>{error.type.message}</p>: null}
	    		<br/>
	    	</p>


	    	<p>description:
	    	<br/>
	    		<input value={pet.description} onChange={handleChange} type="text" name="description"/>
	    		{ error.description ? <p style={{color:"red"}}>{error.description.message}</p>: null}
	    		<br/>
	    	</p>

	    	<p><h3>skills:</h3>
	    	<br/>
	    		skill 1:<br/>
	    		<input onChange={handleChange} type="text" name="skill1"/>
	    		{ error.skills ? <p style={{color:"red"}}>{error.skills.message}</p>: null}
	    		<br/>
	    		skill 2:<br/>
	    		<input onChange={handleChange} type="text" name="skill2"/>
	    		{ error.skills ? <p style={{color:"red"}}>{error.skills.message}</p>: null}
	    		<br/>
    		skill 3:<br/>
	    		<input onChange={handleChange} type="text" name="skill3"/>
	    		{ error.skills ? <p style={{color:"red"}}>{error.skills.message}</p>: null}
	    		<br/>
	    	</p>

	    		<input className="btn btn-success" type="submit" value="create"/>
	    </form>
    </>
  )
}

export default New;