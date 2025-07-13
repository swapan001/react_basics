import './css/header.css'
function Header(){
    return(
        <>
            <div id='header'>
                <div id='company-name'>
                    <span style={{color:'blue', fontSize:'30px'}}>name-of-organization</span>
                </div>


            
                <div id="butn" >
                    <button className="btn">Home</button>
                    <button className="btn">About</button>
                    <button className="btn">Contact</button>
                    
                    <button className="btn">Help</button>
                    
                </div>
            </div>
        </>
    )
}

export default Header