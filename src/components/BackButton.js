import React from 'react';
import { useHistory } from 'react-router-dom';
import '../index.css';

const BackButton = () => 
{
    const history = useHistory();

    function onClick(e) {
        e.preventDefault();
        const path = window.location.pathname;
        console.log(path);
        if (path.includes('/search')) history.push('/home');
        else history.goBack();
    }

    return (
        <button className='back' onClick={onClick}> <img src={require('../images/back.png').default} alt='Back'/> </button>
    );
}

export default BackButton;