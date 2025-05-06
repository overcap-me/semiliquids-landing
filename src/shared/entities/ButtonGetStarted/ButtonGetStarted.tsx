import { Typography } from "@/shared/ui/Typography"
import Link from "next/link"

import styles from "./ButtonGetStarted.module.css"

import ArrowRight from "@/shared/assets/ArrowRight.svg"

export const ButtonGetStarted = () => {
  return (
    <Link className={styles.button} href={`${process.env.NEXT_PUBLIC_APP_HOST}/auth/sign-up`}>
      <ArrowRight className={styles.icon} />
      <Typography className={styles.text} fontFamily="manrope" fontWeight={800} as="h6">
        <span>Get started</span>
      </Typography>
    </Link>
  )
}