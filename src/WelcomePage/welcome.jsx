import Home from '../HomePage.jsx/Home'
import './welcome.css'
import { useNavigate } from 'react-router-dom'


const Welcome = () => {
    const navigate = useNavigate()

    
    return (
        <>
            <div>
                <h3> Welcome in Tranding Project </h3>
                <button onClick={() => navigate("/home")}> Read More</button>
            </div>

        </>
    )
}

export default Welcome