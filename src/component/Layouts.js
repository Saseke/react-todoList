import React from 'react';
import '../layouts.css';
import Menus from '../containers/Menus';
import Todo from "../containers/Todo";

export default class Layouts extends React.Component {

    render() {
        return (
            <section className='container'>
                <section className='menu'>
                    <Menus/>
                </section>

                <div className='content-overlay'>
                </div>
                <div className='content-container'>
                </div>
                <section className='content-container'>
                    <Todo/>
                </section>
            </section>

        );
    }
}
