import React ,{useState} from 'react';

const Useref = () => {
    const [student,setStudent] = useState({
        name:'reku',
        college:'svecw'
    })
    const changes=()=>{
        setStudent({name:'mokshitha', college:'shri vishnu'});
    }
    return (
        <div>
            <h1>{student.name}</h1>    
            <h1>{student.college}</h1>
            <button onClick={changes}>name</button>
        </div>
    );
};

export default Useref;