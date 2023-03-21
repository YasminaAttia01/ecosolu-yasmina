import styles from "../../../styles/secondPage.module.scss";


export default function ImageArticle() {
    return (
<div className={styles.pic_ctn}>
<img src="https://picsum.photos/200/300?t=1" alt="" className={styles.pic}/>
<img src="https://picsum.photos/200/300?t=2" alt="" className={styles.pic}/>
<img src="https://picsum.photos/200/300?t=3" alt="" className={styles.pic}/>
<img src="https://picsum.photos/200/300?t=4" alt="" className={styles.pic}/>
<img src="https://picsum.photos/200/300?t=5" alt="" className={styles.pic}/>
</div>
    );}
