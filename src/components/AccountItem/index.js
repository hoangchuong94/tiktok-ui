import classNames from 'classnames/bind';
import styles from './AccountItem.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);
function AccountItem() {
    return (
        <div className={cx('wrapper')}>
            <img
                className={cx('avatar')}
                src="https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/7d3865828f8087ccc570e0490652e29d~c5_100x100.jpeg?x-expires=1687424400&x-signature=GtqXBDTpY2mEeuIDldPM5c6QreU%3D"
                alt="account"
            />
            <div className={cx('infor')}>
                <h4 className={cx('name')}>
                    <span>nguyen van a</span>
                    <FontAwesomeIcon
                        className={cx('check')}
                        icon={faCheckCircle}
                    />
                </h4>
                <p className={cx('username')}>nguyen van a</p>
            </div>
        </div>
    );
}

export default AccountItem;
