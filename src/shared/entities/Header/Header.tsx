'use client'
import { useEffect, useState } from "react"
import Link from "next/link"
import { Wrapper } from "@/shared/ui/Wrapper"
import { Typography } from "@/shared/ui/Typography"
import { Block } from "@/shared/ui/Block"

import { Logo } from "./Logo"
import styles from './Header.module.css'
import clsx from "clsx"

export const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 150)
    }

    window.addEventListener("scroll", handleScroll)

    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  return (
    <header className={clsx(styles.header, {
      [styles.scrolled]: isScrolled
    })}>
      <Wrapper>
        <Block className={styles.wrapper}>
          <Logo />

          <nav className={styles.navs}>
            <Link className={styles.navItem} href={`${process.env.NEXT_PUBLIC_APP_HOST}/auth/login`}>
              <Typography fontWeight={400} size="xs">Log In</Typography>
            </Link>
            <Link className={styles.navItem} href={`${process.env.NEXT_PUBLIC_APP_HOST}/auth/sign-up`}>
              <Typography fontWeight={700} size="xs">Get Started</Typography>
            </Link>
          </nav>
        </Block>
      </Wrapper>
    </header>
  )
}