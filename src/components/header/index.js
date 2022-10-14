import React from 'react';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';
import img from "../../imgs/logomenu1.png";
import "./style.css"
    
    
export default class Header extends React.Component {
    constructor(props) {
    super(props);


    this.toggleNavbar = this.toggleNavbar.bind(this);
    this.state = {
        collapsed: true
    };
    }

    toggleNavbar() {
    this.setState({
        collapsed: !this.state.collapsed
    });
    }
    render() {
        const mystyle = {
            color: "#0B0C61",
            fontWeight:"600",
        }
    return (
        <div>
        <Navbar color="blue">
            <NavbarBrand href="/" className="mr-auto"><img className="imglogo" src={img}></img></NavbarBrand>
            <NavbarToggler onClick={this.toggleNavbar} className="mr-2"/>
            <Collapse isOpen={!this.state.collapsed} navbar>
            <Nav navbar>
                <NavItem>
                <NavLink style={mystyle} href="/">Método</NavLink>
                </NavItem>
                <NavItem>
                <NavLink style={mystyle} href="/contato">Contato</NavLink>
                </NavItem>
                <NavItem>
                <NavLink style={mystyle} href="/teste">Teste de nivelação</NavLink>
                </NavItem>
                <NavItem>
                <NavLink style={mystyle} href="/traducao">Traduções</NavLink>
                </NavItem>                
            </Nav>
            </Collapse>
        </Navbar>
        </div>
    );
    }
}

