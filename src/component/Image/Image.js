import React from 'react';
import { Tab, Nav } from "react-bootstrap";
import './Image.css'
import { BFSIcard } from './BFSIcard';
import { IT } from './IT';
import { MSG } from './MSG';
import { Services } from './Services';

export const Image = () => {
    return (
        <div className="project" id="project">
          <h1 className="heading">Our Customers</h1>
                         <Tab.Container id="projects-tabs" defaultActiveKey="first" >
                        <Nav variant="pills" className="nav-pills 
                         justify-content-center align-items-center" 
                        id="pills-tab">
                            <Nav.Item>
                                <Nav.Link eventKey="first" >BFSI</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="second">ITeS</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="third" >
                                   Services
                                </Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="forth" >
                                   Manufacture
                                </Nav.Link>
                            </Nav.Item>
                        </Nav>
                        <Tab.Content>
                            <Tab.Pane eventKey="first" >
                                <BFSIcard />         
                            </Tab.Pane>
                            <Tab.Pane eventKey="second" >
                            <IT />
                            </Tab.Pane>
                            <Tab.Pane eventKey="third" >
                            <Services />
                            </Tab.Pane>
                            <Tab.Pane eventKey="forth" >
                            <MSG />
                            </Tab.Pane>
                        </Tab.Content>
                        </Tab.Container>
        </div>
      );
}