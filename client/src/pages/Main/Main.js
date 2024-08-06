import React, { Component } from "react";
import { Sidebar, Segment, Menu, Icon } from "semantic-ui-react";
import { Link, NavLink, Outlet } from "react-router-dom";
import "./Main.css";

class Main extends Component {
  state = {
    visible: false,
  };

  toggleVisibility = () => this.setState({ visible: !this.state.visible });

  render() {
    const { visible } = this.state;
    return (
      <div>
        <Menu fluid widths={3}>
          <Menu.Item name="menu" onClick={this.toggleVisibility}>
            <Icon name="sidebar" />
            Menu
          </Menu.Item>
          <Menu.Item id="logo" as={Link} to="/" name="logo">
            <span>Easy Events</span>
          </Menu.Item>
          <Menu.Item as={Link} to="/event/checkin" name="scan">
            <Icon name="qrcode" />
            Check-In
          </Menu.Item>
        </Menu>
        <Sidebar.Pushable as={Segment}>
          <Sidebar
            as={Menu}
            animation="push"
            width="thin"
            visible={visible}
            icon="labeled"
            vertical
            inverted
          >
            <Menu.Item as={NavLink} to="/admin/home" name="home">
              <Icon name="home" />
              Home
            </Menu.Item>
            <Menu.Item as={NavLink} to="/admin/attendees" name="attendees">
              <Icon name="users" />
              Attendees
            </Menu.Item>
            <Menu.Item as={NavLink} to="/admin/badgegeneration" name="badge-generation">
              <Icon name="qrcode" />
              Badges
            </Menu.Item>
            <Menu.Item as={NavLink} to="/admin/workshops" name="workshops">
              <Icon name="magic" />
              Workshops
            </Menu.Item>
            <Menu.Item as={NavLink} to="/admin/registration" name="registration">
              <Icon name="pencil" />
              Registration
            </Menu.Item>
            <Menu.Item as={NavLink} to="/admin/firstregistration" name="firstregistration">
              <Icon name="checkmark" />
              First Registration
            </Menu.Item>
            <Menu.Item as={NavLink} to="/admin/checkin" name="check-in">
              <Icon name="checkmark" />
              Check-In
            </Menu.Item>
          </Sidebar>
          <Sidebar.Pusher>
            <Segment basic onClick={this.toggleVisibility}>
              <Outlet />
            </Segment>
          </Sidebar.Pusher>
        </Sidebar.Pushable>
      </div>
    );
  }
}

export default Main;
