import Link from "next/link"
import { Block } from "@/shared/ui/Block"
import { Typography } from "@/shared/ui/Typography"
import styles from './Footer.module.css'

export const Copyright = () => {
  return (
    <Block>
      <Typography fontWeight={600} as="h6">
        SemiLiquids.com by <Link className={styles.copyByLink} href="https://overcap.me" target="_blank">
          <Typography size="xs" as="span" fontWeight={700}>OverCap</Typography>
        </Link>
      </Typography>
      <Typography fontWeight={600} as="h6" color="primary50">
        Copyright &copy;{new Date().getFullYear()}
      </Typography>
    </Block>
  )
}