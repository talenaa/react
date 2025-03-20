import profilePic from './assets/Mitsuki Koga.jpeg'

function Card(){
    return(
        <div className="card">
            <img src={profilePic} alt="profile picture"></img>
            <div className='text'>
                <h2>Talena</h2>
            </div>
            <p>I like to play drums and play volleyball</p>
        </div>
    );
}

export default Card