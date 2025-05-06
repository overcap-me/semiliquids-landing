import Mail from '@/shared/assets/Mail.svg'
import Eye from '@/shared/assets/Eye.svg'
import styles from './Notify.module.css'
import { Block } from '@/shared/ui/Block'
import { Typography } from '@/shared/ui/Typography'
import { ClassValue } from 'clsx'
import { FC } from 'react'
import clsx from 'clsx'

type NotifyProps = {
  className?: ClassValue
}

export const Notify: FC<NotifyProps> = ({ className }) => {
  return (
    <Block className={clsx(styles.notify, className)}>
      <Block className={styles.notifyIcon}>
        <Mail />
      </Block>

      <Block className={styles.notifyBody}>
        <Block className={styles.notifyHeader}>
          <Typography as="h4" fontWeight={800} className={styles.notifyName}>
            Semi-Liquids
          </Typography>
          <Typography color="primary70" fontWeight={600} size="xxs" className={styles.notifyTime}>
            10:00 AM
          </Typography>
        </Block>
        <Typography size="m" className={styles.notifyText}>Here are the updates on your funds for February 2025</Typography>
      </Block>

      <Block className={styles.notifyButton}>
        <Eye />
        <Typography as="h6" fontWeight={800} color="accent">View</Typography>
      </Block>
    </Block>
  )
}