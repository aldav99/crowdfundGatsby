import React from 'react';

import { AuthorTable } from './AuthorTable';
import { SubscribeModal } from './SubscribeModal';

import { percentOfProgress } from './percentOfProgress';

const styles = {
    letter: {
        color: 'red'
    }
}

export const BookRows = React.memo(({ books, removeFromTable, authors }) => {
    console.log('render BookRow')
    return (
        <table>
            <thead>
                <tr>
                    <th>Title</th>
                    <th>Close</th>
                    <th>Brief</th>
                    <th>Page</th>
                    <th>Lang</th>
                    <th>Progress</th>
                    <th>Cover</th>
                    <th>Author</th>
                    <th>minCost</th>
                    <th>royalty</th>
                    <th>neededCost</th>
                    <th>fundedSum</th>
                    <th>neededSum</th>
                    <th>subscriber</th>
                </tr>
            </thead>
            <tbody>
                {
                    books.slice(0, 3).map(book => {
                        return (<tr key={book.id}>
                            <td>{book.title}</td>
                            <td><button onClick={() =>
                                removeFromTable(book.id)} style={styles.letter}>*</button></td>
                            <td>{book.brief}</td>
                            <td>{book.page}</td>
                            <td>{book.lang}</td>
                            <td>{percentOfProgress(book.fundedSum, book.neededSum)}</td>
                            <td><img src={book.cover} width="40"
                                height="40"></img></td>
                            <td><AuthorTable
                                authors={authors.filter(author => book.authors.includes(author.id))} />
                            </td>

                            <td>{book.minCost}</td>
                            <td><Royalty minCost={book.minCost} /></td>
                            <td>{book.neededCost}</td>
                            <td>{book.fundedSum}</td>
                            <td>{book.neededSum}</td>


                            {
                                (book.subscriber > 10) ? <td style={styles.letter}>{book.subscriber}</td>
                                    : <td>{book.subscriber}</td>
                            }

                            <td><SubscribeModal /></td>
                        </tr>)
                    })
                }
            </tbody>
        </table>)
})


export class Royalty extends React.PureComponent {
    constructor(props) {
        super(props);
        this.searchInputRef = React.createRef();
        this.state = { royalty: '' };

        this.handleChange = this.handleChange.bind(this);
        this.keyPress = this.keyPress.bind(this);
    }


    handleChange(event) {
        this.setState({ royalty: event.target.value });
    }

    keyPress(event) {
        if (event.keyCode == 13) {
            let authorsInterest = Math.floor(parseInt(event.target.value) * 0.9)

            let minCost = parseInt(this.props.minCost)

            if (authorsInterest < minCost) {
                alert(`Less minCost: ${minCost}`)
                return this.setState({ royalty: '' });
            }
            this.setState({ royalty: authorsInterest });
        }
    }

    componentDidMount() {
        this.searchInputRef.current.focus();
    }

    render() {
        return (
            <input ref={this.searchInputRef} value={this.state.royalty} onKeyDown={this.keyPress} onChange={this.handleChange} />
        )
    }
}

