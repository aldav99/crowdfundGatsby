import React from 'react';
export class FeedbackForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            email: '',
            question: ''
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({ [event.target.name]: event.target.value });
    }

    handleSubmit(event) {
        console.log(this.state);
        this.setState({
            name: '',
            email: '',
            question: ''
        });
        event.preventDefault();
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <Field
                    name='name'
                    label='Name'
                    value={this.state.name}
                    onChange={this.handleChange}
                />
                <Field
                    name='email'
                    label='Email'
                    value={this.state.email}
                    onChange={this.handleChange}
                />
                <Field
                    name='question'
                    label='Question'
                    value={this.state.question}
                    onChange={this.handleChange}
                />

                <input type="submit" value="Отправить" />
            </form>
        );
    }
}

const Field = (props) => {
    return (
        <label>
            {props.label}:
            <input type="text" name={props.name} value={props.value} onChange={props.onChange} placeholder={props.label} />
        </label>
    )
}
