import React, { memo } from 'react';
import styles from './TitleSubtitleBlock.module.css';

const maxLengthText = 50;

interface TitleSubtitleBlock {
    title: string;
    subtitle: string;
}

const TitleSubtitleBlock = ({title, subtitle}: TitleSubtitleBlock) => {
  return <div className={styles.container}>
    <p className={styles.title}>{title.length > maxLengthText ? title.substring(0, maxLengthText): title}</p>
    <p className={styles.subtitle}>{subtitle.length > maxLengthText ? subtitle.substring(0, maxLengthText): subtitle}</p>
  </div>
}

export default memo(TitleSubtitleBlock);