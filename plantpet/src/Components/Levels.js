import ProgressBar from 'react-bootstrap/ProgressBar'
import 'bootstrap/dist/css/bootstrap.min.css';
import {useState} from 'react'

const Levels = (props) => {
    const [level, setLevel] = useState(1)
    const levelHandler = () => {
      if (props.water === 20) {
        setLevel(level+1)
      }
    }


    return (
        <div className = 'level'>
         Level: <h1>{level}</h1>
          <ProgressBar animated variant = "success" now = {level}/>
        </div>  
    )
}

export default Levels