import ReactDOM from 'react-dom';
import React from 'react';

const styles = {
    overlay: {
        backgroundColor: 'rgba(0, 0, 0, 0.95)',
        position: 'absolute',
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },

    body: {
        backgroundColor: '#fff',
        padding: "10px"
    }
}


export class SubscribeModal extends React.Component {
    constructor(props) {
        super(props);
        this.state = { isOpen: false };
    }
    toggle() {
        this.setState({ isOpen: !this.state.isOpen });
    }

    render() {
        return (
            <React.Fragment>
                <a onClick={() => this.toggle()}>Условия подписки</a>
                {this.state.isOpen && ReactDOM.createPortal(
                    <div style={styles.overlay}>
                        <div style={styles.body}>
                            В зависимости от суммы перевода, поощряем подписчиков личной подписью автора, мерчендайзом (футболками, кружками), упоминанием в благодарностях.
                    <button onClick={() => this.toggle()}>Закрыть
                                </button>
                        </div>
                    </div>,
                    document.getElementById('modal-root')
                )}
            </React.Fragment>
        );
    }
}
