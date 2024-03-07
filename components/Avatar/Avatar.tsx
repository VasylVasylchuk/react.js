// Avatar.tsx
import React, { useState, useEffect, useMemo } from 'react';
import styles from './Avatar.module.css';
import { memo } from 'react';
import { User } from '../../model/types';
import useMobileLayout from '../../hooks/useMobileLayout';

interface AvatarProps {
  picture: User['picture'];
}

const Avatar = ({ picture }: AvatarProps) => {
  const isMobile = useMobileLayout();

  return (
    <img
      src={isMobile ? picture.large : picture.thumbnail}
      alt="avatar"
      className={styles.avatar}
    />
  );
};

export default memo(Avatar);
