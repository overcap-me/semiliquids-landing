import { Block } from "@/shared/ui/Block"
import { Typography } from "@/shared/ui/Typography"
import { Wrapper } from "@/shared/ui/Wrapper"
import stylesLayout from '@/common/styles/module/Layout.module.css'

import styles from './ReviewPerformance.module.css'
import clsx from "clsx"
import { DonutChart } from "./DonutChart"
import { CLASS_SCROLL_BLOCK, CLASS_TEXT_ANIMATION } from "@/shared/animations/useBatchAnimation"

export const ReviewPerformance = () => {
  const industryData = [
    { label: "Tech", value: 40 },
    { label: "Finance", value: 25 },
    { label: "Healthcare", value: 20 },
    { label: "Retail", value: 10 },
    { label: "Other", value: 5 },
  ];
  return (
    <Block as="section" className={styles.funds}>
      <Wrapper>
        <Block className={clsx(stylesLayout.innerWith2Columns, stylesLayout.aic)}>
          <Block>
            <Typography className={clsx(CLASS_SCROLL_BLOCK, CLASS_TEXT_ANIMATION)} as="h1">
              Review Performance & Portfolio
            </Typography>
            <Typography color="primary70">
              Conduct a comprehensive review of fund portfolios by examining their underlying investments and features to ensure they align with your long-term investment objectives.
            </Typography>
          </Block>
          <Block className={clsx(styles.charts, CLASS_SCROLL_BLOCK)}>
            <DonutChart
              className={styles.donutChart}
              data={industryData}
              width={288}
              height={288}
              innerText="Industry Breakdown"
              delay={0}
            />
            <DonutChart
              className={styles.donutChart}
              data={industryData}
              width={288}
              height={288}
              innerText="Investment Type"
              delay={.6}
            />
            <DonutChart
              className={styles.donutChart}
              data={industryData}
              width={288}
              height={288}
              innerText="Strategy"
              delay={1}
            />
          </Block>
        </Block>

      </Wrapper>
    </Block>
  )
}