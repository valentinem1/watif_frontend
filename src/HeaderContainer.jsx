import React, { Component } from 'react';
import { Link } from "react-router-dom"
import { Segment, Header, Menu, Button } from 'semantic-ui-react'


class HeaderContainer extends Component {

    logOutUser = () => {
        localStorage.clear()
        this.props.historyProps.history.push("/")
    }

    render() {
        // console.log(this.props)
        return (

            <div>

            <Segment className="logo">
                <Header><Link to="/"><i className="cib-etsy">Watif</i></Link></Header>
                
                        {localStorage.token ? 
                        <Header>
                        <Menu className="logged-in-menu-bar">
                        <Menu.Item>
                            <Link to="/profile">Profile</Link>
                        </Menu.Item>
                        <Menu.Item>
                            <Button onClick={this.logOutUser}>Log Out</Button>
                        </Menu.Item>
                        </Menu>
                        </Header> : 
                        <Header className="signup-menu-bar">
                        <Menu>
                        <Menu.Item>
                            <Link to="/signup">SignUp</Link>
                        </Menu.Item>
                        <Menu.Item>
                            <Link to="/login">Login</Link>
                        </Menu.Item>
                        </Menu>
                        </Header>
                        }
            </Segment>
                
            </div>

        );
    }
}

export default HeaderContainer;