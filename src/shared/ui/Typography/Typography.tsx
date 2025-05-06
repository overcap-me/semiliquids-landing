import { FC, ReactNode, RefObject } from "react"

type TypographyProps = {
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span';
  className?: ClassValue
  size?: 'hero' | 'xxl' | 'xl' | 'l' | 'm' | 's' | 'xs' | 'xxs';
  fontWeight?: 400 | 500 | 600 | 700 | 800;
  fontFamily?: 'manrope' | 'frank_ruhl_libre';
  color?: 'primary70' | 'primary50' | 'white' | 'white80' | 'primary' | 'accent';
  children: ReactNode
  ref?: RefObject<HTMLElement | null>

  [name: string]: unknown
}


import styles from './Typography.module.css'
import clsx, { ClassValue } from "clsx"

const tagClassMap: Record<NonNullable<TypographyProps['as']>, string> = {
  h1: styles.heading_1,
  h2: styles.heading_2,
  h3: styles.heading_3,
  h4: styles.heading_4,
  h5: styles.heading_5,
  h6: styles.heading_6,
  p: styles.paragraph,
  span: styles.span,
}


const sizeClassMap: Record<NonNullable<TypographyProps['size']>, string> = {
  hero: styles.size_hero,
  xxl: styles.size_xxl,
  xl: styles.size_xl,
  l: styles.size_l,
  m: styles.size_m,
  s: styles.size_s,
  xs: styles.size_xs,
  xxs: styles.size_xxs,
}

const fontWeightClassMap: Record<NonNullable<TypographyProps['fontWeight']>, string> = {
  400: styles.fontWeight_400,
  500: styles.fontWeight_500,
  600: styles.fontWeight_600,
  700: styles.fontWeight_700,
  800: styles.fontWeight_800,
}

const fontFamilyClassMap: Record<NonNullable<TypographyProps['fontFamily']>, string> = {
  manrope: styles.fontFamily_manrope,
  frank_ruhl_libre: styles.fontFamily_frank_ruhl_libre,
}

const colorClassMap: Record<NonNullable<TypographyProps['color']>, string> = {
  primary70: styles.color_primary_70,
  primary50: styles.color_primary_50,
  white: styles.color_white,
  white80: styles.color_white_80,
  primary: styles.color_primary,
  accent: styles.color_accent,
}


export const Typography: FC<TypographyProps> = ({ as: Tag = 'p', size, fontFamily, fontWeight, color, className, children, ref, props }) => {
  const classes = clsx(
    tagClassMap[Tag],
    size && sizeClassMap[size],
    fontFamily && fontFamilyClassMap[fontFamily],
    fontWeight && fontWeightClassMap[fontWeight],
    color && colorClassMap[color],
    className
  );

  return <Tag ref={ref} className={classes} {...props}>{children}</Tag>
}