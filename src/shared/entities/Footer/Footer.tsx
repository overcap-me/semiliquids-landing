"use client";

import { Wrapper } from "@/shared/ui/Wrapper";
import styles from "./Footer.module.css";
import Link from "next/link";
import { Typography } from "@/shared/ui/Typography";
import { Block } from "@/shared/ui/Block";
import { Copyright } from "./Copy";
import { getNavFooter } from "@/api/footer";

export const Footer = async () => {
	const protectedNavs = await getNavFooter();

	return (
		<footer className={styles.footer}>
			<Wrapper>
				<Block className={styles.inner}>
					<Block className={styles.col}>
						<Link className={styles.link} href="mailto:info@semiliquids.com">
							<Typography>info@semiliquids.com</Typography>
						</Link>
						<Link
							className={styles.link}
							target="_blank"
							href="https://www.linkedin.com/company/semiliquids/posts/?feedView=all"
						>
							<Typography>LinkedIn</Typography>
						</Link>
					</Block>

					<Block className={styles.col} data-col-span="2">
						{protectedNavs?.data?.items &&
							Object.entries(protectedNavs?.data?.items).map(([id, nav]) => {
								return (
									<Link
										className={styles.link}
										key={id}
										href={`${process.env.NEXT_PUBLIC_APP_HOST}/${nav?.data?.url}`}
									>
										<Typography as="p">{nav?.label}</Typography>
									</Link>
								);
							})}
					</Block>

					<Block className={styles.col}>
						<Copyright />
					</Block>
				</Block>
			</Wrapper>
		</footer>
	);
};
