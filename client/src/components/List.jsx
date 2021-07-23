import {useState,useEffect} from 'react';
import {Link} from '@reach/router'
import axios from 'axios'

const List = (props) => {
	const [pets,setPets] = useState([])
	const [deleted,setDeleted] = useState(false)
	useEffect(() =>{
			axios.get(`http://localhost:8000/api/pets`)
			.then(res=>{
				console.log(res.data)
				setPets(res.data)
			})
			.catch(err=>console.log(err.response.data))
	},[deleted])

	const handleDelete = (id) =>{
			axios.delete(`http://localhost:8000/api/pets/${id}`)
			.then(res=>{
				setDeleted(!deleted)
				console.log(res)
			})
			.catch(err=>console.log(err.response.data))
	}
  return (
    <>
    <h1>Pet shelter</h1>
    <h4>these pets looking for shelter</h4>

    <Link className="btn btn-primary" to="/pets/new">add new pet</Link>
    <br/>
    <br/>
    	<table className="table">
    		  <thead>
			    <tr>
			      <th scope="col">name</th>
			      <th scope="col">type</th>
			      <th scope="col">Actions</th>
			    </tr>
			  </thead>
			  <tbody>
			  	{
			  		pets.map((pet,petid) =>{

			  			return( <>
			  						  	<tr key={petid}>
			  						  			<td>{pet.name}</td>
			  						  			<td>{pet.type}</td>
			  						  			<td><Link className="btn btn-secondary" to={`/pets/edit/${pet._id}`}>Edit</Link><Link to={"/pets/show/"+pet._id} class="btn btn-success">Detail</Link></td>
			  						  	</tr>			
			  						  			</>)
			  		})
				   } 
			  </tbody>

    	</table>

    </>
  )
}

export default List;