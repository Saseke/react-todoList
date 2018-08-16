import React from 'react';
import '../layouts.css';
import PropTypes from 'prop-types';
import '../style/list-items.less';
import '../style/form.less';
import '../style/icon.less';

class Item extends React.Component {


    static propTypes = {
        record: PropTypes.object.isRequired,
        index: PropTypes.number.isRequired,
        onHandleUpdateRecord: PropTypes.func.isRequired,
        onHandleDeleteRecord: PropTypes.func.isRequired
    };


    componentWillReceiveProps(nextProps) {
        alert("item update");
        if (nextProps.record.text !== this.state.text) {
            this.setState({
                text: nextProps.record.text
            })
        }
    }

    constructor(props) {
        super(props);
        this.state = {
            text: this.props.record.text
        }
    }

    /*

        state = {
            text: this.props.record.text
        };
    */

    handleChange = (event) => {
        this.setState({
            text: event.target.value
        });
    };

    handleUpdateRecord(e) {
        this.props.onHandleUpdateRecord(this.props.record.id, e.target.value);
    };

    handleDeleteRecord(id) {
        this.props.onHandleDeleteRecord(id);
    };

    render() {

        const {record} = this.props;

        return (
            <div className='list-item  editingClass editing'>
                <label className='checkbox'>
                    <input type="checkbox"/>
                    <span>

                    </span>
                </label>
                <input onChange={this.handleChange} onBlur={this.handleUpdateRecord.bind(this)} type="text"
                       value={this.state.text}
                       placeholder="写点什么"/>

                <a onClick={this.handleDeleteRecord.bind(this, record.id)} className='delete-item'>
                    <span className='icon-trash'>
                    </span>
                </a>
            </div>
        );
    }
}

export default Item;
