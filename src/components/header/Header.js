import {Link} from "react-router-dom";
import './Header.css'

export default function Header() {
  return (
    <div className={'header'}>
            <img className={'background'} src="https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Y2luZW1hfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=1000&q=60" alt="background"/>
            <h1>The Movie Data Base</h1>
            <p>Your best movie experience</p>
            <div className="movies_link_container" id={'down'}>
                <Link className={'movies_link'} to={'/movies'}>Get started</Link>
            </div>
    </div>
  );
}