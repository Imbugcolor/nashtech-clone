import React, { useState } from 'react'
import styles from '../styles/our-solutions.module.css'
import AIMachineImage from '../images/AI-machine-learning-1.svg'
import AppEngineeringImage from '../images/Application-engineering-2.svg'
import BusinessSolutionsImage from '../images/Business-process-solutions-3.svg'
import CloudEngineeringImage from '../images/Cloud-engineering-4.svg'
import DataSolutionsImage from '../images/Data-solutions-5.svg'
import DigitalImage from '../images/digital-experience-6.svg'
import MaintenanceImage from '../images/Maintenance-and-support-7.svg'
import QualitySolutionsImage from '../images/Quality-solutions-8.svg'
import TechnologyImage from '../images/Technology-advisory-9.svg'
import { FaArrowRightLong } from "react-icons/fa6";

const solutionItems = [
  {
    title: 'AI and machine learning',
    description: 'Leverage your data assets',
    image: AIMachineImage,
    url: ''
  },
  {
    title: 'Application engineering',
    description: 'Optimise and grow your digital investment',
    image: AppEngineeringImage,
    url: ''
  },
  {
    title: 'Business process solutions',
    description: 'Manage business processes to reduce operating costs',
    image: BusinessSolutionsImage,
    url: ''
  },
  {
    title: 'Cloud engineering​',
    description: 'Transformational change at scale and speed',
    image: CloudEngineeringImage,
    url: ''
  },
  {
    title: 'Data solutions',
    description: 'Realise the untapped potential of data',
    image: DataSolutionsImage,
    url: ''
  },
  {
    title: 'Digital experience platforms',
    description: 'Redesign your digital assets for the optimal customer experience',
    image: DigitalImage,
    url: ''
  },
  {
    title: 'Maintenance and support',
    description: 'End-to-end application management',
    image: MaintenanceImage,
    url: ''
  },
  {
    title: 'Quality solutions',
    description: 'Independent testing for your systems and software',
    image: QualitySolutionsImage,
    url: ''
  },
  {
    title: 'Technology advisory',
    description: 'Navigate the fast-changing world',
    image: TechnologyImage,
    url: ''
  }
]
export default function OurSolutions() {
  const [solutionIndex, setSolutionIndex] = useState(-1)
  return (
    <section className={styles.ourSolutions}>
      <div className="elementor-icon">
        <svg xmlns="http://www.w3.org/2000/svg" width="96" height="96" viewBox="0 0 96 96" fill="none"><rect x="64" width="32" height="32" fill="#C3A5CA"></rect><rect y="64" width="32" height="32" fill="#C9CCD4"></rect></svg>
      </div>
      <div className="container">
        <div className={styles.headingTitle}>
          <h3>
            Our Solutions
          </h3>
        </div>
        <div className={styles.solutionsListContainer}>
          <div className="row">
            {
              solutionItems.map((item, index) => (
                <div
                  className={`${styles.solutionItem} l-4 m-6 col-12 ${solutionIndex === index && styles.active}`}
                  key={index}
                  onMouseEnter={() => setSolutionIndex(index)}
                  onMouseLeave={() => setSolutionIndex(-1)}
                >
                  <a href="#item" className={styles.itemContainer}>
                    <div className={styles.solutionItemHeading}>
                      <span>0{index + 1}</span>
                    </div>
                    <div className={styles.arrow}>
                      <FaArrowRightLong />
                    </div>
                    <div className={styles.solutionItemBody}>
                      <div className={styles.solutionItemImage}>
                        <img src={item.image} alt='solution-image' />
                      </div>
                      <div className={`${styles.solutionItemContent}`}>
                        <p>{item.title}</p>
                        <p className={styles.solutionItemDescription}>{item.description}</p>
                      </div>
                    </div>
                  </a>
                </div>
              ))
            }
          </div>
        </div>
      </div>
    </section>
  )
}
