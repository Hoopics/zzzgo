import React from 'react';
import classnames from 'classnames/bind';
import style from './style.css';
import loadingcoin from '../../images/loadingicoin.png';
const cx = classnames.bind(style);

export default class extends React.PureComponent {
  render() {
    return (
      <div className={cx('loading-coin-container')}>
        <img src="https://mk0findorallrhx93ixi.kinstacdn.com/wp-content/themes/_findora/img/logo-white.svg" />
      </div>
    )
  }
}
