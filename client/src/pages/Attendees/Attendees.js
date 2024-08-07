import React, { Component } from 'react';
import { Container, List, Header, Label, Input } from 'semantic-ui-react';
import API from "../../utils/API";

export default class Attendees extends Component {
    state = {
        attendees: [],
        searchQuery: ''
    }

    componentDidMount() {
        this.loadAttendees();
    }

    loadAttendees = () => {
        API
            .getAttendees()
            .then(res => {
                console.log(res)
                this.setState({ attendees: res.data });
            })
            .catch(err => console.log(err));
    }

    handleSearchChange = (event) => {
        this.setState({ searchQuery: event.target.value });
    }

    attendeeRender() {
        const filteredAttendees = this.state.attendees.filter(attendee =>
            `${attendee.firstName} ${attendee.lastName}`.toLowerCase().includes(this.state.searchQuery.toLowerCase())
        );

        return filteredAttendees.map(attendee => (
            <List.Item className='card' key={attendee.id}>
                <List.Icon
                    name='checkmark'
                    size='big'
                    verticalAlign='middle'
                    color={attendee.registered ? "teal" : "grey"}
                />
                <List.Content>
                    <List.Header as='h2'>
                        {attendee.firstName} {attendee.lastName}
                    </List.Header>
                    <List.Description>
                        <List>
                            <List.Item
                                icon='user'
                                content={`${attendee.dancerType}`}
                            />
                            <List.Item
                                icon='marker'
                                content={`${attendee.city}, ${attendee.state}`}
                            />
                            <List.Item
                                icon='mail'
                                content={attendee.email}
                            />
                            <List.Item
                                icon='qrcode'
                                content='Full Festival Pass'
                            />
                            {attendee.phoneNumber && (
                                <List.Item
                                    icon='phone'
                                    content={`Phone: ${attendee.phoneNumber}`}
                                />
                            )}
                            {attendee.otherDescription && (
                                <List.Item
                                    icon='info'
                                    content={`Other Description: ${attendee.otherDescription}`}
                                />
                            )}
                        </List>
                    </List.Description>
                </List.Content>
            </List.Item>
        ));
    }

    render() {
        return (
            <Container>
                <Header as="h2" inverted>
                    Event Attendees
                </Header>
                <Input
                    icon='search'
                    placeholder='Search by name...'
                    value={this.state.searchQuery}
                    onChange={this.handleSearchChange}
                />
                {this.state.attendees.length ? (
                    <List divided inverted relaxed className='one-card'>
                        {this.attendeeRender()}
                    </List>
                ) : (
                    <h3>No Results to Display</h3>
                )}
            </Container>
        );
    }
}
