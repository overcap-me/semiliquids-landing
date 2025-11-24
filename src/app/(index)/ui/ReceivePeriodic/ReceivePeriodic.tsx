import React from "react";
import clsx from "clsx";
import { Block } from "@/shared/ui/Block";
import { Typography } from "@/shared/ui/Typography";
import { Wrapper } from "@/shared/ui/Wrapper";
import stylesLayout from '@/common/styles/module/Layout.module.css';

import styles from './ReceivePeriodic.module.css';
import { Notify } from "./Notify";
import { CLASS_SCROLL_BLOCK, CLASS_TEXT_ANIMATION } from "@/shared/animations/useBatchAnimation";


export const ReceivePeriodic = () => {
  return (
    <Block as="section" className={styles.funds}>
      <Wrapper>
        <Block className={clsx(stylesLayout.innerWith2Columns, stylesLayout.aic)}>
          <Block>
            <Typography className={clsx(CLASS_SCROLL_BLOCK, CLASS_TEXT_ANIMATION)} as="h1">
              Receive Periodic Updates
            </Typography>
            <Typography color="primary70">
              Get regular updates delivered straight to you. Receive newsletters on selected funds with essential insights, performance updates, and market trends, helping you stay informed.
            </Typography>
          </Block>

          <Block className={clsx(styles.list, CLASS_SCROLL_BLOCK)}>
            <Notify className={clsx(styles.item, styles.active)} />
            <Notify className={styles.item} />
            <Notify className={styles.item} />
          </Block>
        </Block>
      </Wrapper>
    </Block>
  );
};
