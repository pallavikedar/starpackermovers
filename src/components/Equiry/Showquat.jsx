import React, { useEffect, useState } from 'react'
import './Showquot.css'
import { useNavigate} from 'react-router-dom';
import axios from 'axios';

function Showquat() {
  const [user,setUser]=useState([])
  const [search, setSearch] = useState("");
 
  
    useEffect(()=>{
getData()
    },[])

    function getData(){
        axios.get('http://localhost/api/api.php').then((res)=>{
            
            setUser(res.data)
        })
    }
    console.log(user)

  const keys = ["currentDate", "nam", "servise"];

  const filteredData = user ? Search(user) : [];

  function Search(data) {
    return data.filter((item) =>
      keys.some((key) => item[key].toLowerCase().includes(search.toLowerCase()))
    );
  }
  const navigate = useNavigate()

  const handleLogout = () => {
   
    navigate('/');
    
  };

  return (
    <div>
      <div className='btnWrapper'>
      <div>
     <button onClick={handleLogout}>logout</button></div>
      </div>
      <div className="showWrapper">
        <div>
          <h1>Enquiry List </h1>
        </div>
        <div className="inputWrapper">
          <div>
            <input
              type="text"
              placeholder="search"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
        </div>
        <div className="wrap">
        <table border={1} cellSpacing={0} width={'90%'}>
        
        <thead>
        <tr className="heading">
            <th>Date</th>
            <th>Name</th>
            <th>Mobile Number</th>
            <th>From Location</th>
            <th>To Location</th>
            <th>Services</th>
            <th>Message</th>
          </tr>
        </thead>
          
          {filteredData.map((e) => (
            <tbody>
            <tr className="row" key={e.id}>
            <td> {e.currentDate}</td>
            <td> {e.nam}</td>
            <td> {e.phone}</td>
            <td> {e.fromLocation}</td>
            <td> {e.toLocation}</td>
            <td> {e.servise}</td>
            <td> {e.message}</td>
            </tr>
            </tbody>
          ))}
        </table>
        </div>
      </div>
    </div>
  );

}

export default Showquat;
