import { useNavigate } from "react-router-dom"


const Home = () => {

    const navigate = useNavigate()
    return (
        <>
            <div>
                <h3>We are building your favorite mini app. </h3>
                <h3>What will you find here? </h3>
                    <p> NFT Collections with the best volumes; </p>
                    <p> The tokens with the best volumes; </p>
                    <p> The best airdrops of the moment.  </p>

                    <button onClick={() => navigate('/homepage')}> See Our Home Page </button>
            </div>
        </>
    )
}

export default Home