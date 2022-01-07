import React, {useState} from 'react'
import ButtonColor from './ButtonColor';

class Table extends React.Component {
    constructor(props) {
        super(props)
    }


    render() {
        console.log(this.props)
        const selectColor = this.props.color
        const renderTable = () => {
            var column = [];
            var row = [];
            for (var i = 0; i < this.props.matrix[1]; i++) {
                row.push(<ButtonColor color={this.props.color}/>)
            }
            for (var i = 0; i < this.props.matrix[0]; i++) {
                column.push(<tr>{row}</tr>)
            }
            return column
        }
        return (
            <div className="w3-white w3-padding notranslate w3-padding-16 row">
                <table className="grid col-6">
                    <tbody>
                        { renderTable() }
                    </tbody>
                </table>
            </div>
        );
    }
}
export default Table