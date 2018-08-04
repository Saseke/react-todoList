import React from 'react';
import '../layouts.css';
import '../style/todo.less';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import Item from "../component/Item";
import {addRecord, deleteRecord, updateRecord} from "../reducer/todoListReducer";
import {generateId} from "../util/randomHash";

class TodoContainer extends React.Component {


    static propTypes = {
        menus: PropTypes.arrayOf(PropTypes.object).isRequired,
        curIndex: PropTypes.number.isRequired,
        records: PropTypes.array,
        addRecord: PropTypes.func.isRequired,
        updateRecord: PropTypes.func.isRequired,
        deleteRecord: PropTypes.func.isRequired
    };


    handleAddRecord(e) {
        if (e.key === 'Enter') {
            const hashId = generateId(10);
            const curMenu = this.props.menus[this.props.curIndex];
            const record = {
                id: hashId,
                isDelete: false,
                checked: false,
                todoId: curMenu.id,
                text: e.target.value
            };
            this.props.addRecord(record);
            e.target.value = "";
        }
    };

    handleUpdateRecord(id, record) {
        this.props.updateRecord(id, record);
    }

    handleDeleteRecord(id) {
        this.props.deleteRecord(id);
    }

    render() {

        const {curIndex, menus, records} = this.props;
        const curMenu = menus[curIndex];
        const curMenuRecords = records.filter(record => record.todoId === curMenu.id);

        console.log("--------------");
        console.log(curMenu);
        console.log(curMenuRecords) ;


        return (
            <div className='page lists-show'>
                <nav>

                    <div className='form list-edit-form'>
                        <div className='nav-group right'>
                            <a className='nav-item'>
                               <span className='icon-close'>
                               </span>
                            </a>
                        </div>
                    </div>


                    <div className='nav-group'>
                        <a className='nav-item'>
                           <span className='icon-list-unordered'>

                           </span>
                        </a>
                    </div>

                    <h1 className='title-page'>
                        <span className='title-wrapper'>{curMenu.title}</span>
                        <span className='count-list'>{curMenu.count}</span>
                    </h1>

                    <div className='nav-group right'>
                        <div className='options-web'>
                            <a className='nav-item'>
                                <span className='icon-lock'>

                                </span>
                                <span className='icon-unlock'>

                                </span>
                            </a>
                            <a className="nav-item">
                                <span className='icon-trash'>

                                </span>
                            </a>
                        </div>
                    </div>


                    <div className="form todo-new input-symbol">
                        <input onKeyPress={this.handleAddRecord.bind(this)} type="text" placeholder='请输入'/>
                        <span className="icon-add">

                        </span>
                    </div>
                </nav>

                {/*主题部分*/}
                <div className='content-scrollable list-items'>
                    {
                        curMenuRecords.map((record, index) =>
                            <Item
                                record={record}
                                key={index}
                                index={index}
                                onHandleUpdateRecord={this.handleUpdateRecord.bind(this)}
                                onHandleDeleteRecord={this.handleDeleteRecord.bind(this)}
                            />
                        )
                    }
                </div>

            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        curIndex: state.curIndex,
        records: state.records,
        menus: state.menus
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        addRecord: (record) => {
            dispatch(addRecord(record));
        },
        updateRecord: (id, record) => {
            dispatch(updateRecord(id, record))
        },
        deleteRecord: (id) => {
            dispatch(deleteRecord(id))
        }
    }
};
export default connect(
    mapStateToProps, mapDispatchToProps
)(TodoContainer)
