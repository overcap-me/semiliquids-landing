import Image from "next/image"
import { Block } from "@/shared/ui/Block"
import { Typography } from "@/shared/ui/Typography"
import { Wrapper } from "@/shared/ui/Wrapper"

import styles from './TrustBlockWithPoints.module.css'
import stylesLayout from '@/common/styles/module/Layout.module.css'

import Logo from '@/shared/assets/images/logos/Logo@2x.png'
import Logo1 from '@/shared/assets/images/logos/Logo@2x-1.png'
import Logo2 from '@/shared/assets/images/logos/Logo@2x-2.png'
import Logo3 from '@/shared/assets/images/logos/Logo@2x-3.png'
import Logo4 from '@/shared/assets/images/logos/Logo@2x-4.png'
import Logo5 from '@/shared/assets/images/logos/Logo@2x-5.png'
import Logo6 from '@/shared/assets/images/logos/Logo@2x-6.png'
import Logo7 from '@/shared/assets/images/logos/Logo@2x-7.png'
import Logo8 from '@/shared/assets/images/logos/Logo@2x-8.png'
import Logo9 from '@/shared/assets/images/logos/Logo@2x-9.png'
import Logo10 from '@/shared/assets/images/logos/Logo@2x-10.png'
import Logo11 from '@/shared/assets/images/logos/Logo@2x-11.png'
import clsx from "clsx"
import { CLASS_SCROLL_BLOCK, CLASS_TEXT_ANIMATION } from "@/shared/animations/useBatchAnimation"


export const TrustBlockWithPoints = () => {

  return (
    <Block className={styles.trust} as="section">
      <Wrapper>
        <Block className={clsx(stylesLayout.innerWith2Columns, stylesLayout.aic)}>
          <Block>
            <Typography className={clsx(CLASS_SCROLL_BLOCK, CLASS_TEXT_ANIMATION)} as="h1">
              Unlock the Future of Private Equity Investing
            </Typography>
            <Typography color="primary70">
              Experience seamless and accessible private capital markets within our innovative investment ecosystem.
            </Typography>
          </Block>

          <Block className={styles.list}>
            <Block className={styles.point}>
              <Typography className={styles.pointName} as="h2" color="accent">
                $40bn+
              </Typography>
              <Typography as="h6" color="primary70">
                Aggregate AuM <br />
                of Catalog Funds
              </Typography>
            </Block>

            <Block className={styles.point}>
              <Typography className={styles.pointName} as="h2" color="accent">
                200+
              </Typography>
              <Typography as="h6" color="primary70">
                Funds and Share Classes <br />
                Under Coverage
              </Typography>
            </Block>

            <Block className={styles.point}>
              <Typography className={styles.pointName} as="h2" color="accent">
                2,000+
              </Typography>
              <Typography as="h6" color="primary70">
                Family Offices and <br />
                Private Wealth Subscribers
              </Typography>
            </Block>
          </Block>

        </Block>

        <Block className={styles.logos}>
          <Image className={styles.logo} width={200} height={50} src={Logo} alt="" />
          <Image className={styles.logo} width={200} height={50} src={Logo1} alt="" />
          <Image className={styles.logo} width={200} height={50} src={Logo2} alt="" />
          <Image className={styles.logo} width={200} height={50} src={Logo3} alt="" />
          <Image className={styles.logo} width={200} height={50} src={Logo4} alt="" />
          <Image className={styles.logo} width={200} height={50} src={Logo5} alt="" />
          <Image className={styles.logo} width={200} height={50} src={Logo6} alt="" />
          <Image className={styles.logo} width={200} height={50} src={Logo7} alt="" />
          <Image className={styles.logo} width={200} height={50} src={Logo8} alt="" />
          <Image className={styles.logo} width={200} height={50} src={Logo9} alt="" />
          <Image className={styles.logo} width={200} height={50} src={Logo10} alt="" />
          <Image className={styles.logo} width={200} height={50} src={Logo11} alt="" />
        </Block>
      </Wrapper >
    </Block >
  )
}