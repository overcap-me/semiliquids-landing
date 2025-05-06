import WishlistAdd from '@/shared/assets/WishlistAdd.svg'
import { Block } from '@/shared/ui/Block'
import { Typography } from '@/shared/ui/Typography'
import styles from './FavoriteItem.module.css'
import { FC } from 'react'

type FavoriteItemProps = {
  fund: {
    name: string
  }
  amount: string
  date: string
  classDetail: string
}

export const FavoriteItem: FC<FavoriteItemProps> = ({ fund, amount, date, classDetail }) => {
  return (
    <Block className={styles.favoriteItem}>
      <Block className={styles.favoriteItemBody}>
        <Typography className={styles.favoriteItemName} as="h4" fontWeight={800}>
          {fund.name}
        </Typography>

        <Typography className={styles.favoriteItemCurrency}>
          {amount}
          <Typography as="span" color="primary70">{date}</Typography>
        </Typography>

        <Typography className={styles.favoriteItemClass} fontFamily="manrope" fontWeight={500} as="h4">
          {classDetail}
        </Typography>
      </Block>

      <WishlistAdd className={styles.favoriteItemIcon} />
    </Block>
  )
}