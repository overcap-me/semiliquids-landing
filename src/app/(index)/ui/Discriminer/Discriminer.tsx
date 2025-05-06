import { Block } from "@/shared/ui/Block"
import { Typography } from "@/shared/ui/Typography"
import { Wrapper } from "@/shared/ui/Wrapper"

import styles from './Discriminer.module.css'

export const Discriminer = () => {
  return (
    <Block as="section" className={styles.discriminer}>
      <Wrapper>
        <Typography size="xs" color="primary50">
          This site is operated by OverCap (“we,” “us,” or “our”). Through this site, we provide only administrative services; we do not offer investment advice, endorsements, or recommendations of any kind—including recommendations to purchase or sell any security. Any investment opportunities shown on this site are offered by, and all information is the sole responsibility of, the party listing the opportunity. OverCap is not, and does not act as, a broker or market maker. We do not independently verify the content provided by third parties on this site, nor do we guarantee its accuracy, completeness, or adequacy. We expressly disclaim any liability for outcomes associated with investments users choose to make. Users should consult with their own financial advisors to help evaluate any investment decision. By accessing this site, you agree to the Privacy Policy.
          All investments carry inherent risk. Private funds featured on this site may involve illiquid securities with long holding periods and limited or restricted resale options. You should only invest amounts you can afford to lose without affecting your lifestyle. Neither the Securities and Exchange Commission nor any state securities authority endorses or approves any investment or the completeness or accuracy of information provided.
          Before investing, review complete offering materials and risk factors carefully, understand the investor requirements, investment limits, and your ability to hold or resell an investment. We strongly encourage anyone considering an investment to consult with a qualified financial or investment advisor, tax professional, and/or attorney.
          Past performance is not indicative of future results. Diversification does not assure a profit or prevent losses. Testimonials or opinions displayed may be produced by third parties not affiliated with OverCap, and their statements do not necessarily reflect our views. No one has been compensated for any testimonial on this site. Some links may direct you to external, unaffiliated websites. We are not responsible for the content or privacy policies of those sites.
          OverCap does not provide custody services for any investments. Any securities or account balances for transactions executed through this site will be held by the custodian or custodial solutions chosen by the investor.
        </Typography>
      </Wrapper>
    </Block>
  )
}