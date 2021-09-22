import React, { Component } from 'react';
import logo from '../images/logo.png';
import './indexUi.css';
export default class className extends Component{
    state={
        eggidx: 0,
    }
    render() {
        return (
            <div className="ui_item">
                <div className="ui cloud"></div>
                <div className="ui cloud2"></div>
                <div className="ui ladder"></div>
                <div className="ui tree1"></div>
                <div className="ui tree2"></div>
                <div className="ui footer"></div>
                <div className="ui start1"></div>
                <div className="ui start2"></div>
                <div className="ui start3"></div>
                <div className="linkBOx">
                    <a className="linkIcon github" href="https://github.com/zTgx/zzzgo" target="_blank">
                        <i className="fab fa-github fa-2x"></i>
                    </a>
                    <a className="linkIcon email" href="mailto:747674262@qq.com">
                        <i className="fas fa-envelope fa-2x"></i>
                    </a>
                </div>
                <div className="ui Elf0"></div>
                <a href="" target="_blank" className="ui Elf1"></a>
                <a href="" target="_blank" className="ui Elf2"></a>
                <a href="" target="_blank" className="ui Elf3"></a>
                <a href="" target="_blank" className="ui fruit1"></a>
                <a className="ui fruit2"></a>

            </div>
        )
    }
}
