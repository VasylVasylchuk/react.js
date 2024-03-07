import React, { memo, useMemo } from 'react';
import styles from './UserInfoBlock.module.css';
import { User } from '../../model/types';
import TitleSubtitleBlock from '../TitleSubtitleBlock/TitleSubtitleBlock';

import Avatar from '../Avatar/Avatar';
import useFormateUserData from '../../hooks/useFormateUserData';

interface UserInfoBlockProps {
  user: User;
}

const UserInfoBlock = ({ user }: UserInfoBlockProps) => {

  const formattedData = useFormateUserData(user);

  return (
    <div className={styles.container}>
      <div className={styles.main}>
        <Avatar picture={formattedData.picture} />
        <TitleSubtitleBlock title={formattedData.name} subtitle={user.email} />
      </div>
      <div className={styles.additional}>
        <div className={styles.first}>
          <TitleSubtitleBlock title={formattedData.date} subtitle='Birth date' />
          <TitleSubtitleBlock title={formattedData.address} subtitle='Address' />
        </div>
        <div>
          <TitleSubtitleBlock title={formattedData.phone} subtitle='Phone number' />
          <TitleSubtitleBlock title={formattedData.password} subtitle='Password' />
        </div>
      </div>
    </div>
  );
};

export default memo(UserInfoBlock);
