import clsx from "clsx";
import styles from './FriendListItem.module.css';


const FriendListItem = ({ avatar, name, isOnline }) => {

    return (
        <div className={clsx(styles.friendCard)}>
            <img src={avatar} alt="Avatar" width="48" className={styles.avatar} />
            <p className={styles.name}>{name}</p>
            <p className={isOnline? styles.online : styles.offline}> {isOnline ? 'Online' : 'Offline'} </p>
        </div>

    );
};

export default FriendListItem