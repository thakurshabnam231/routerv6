import { useRef } from 'react'
import {Fragment} from 'react'
import {useNavigate} from 'react-router-dom'
const Form = (props) => {
     const navigate=useNavigate();
     navigate(1);
    const nameRef = useRef();
    const ageRef = useRef();
    const onSubmit=(event)=>{
      event.preventDefault();
    
  const enterName=  nameRef.current.value;
  const enteredAge= ageRef.current.value;
  console.log(enterName,enteredAge);
  props.onAddForm(enterName, enteredAge)
    }
    return (
        <Fragment>
        <div>
            <label htmlFor="name">Name</label>
            <input type="text" useRef={nameRef} />
            </div>
            <div>
            <label htmlFor="age">age</label>
            <input type="text" useRef={ageRef} /></div>
            <div>
            <button onClick={onSubmit}>submit</button>
        </div>
        </Fragment>
    )
}

export default Form
