import './error-indicator.css';
import death_star_icon from './death-star.png';

const ErrorIndicator = () => {
    return (
        <div className='error-indicator'>
            <img src={death_star_icon} alt="Error icon" className='error-icon' />
            <h4 className='boom'>BOOM!</h4>
            <div>something gone wrong </div>
            <span>(but we already sent droind to fix it)</span>
        </div>
    );
};

export default ErrorIndicator;