import { Block } from "@/shared/ui/Block"
import { Typography } from "@/shared/ui/Typography"
import { Wrapper } from "@/shared/ui/Wrapper"
import stylesLayout from '@/common/styles/module/Layout.module.css'

import styles from './CompareFunds.module.css'
import clsx from "clsx"
import { Chart } from "./Chart"
import { CLASS_SCROLL_BLOCK, CLASS_TEXT_ANIMATION } from "@/shared/animations/useBatchAnimation"



export const CompareFunds = () => {
  return (
    <Block as="section" className={styles.funds}>
      <Wrapper>
        <Block className={clsx(stylesLayout.innerWith2Columns, stylesLayout.aic)}>
          <Block>
            <Typography className={clsx(CLASS_SCROLL_BLOCK, CLASS_TEXT_ANIMATION)} as="h1">
              Compare Funds & Benchmark
            </Typography>
            <Typography color="primary70">
              Evaluate funds and managers to identify the optimal fit for your allocation targets. Compare fund performance, underlying portfolios, and terms in detail. Benchmark funds against each other and against SemiLiquids indices to select the most suitable strategies.
            </Typography>
          </Block>
          <Block className={CLASS_SCROLL_BLOCK}>
            <Chart />
          </Block>
        </Block>
      </Wrapper>
    </Block>
  )
}