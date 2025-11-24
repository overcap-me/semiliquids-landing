'use client'
import { Wrapper } from "@/shared/ui/Wrapper";
import styles from "./Home.module.css";

import { Typography } from "@/shared/ui/Typography";
import { Block } from "@/shared/ui/Block";
import { ButtonGetStarted } from "@/shared/entities/ButtonGetStarted";

import Noticy from "@/shared/assets/benefits/Noticy.svg";
import Optimize from "@/shared/assets/benefits/Optimize.svg";

import { TrustBlockWithPoints } from "../ui/TrustBlockWithPoints";
import { ExploreFunds } from "../ui/ExploreFunds";
import { CompareFunds } from "../ui/CompareFunds";
import { ReviewPerformance } from "../ui/ReviewPerformance";
import { ReceivePeriodic } from "../ui/ReceivePeriodic";
import { PromoWithButton } from "../ui/PromoWithButton";
import { Discriminer } from "../ui/Discriminer";
import { ParallaxProvider } from "react-scroll-parallax";
import clsx from "clsx";
import { CLASS_SCROLL_BLOCK, CLASS_TEXT_ANIMATION } from "@/shared/animations/useBatchAnimation";
import { Suspense } from "react";


const GlobalTitleWithButton = () => {
  return (
    <Block className={styles.desc}>
      <Typography size="hero" className={clsx(styles.title, CLASS_SCROLL_BLOCK, CLASS_TEXT_ANIMATION)} as="h1">Empowering Private Wealth to Access the Semi-Liquid Funds Universe</Typography>
      <ButtonGetStarted />
    </Block>
  )
}

const ListWithBenefits = () => {


  return (
    <Block className={styles.list} as="div">
      <Block className={styles.benefit}>
        <Optimize className={styles.benefitIcon} />
        <Block className={styles.benefitDesc}>
          <Typography className={styles.benefitName} as="h3">Fractionalized Private Equity
          </Typography>
          <Typography>Access high-value private equity investments with lower capital requirements.</Typography>
        </Block>
      </Block>

      <Block className={styles.benefit}>
        <Noticy className={styles.benefitIcon} />
        <Block className={styles.benefitDesc}>
          <Typography className={styles.benefitName} as="h3">Enhanced Liquidity with Open-Ended Structures</Typography>
          <Typography>Access your capital at regular intervals while benefiting from private equity returns.</Typography>
        </Block>
      </Block>

      <Block className={styles.benefit}>
        <Noticy className={styles.benefitIcon} />
        <Block className={styles.benefitDesc}>
          <Typography className={styles.benefitName} as="h3">AI-Driven Investment Insights</Typography>
          <Typography>Make smarter investment decisions with cutting-edge AI analytics.</Typography>
        </Block>
      </Block>

    </Block >
  )
}


export default function Home() {
  return (
    <Suspense>
      <ParallaxProvider>
        <Block as="section" className={styles.main}>
          <Wrapper>
            <Block className={styles.inner}>
              <GlobalTitleWithButton />

              <ListWithBenefits />
            </Block>
          </Wrapper>
        </Block >

        <TrustBlockWithPoints />

        <ExploreFunds />

        <CompareFunds />

        <ReviewPerformance />

        <ReceivePeriodic />

        <PromoWithButton />

        <Discriminer />
      </ParallaxProvider>
    </Suspense>
  );
}
