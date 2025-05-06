'use client'
import { Block } from "@/shared/ui/Block"
import { Typography } from "@/shared/ui/Typography"
import { Wrapper } from "@/shared/ui/Wrapper"
import styles from './ExploreFunds.module.css'

import stylesLayout from '@/common/styles/module/Layout.module.css'

import { FavoriteItem } from "./FavoriteItem"
import clsx from "clsx"
import { Parallax } from "react-scroll-parallax"
import { CLASS_SCROLL_BLOCK, CLASS_TEXT_ANIMATION } from "@/shared/animations/useBatchAnimation"

const list = [
  { id: 1, fund: { name: "Schorders Capital Semi-Liquid Global Private Equity" }, amount: "£2B", date: "Jan 2025", classDetail: "C-Accumul", },
  { id: 2, fund: { name: "KKR Private Markets Equity Fund SICAV SA-I" }, amount: "$3B", date: "Jan 2025", classDetail: "Class R", },
  { id: 3, fund: { name: "BlackRock Private Investments Fund" }, amount: "$255M", date: "Jan 2025", classDetail: "Class I", },
  { id: 4, fund: { name: "Carlyle AlphInvest Private Markets Fund" }, amount: "$80M", date: "Jan 2025", classDetail: "Class I", },
  { id: 5, fund: { name: "AMG Pantheon Fund" }, amount: "$3,5B", date: "Dec 2024", classDetail: "Class I", },
  { id: 6, fund: { name: "Global Private Asstets Fund" }, amount: "$5M", date: "Dec 2024", classDetail: "Class I", },
]

export const ExploreFunds = () => {

  return (
    <Block as="section" className={styles.explore}>
      <Wrapper>
        <Block className={clsx(stylesLayout.innerWith2Columns, stylesLayout.aic)}>
          <Block>
            <Typography className={clsx(CLASS_SCROLL_BLOCK, CLASS_TEXT_ANIMATION)} as="h1">
              Explore Funds & Managers
            </Typography>
            <Typography color="primary70">
              Discover a wide range of investment options suited to various goals and risk preferences. In this section, you can explore different funds, each offering unique strategies, asset allocations, and performance potential. Learn more about available share classes, which provide flexibility in terms of fees, minimum investments, and dividend options. Start here to find the right mix for your portfolio and make informed investment choices.
            </Typography>
          </Block>

          <Block>
            <Parallax className={clsx(styles.list, CLASS_SCROLL_BLOCK)} speed={10}>
              {list.map((it) => (<FavoriteItem key={it.id} fund={it.fund} date={it.date} amount={it.amount} classDetail={it.classDetail} />))}
            </Parallax>
          </Block>
        </Block>
      </Wrapper>
    </Block>
  )
}