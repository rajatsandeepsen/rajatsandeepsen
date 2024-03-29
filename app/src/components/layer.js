import Navbar from '@/components/navbar'
import styles from '@/styles/Home.module.scss'
const Layer = ({children}) => {
    return ( <>
        
        <div className={styles.flexer}>
        <Navbar />
        {children}
        </div>
        </>
     );
}
 
export default Layer;