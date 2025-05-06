'use client'
import clsx from "clsx"
import { Block } from "@/shared/ui/Block"
import { Notify } from "../Notify"

import styles from './Slider.module.css'
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCards } from "swiper/modules"
import 'swiper/css';
import 'swiper/css/effect-cards';


export const Slider = () => {
  return (
    <Block className={styles.slider}>
      <Swiper modules={[EffectCards]}
        effect="cards"
        grabCursor={true}
      >
        <SwiperSlide>
          <Notify className={clsx(styles.slide, styles.active)} />
        </SwiperSlide>
        <SwiperSlide>
          <Notify className={styles.slide} />
        </SwiperSlide>
        <SwiperSlide>
          <Notify className={styles.slide} />
        </SwiperSlide>
      </Swiper>
    </Block>
  )
}