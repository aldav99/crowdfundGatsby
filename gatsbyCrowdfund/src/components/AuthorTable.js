import React from 'react';

const AuthorRow = React.memo((props) => {
    console.log('render AuthorRow')
    let author = props.author
    return (
        <tr>
            <td>{author.name}</td>
            <td>{author.email}</td>
            <td><img src={author.avatar} width="40" height="50"></img></td>
            <td>{author.brief}</td>
        </tr>
    );
})

export class AuthorTable extends React.PureComponent {
    constructor(props) {
        super(props);
        this.state = { onlyThree: true };
    }

    toggleViev() {
        this.setState({ onlyThree: !this.state.onlyThree })
    }

    render() {
        console.log('render AuthorTable')
        let authors;
        (this.props.authors.length > 3 && this.state.onlyThree) ? authors = this.props.authors.slice(0, 3) : authors = this.props.authors;

        return (
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Avatar</th>
                        <th>Brief</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        (this.props.authors.length > 3) ? <tr><td><button onClick={() =>
                            this.toggleViev()}>More...</button></td></tr> : null
                    }

                    {authors.map(function (author, key) {
                        return (
                            <AuthorRow key={author.id} author={author} />
                        );
                    })}
                </tbody>
            </table >);
    }
}
