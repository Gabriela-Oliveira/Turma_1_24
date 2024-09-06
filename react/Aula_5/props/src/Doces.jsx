import React from "react";

class Doces extends React.Component {
    render() {
        return (
            <div>
                <ul>
                    <li>{this.props.nome}</li>
                </ul>
            </div>
        )
    }
}

export default Doces