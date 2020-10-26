import React, { Component } from 'react';
class BookApp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            BookApp: [
                {
                    title: "Moby dick",
                    author: "charles dickens",
                    description: "interesting book",
                },

            ],
            title: "",
            author: "",
            description: ""
        };
    }
    handleChange = (e) => {
        e.preventDefault();
        this.setState({ [e.target.name]: e.target.value });
    };
    handleSubmit = (e) => {
        e.preventDefault();
        const newBookApp = {
            title: this.state.title,
            author: this.state.author,
            description: this.state.description
        }
        this.setState({
            BookApp: [...this.state.BookApp, newBookApp],
        })

    };
    render() {
        return (
            <section style={{ margin: "2rem" }}>
                <form onSubmit={this.handleSubmit}>
                    <div>
                        <label>Title</label>
                        <br />
                        <input type="text" name="title" value={this.state.title} onChange={this.handleChange}></input>
                    </div>
                    <div>
                        <label>Author</label>
                        <br />
                        <input type="text" name="author" value={this.state.author} onChange={this.handleChange}></input>
                    </div>
                    <div>
                        <label>Description</label>
                        <br />
                        <textarea name="description" value={this.state.description} onChange={this.handleChange}></textarea>
                    </div>
                    <button style={{ color: 'red' }}>Submit</button>
                </form>
                {this.state.BookApp.map((item, index) => {
                    return (
                        <div key={index}>
                            <h4>Title: {item.title}</h4>
                            <h4>Author: {item.author}</h4>
                            <p>{item.description}</p>
                            <hr />
                        </div>
                    )
                })}
            </section>
        );
    }
}
export default BookApp;