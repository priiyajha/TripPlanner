import React from 'react'
import { useNavigate } from 'react-router-dom';
export default function PageNotFound() {
    const navigate = useNavigate();
    function handleClick() {
        navigate("/")
    }
    return (
        <div>
            <h1 style={{ fontSize: "4rem", textAlign: "center" }}>Page Not Found</h1>
            <div className='see-more'>
                <button class="glow-on-hover" onClick={handleClick}>GO To HomePage</button>
            </div>
        </div>
    )
}
