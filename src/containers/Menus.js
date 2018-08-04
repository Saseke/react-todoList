import React from 'react';
import '../layouts.css';
import PropTypes from 'prop-types';
import {connect} from 'react-redux'
import Menu from '../component/Menu';
import {addMenu, updateMenuIndex} from "../reducer/todoListReducer";

class MenusContainer extends React.Component {

    static propTypes = {
        menus: PropTypes.arrayOf(PropTypes.object),
        curIndex: PropTypes.number.isRequired,
        addMenu: PropTypes.func.isRequired,
        updateMenuIndex: PropTypes.func.isRequired
    };

    handleAddMenu = () => {
        const menu = {
            id: null,
            title: '新增',
            count: 0,
            isDelete: false,
            locked: false
        };
        this.props.addMenu(menu);
    };

    handleUpdateMenuIndex = (index) => {
        this.props.updateMenuIndex(index);
    };

    render() {

        return (
            <div className='list-todos'>
                {
                    this.props.menus.map((menu, i) =>
                        <Menu
                            key={i}
                            count={menu.count}
                            title={menu.title}
                            index={i}
                            onUpdateMenuIndex={this.handleUpdateMenuIndex}
                        />
                    )
                }
                <a onClick={this.handleAddMenu} className='link-list-new'>
                    <span className='icon-plus'>

                    </span>
                    新增
                </a>
            </div>

        );
    }
}

const mapStateToProps = (state) => {
    return {
        menus: state.menus,
        curIndex: state.curIndex
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        addMenu: (menu) => {
            dispatch(addMenu(menu))
        },
        updateMenuIndex: (index) => {
            dispatch(updateMenuIndex(index))
        }
    }

};

export default connect(
    mapStateToProps, mapDispatchToProps
)(MenusContainer);
