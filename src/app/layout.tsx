"use client";

import clsx from "clsx";

import "@/common/styles/index.css";
import { Header } from "@/shared/entities/Header";
import { Footer } from "@/shared/entities/Footer";
import { FrankRuhlLibre, Manrope } from "@/shared/fonts";
import {
	CLASS_SCROLL_BLOCK,
	CLASS_TRIGGERED,
	useBatchAnimation,
} from "@/shared/animations/useBatchAnimation";

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	useBatchAnimation("body", `.${CLASS_SCROLL_BLOCK}`, CLASS_TRIGGERED, 0.5);

	return (
		<html lang="en">
			<head>
				<link rel="icon" href="/favicon.png" />
			</head>
			<body className={clsx(FrankRuhlLibre.variable, Manrope.variable)}>
				<Header />
				<main>{children}</main>
				<Footer />
			</body>
		</html>
	);
}
