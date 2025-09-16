import React, { useEffect, useState } from 'react'

const SearchAuto3 = () => {
    const[user3,setUser3]=useState([]);
    const[searchText3,setSearchText3]=useState('');
    const[filtered3,setFiltered3]=useState([]);
    const[showdropdown3,setShowdropdown3]=useState(false);

    function handleChange(value){
      setSearchText3(value)
       searchUtility3(value);

    }
    function handleClick(){
     searchUtility3(searchText3)
     setSearchText3('')
    }
    function handleListClick(index){
     setSearchText3(filtered3[index])
     searchUtility3(filtered3[index])
    }
    function searchUtility3(value){
      if(value==''){
        setShowdropdown3(false)
      return
      }
      setFiltered3(user3.filter((i,index)=>i.toLowerCase().includes(value.toLowerCase())))
      setShowdropdown3(true);

    }
    async function fetchUsers3(){
       const userData= await fetch("https://dummyjson.com/users");
       const userNames3= await userData.json();
       if(userNames3){
        setUser3(userNames3.users.map((user)=>user.firstName));
       }
       console.log(user3)
    }

    useEffect(()=>{
     fetchUsers3(user3)
    },[])
  return (
    <div className='searchAuto3Wrapper' style={{display:'flex',
      flexDirection:'column', textAlign:'center'
    }}>
        <div className='searchAuto3'>
          <input 
          type= 'text'
           value={searchText3}
           placeholder='search...'
           onChange={(e)=>handleChange(e.target.value)}
           >
           </input>
           <button onClick={handleClick}> Search</button>
        </div>
        <div className='userNamesCont'>
            {
             showdropdown3 && filtered3 && filtered3.map((item,index)=><p onClick={()=>handleListClick(index)}>{item}</p>)
            }
        </div>
      
    </div>
  )
}

export default SearchAuto3
