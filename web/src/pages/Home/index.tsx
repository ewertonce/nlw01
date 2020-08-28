import React from 'react';
import { FiLogIn } from 'react-icons/fi';
import { Link } from 'react-router-dom';

import './styles.css';

import logo from '../../assets/logo.svg';

const Home = () => {
    return (
        <div id="page-home">
            <div className="content">
                <header>
                    <img src={logo} alt="Ecoleta"/>
                </header>

                <main>
                    <h1>Your place to dispose recycable waste.</h1>
                    <p>We help people to find free drop-off spots.</p>

                    <Link to="/create-point">
                        <span>
                            <FiLogIn />
                        </span>
                        <strong>
                            Add a new drop-off place
                        </strong>
                    </Link>
                </main>
            </div>
        </div>
    )
}

export default Home;