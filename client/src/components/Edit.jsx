import {useState,useEffect} from 'react';
import {Link,navigate} from '@reach/router'
import axios from 'axios'

const Edit = ({id}) => {
		const [pet,setPet] = useState()
		const [error,setError] = useState({})
		const [err,setErr] = useState(true)
		useEffect(() =>{
			axios.get(`http://localhost:8000/api/pets/${id}`)
			.then(res=>{
				setPet(res.data)
				setErr(false)})
			.catch(err=>setErr(true))
	},[])
		const handleSubmit = (e) =>{
			e.preventDefault()
			console.log(id)
			axios.put(`http://localhost:8000/api/pets/${id}`,pet)
			.then(res=>{
				navigate("/")
			})
			.catch(err=>{
				const {errors} = err.response.data
				setError(errors)
			})
		}
		const handleChange = e =>{
			const {name,value} = e.target
			setPet({...pet,[name]:value})
	} 
  return (
    <>
	    	{
	    		err==true ? null
	    		:
	  <>
  <h1>Pet shelter</h1>
    <h4>Edit:  {pet.name}</h4>

    <Link className="btn btn-success" to="/">back to list</Link>
    <br/>
	    <form onSubmit={handleSubmit}>
		    	<p>Name:
	    	<br/>
	    		<input onChange={handleChange} type="text" name="name" value={pet.name}/>
	    		{ error.name ? <p style={{color:"red"}}>{error.name.message}</p>: null}
	    		<br/>
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
	    		<br/>
	    	</p>

	    	<p><h3>skills:</h3>
	    	<br/>
	    		skill 1:<br/>
	    		<input value={pet.skill1} onChange={handleChange} type="text" name="skill1"/>
	    	
	    		<br/>
	    		skill 2:<br/>
	    		<input value={pet.skill2} onChange={handleChange} type="text" name="skill2"/>

	    		<br/>
    		skill 3:<br/>
	    		<input value={pet.skill3} onChange={handleChange} type="text" name="skill3"/>
	    	
	    		<br/>
<input className="btn btn-primary" type="submit" value="update"/>
	    	</p>
	    </form>
	    </>
	  }
    </>
  )
}

export default Edit;
