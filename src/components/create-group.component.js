import React, { Component } from 'react';

export default class CreateGroup extends Component {

    constructor(props) {
        super(props);
        this.onChangeGroupName = this.onChangeGroupName.bind(this);
        this.onChangeContactName = this.onChangeContactName.bind(this);
        this.onChangeEmail = this.onChangeEmail.bind(this);
        this.onChangePhoneNumber = this.onChangePhoneNumber.bind(this);
        this.onChangeAccountManager = this.onChangeAccountManager.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        
        this.state = {
            group_name: '',
            contact_name: '',
            email: '',
            phone_number: '',
            account_manager: '',
            todo_completed: false
        }
    }
        
    onChangeGroupName(e) {
                this.setState({
                    group_name: e.target.value
                });
            }
        
    onChangeContactName(e) {
        this.setState({
            contact_name: e.target.value
        });
    }

    onChangeEmail(e) {
        this.setState({
            email: e.target.value
        });
    }

    onChangePhoneNumber(e) {
        this.setState({
            phone_number: e.target.value
        });
    }

        
    onChangeAccountManager(e) {
        this.setState({
            account_manager: e.target.value
        });
    }

    onSubmit(e) {
        e.preventDefault();
        
        console.log(`Form submitted:`);
        console.log(`Group Name: ${this.state.group_name}`);
        console.log(`Contact Name: ${this.state.contact_name}`);
        console.log(`Email: ${this.state.email}`);
        console.log(`Phone Number: ${this.state.phone_number}`);
        console.log(`Account Manager: ${this.state.account_manager}`);
        
        this.setState({
            group_name: '',
            contact_name: '',
            email: '',
            phone_number: '',
            account_manager: '',
            todo_completed: false
        })
    }
        
            render() {
                return (
                    <div style={{marginTop: 10}}>
                        <h3>Create New Group</h3>
                        <form onSubmit={this.onSubmit}>
                            <div className="form-group"> 
                                <label>Group Name: </label>
                                <input  type="text"
                                        className="form-control"
                                        value={this.state.group_name}
                                        onChange={this.onChangeGroupName}
                                        />
                            </div>
                            <div className="form-group">
                                <label>Contact Name: </label>
                                <input 
                                        type="text" 
                                        className="form-control"
                                        value={this.state.contact_name}
                                        onChange={this.onChangeContactName}
                                        />
                            </div>

                            <div className="form-group">
                                <label>Email: </label>
                                <input 
                                        type="text" 
                                        className="form-control"
                                        value={this.state.email}
                                        onChange={this.onChangeEmail}
                                        />
                            </div>

                            <div className="form-group">
                                <label>Phone Number: </label>
                                <input 
                                        type="text" 
                                        className="form-control"
                                        value={this.state.phone_number}
                                        onChange={this.onChangePhoneNumber}
                                        />
                            </div>

                            <div className="form-group">
                                <label>Account Manager: </label> <br></br>
                                <input 
                                        type="text" 
                                        className="form-control"
                                        value={this.state.account_manager}
                                        onChange={this.onChangeAccountManager}
                                        />
                            </div>
                                
                                {/* <div className="form-check form-check-inline">
                                    <input  className="form-check-input" 
                                            type="radio" 
                                            name="accountManager" 
                                            id="Caroline" 
                                            value="Caroline"
                                            checked={this.state.account_manager==='Caroline'} 
                                            onChange={this.onChangeAccountManager}
                                            />
                                    <label className="form-check-label">Caroline</label>
                                </div>
                                <div className="form-check form-check-inline">
                                    <input  className="form-check-input" 
                                            type="radio" 
                                            name="accountManager" 
                                            id="Charmen" 
                                            value="Charmen" 
                                            checked={this.state.account_manager==='Charmen'} 
                                            onChange={this.onChangeAccountManager}
                                            />
                                    <label className="form-check-label">Charmen</label>
                                </div>
                                <div className="form-check form-check-inline">
                                    <input  className="form-check-input" 
                                            type="radio" 
                                            name="accountManager" 
                                            id="June" 
                                            value="June" 
                                            checked={this.state.account_manager==='June'} 
                                            onChange={this.onChangeAccountManager}
                                            />
                                    <label className="form-check-label">June</label>
                                </div> */}
                            {/* </div> */}
        
                            <div className="form-group">
                                <input type="submit" value="Create Group" className="btn btn-primary" />
                            </div>
                        </form>
                    </div>
                )
            }
        }

