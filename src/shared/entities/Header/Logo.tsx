import { Typography } from "@/shared/ui/Typography"
import Link from "next/link"

import styles from './Header.module.css'

export const Logo = () => {
  return (
    <Link href="/">
      <Typography className={styles.logoCompanyName} fontFamily="frank_ruhl_libre" fontWeight={400} size="l">
        <Typography as="span">SEMI</Typography>
        <span className={styles.dot} />
        <Typography as="span">LIQUIDS</Typography>
      </Typography>
      <Typography className={styles.logoCompanyNameSub} size="xs" fontFamily="manrope" fontWeight={400} color="white80">
        Private Market Funds Navigator
      </Typography>
    </Link>
  )
}