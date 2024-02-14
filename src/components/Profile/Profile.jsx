
import styles from './Profile.module.css'; 

export const Profile = ({ name, tag, location, image, stats }) => {
  return (
    <div className={styles.profileCard}>
  <div>
    <img
      src={image}
          alt="User avatar"
          className={styles.profileImage}
    />
    <div className={styles.profileInfo}>
          <p className={styles.name}>{name}</p>
          <p className={styles.info}>{tag}</p>
          <p className={styles.info}>{location}</p>
           </div>
  </div>

  <ul className={styles.profileStats}>
       <li className={styles.profileStatsItem}>
           <span className={styles.textStatsItem}>Followers</span>
           <span className={styles.allData}>{stats.followers}</span>
        </li>
        <li className={styles.profileStatsItem}>
            <span className={styles.textStatsItem}>Views</span>
             <span className={styles.allData}>{stats.views}</span>
        </li>
          <li className={styles.profileStatsItem}>
             <span className={styles.textStatsItem}>Likes</span>
             <span className={styles.allData}>{stats.likes}</span>
        </li>
            </ul>
      </div>
      
  );
};
