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
                src="https://p16-sign-sg.tiktokcdn.com/tos-alisg-avt-0068/07c2b080eabf890e7d90e2de0eebd206~tplv-tiktokx-cropcenter:100:100.jpeg?dr=14579&refresh_token=46a022d0&x-expires=1755234000&x-signature=gHL6SmqE5eAKIrOAc1Vri2G%2BaE8%3D&t=4d5b0474&ps=13740610&shp=30310797&shcp=c1333099&idc=sg1"
                alt="Hoa"
            />
            <div className={cx('info')}>
                <h4 className={cx('name')}>
                    <span>Nguyen Van A</span>
                    <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />
                </h4>
                <span className={cx('username')}>nguyenvana</span>
            </div>
        </div>
    );
}

export default AccountItem;
