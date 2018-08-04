import React from 'react';
import '../layouts.css';
import PropTypes from 'prop-types';

class Menu extends React.Component {

    static propTypes = {
        title: PropTypes.string.isRequired,
        count: PropTypes.number.isRequired,
        index: PropTypes.number.isRequired,
        onUpdateMenuIndex: PropTypes.func.isRequired
    };


    handleUpdateMenuIndex = (index) => {
        this.props.onUpdateMenuIndex(index);
    };

    render() {

        const {title, count, index} = this.props;
        return (
            <div>
                <a onClick={this.handleUpdateMenuIndex.bind(this, index)}
                   className='list-todo list activeListClass'>
                    <span className='count-list'>
                        {count}
                    </span>
                    {title}
                </a>
            </div>
        );
    }
}

export default Menu;