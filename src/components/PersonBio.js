import React, { Component } from 'react';
class PersonBio extends Component {
    constructor(props) {
        super(props);
        this.state = {
            persons: [
                {
                    name: "Nana Antwi",
                    description: "i was built from water,stones,melanin.. u can find all these in bones",
                },
                {
                    name: "Obiribea",
                    description: "I have an Awesome heart",
                },
            ],
            name: "",
            description: ""
        };
    }
    handleChange = (e) => {
        e.preventDefault();
        this.setState({ [e.target.name]: e.target.value });
    };
    handleSubmit = (e) => {
        e.preventDefault();
        const newPerson = {
            name: this.state.name,
            description: this.state.description
        }
        this.setState({
            persons: [...this.state.persons, newPerson],
        })

    };
    render() {
        return (
            <section style={{ margin: "2rem" }}>
                <form onSubmit={this.handleSubmit}>
                    <div>
                        <label>Name</label>
                        <br />
                        <input type="text" name="name" value={this.state.name} onChange={this.handleChange}></input>
                    </div>
                    <div>
                        <label>Description</label>
                        <br />
                        <textarea name="description" value={this.state.description} onChange={this.handleChange}></textarea>
                    </div>
                    <button>Submit</button>
                </form>
                {this.state.persons.map((item, index) => {
                    return (
                        <div key={index}>
                            <h4>Name: {item.name}</h4>
                            <p>{item.description}</p>
                            <hr />
                        </div>
                    )
                })}
            </section>
        );
    }
}
export default PersonBio;