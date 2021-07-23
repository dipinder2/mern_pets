import {useState,useEffect} from 'react';
import axios from 'axios'
import {navigate,Link} from '@reach/router'

const Show = ({id}) => {
	const [pet,setPet] = useState()
	const [disabled,setDisabled] = useState(false)
	const [error,setError] = useState({})
	const [err,setErr] = useState(true)
	useEffect(() =>{
			axios.get(`http://localhost:8000/api/pets/${id}`)
			.then(res=>{
				setPet(res.data)
				console.log(res.data)
				setErr(false)})
			.catch(err=>setErr(true))
	},[disabled])
	const handleDelete = () =>{
			axios.delete(`http://localhost:8000/api/pets/${id}`)
			.then(res=>navigate("/"))
			.catch(err=>console.log(err.response.data))

	}
	const handleLikes = () =>{
		axios.put(`http://localhost:8000/api/pets/likes/${id}`)
			.then(res=>setDisabled(true))
			.catch(err=>console.log(err.response.data))
	}
  return (
    <div>
    {
		err==true ? null
	    		:
	    		<>

     <h1>Pet shelter</h1>
    <h4>Details about:  {pet.name}</h4>
    <Link className="btn btn-success" to="/">back to list</Link><button onClick={() =>handleDelete()} class="btn btn-danger">Adopt {pet.name}</button>
    <p>
    	<p>Pet Type: {pet.type}</p>
    	<p>Pet Description: {pet.description}</p>
    	<p>Pet skills: <span>{pet.skill1}</span><span> {pet.skill2}</span><span> {pet.skill3}</span></p>
    	<p><button disabled={disabled} onClick={handleLikes} className="btn btn-link">Like</button>like(s) : {pet.likes}</p>
    </p>
    </>
	}
    </div>
  )
}

export default Show;