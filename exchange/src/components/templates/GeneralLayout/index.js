import styles from "./styles.module.scss"

const GeneralLayout = ({menu, content, header}) => {
   return (
         <div className={styles.wrapper}>
            <div className={styles.page}>
					{menu}
               <div className={styles.main}>
                  {header}
						{content}
					</div>
            </div>	
		   </div>
   );
}

export default GeneralLayout;