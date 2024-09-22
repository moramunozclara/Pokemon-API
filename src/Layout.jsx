import {Outlet, Link, NavLink} from 'react-router-dom';

import router from './lib/routes/router';


import './css/Layout.css';
import Pokeapi from './components/Pokeapi';
import Pokemon from './components/Pokemon';

const VITE_POKE_API_URL = import.meta.env.VITE_POKE_API_URL;
console.log(`Fetching desde: ${POKE_API_URL}`);


function Layout() {

  return (

        <>
            {/* <header>
              <nav>
                <ul>
                  <li><NavLink to="/">Home</NavLink></li>
                  <li><NavLink to="/users">Users</NavLink></li>
                  <li><NavLink to="/posts">Posts</NavLink></li>
                  <li><NavLink to="/photos">Photos</NavLink></li>
                  <li><NavLink to="/comments">Comments</NavLink></li>

                </ul>
              </nav>
            </header> */}

    <main></main>

      <h1>1. Ejercicio de promesas</h1>
      <Outlet context={{ VITE_POKE_API_URL }} />
    </>

  );}

export default Layout;