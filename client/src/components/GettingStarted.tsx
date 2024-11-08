import React from 'react'
import styles from '../styles/gettting-started.module.css'
import { useModal } from '../GlobalState'
import GetInTouch from './GetInTouch'

export default function GettingStarted() {
    const { setModalState } = useModal()
    return (
        <section className={styles.gettingStarted}>
            <div className={styles.content}>
                <h4>Ready to gain competitive advantage by harnessing data and modernising your technology?</h4>
                <a href='#contact-us-form' className={`getInTouchBtn btn`}
                    onClick={() => setModalState({ modal: <GetInTouch /> })}
                >Get in touch</a>
            </div>
        </section>
    )
}
