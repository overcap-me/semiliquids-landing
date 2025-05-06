import { Block } from "../Block"
import styles from './BlockMaskBlur.module.css'

export const BlockMaskBlur = ({ children }) => {
  return <Block className={styles.blur}>{children}</Block>
}