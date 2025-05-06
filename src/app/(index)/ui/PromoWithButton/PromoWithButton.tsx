import { ButtonGetStarted } from "@/shared/entities/ButtonGetStarted"
import { Block } from "@/shared/ui/Block"
import { Typography } from "@/shared/ui/Typography"
import { Wrapper } from "@/shared/ui/Wrapper"

import styles from './PromoWithButton.module.css'
import clsx from "clsx"
import { CLASS_SCROLL_BLOCK, CLASS_TEXT_ANIMATION } from "@/shared/animations/useBatchAnimation"

export const PromoWithButton = () => {
  return (
    <Block as="section" className={styles.promo}>
      <Wrapper>
        <Block className={styles.inner}>
          <Typography className={clsx(styles.title, CLASS_SCROLL_BLOCK, CLASS_TEXT_ANIMATION)} size="hero" as="h1">Get Access to Semi-Liquids</Typography>
          <ButtonGetStarted />
        </Block>
      </Wrapper>
    </Block>
  )
}