import React, {Component} from 'react';
import { NavLink } from 'react-router-dom'

class Layout extends Component {
    render() {
        return <div className="App">
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText"
                        aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                </button>
                <div className="collapse navbar-collapse ml-5" id="navbarText">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item active">
                            <NavLink to="/" className="nav-item nav-link">Главная</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/movie" className="nav-item nav-link">Фильмы</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/blog" className="nav-item nav-link">Анекдоты</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/game" className="nav-item nav-link">Игра</NavLink>
                        </li>
                    </ul>
                    <span className="navbar-text">
                        Последние домашки которые я сделал
                    </span>
                </div>
            </nav>
            {this.props.children}
        </div>

    }
}

export default Layout;