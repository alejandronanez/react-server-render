import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
    state = {
        answer: 42
    };

    getAsyncData = () => {
        return Promise.resolve(3);
    }

    async componentDidMount() {
        this.setState({
            answer: await this.getAsyncData()
        });
    }

    render() {
        return (
            <h1>Hey there {this.state.answer}</h1>
        );
    }
}

ReactDOM.render(<App />, document.getElementById('root'));
