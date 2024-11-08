import React, { useState } from 'react'

const menu = [
    {
        label: 'AI and machine learning',
        children: [
            "Data science and modelling",
            "Generative AI",
            "MLOps",
        ]
    },
    {
        label: 'Application engineering',
        children: [
            "Application modernisation",
            "Custom software development",
            "DevOps",
            "Low-code and no-code application development",
            "Platform engineering",
            "Solution architecture and design"
        ]
    },
    {
        label: 'Business process solutions',
        children: ["Business process outsourcing",
            "Business process re-engineering",
            "Process automation"]
    },
    {
        label: 'Cloud engineering',
        children: ["Business process outsourcing",
            "Business process re-engineering",
            "Process automation"]
    },
    {
        label: 'Data solutions'
    },
    {
        label: 'Maintenance and support'
    },
    {
        label: 'Quality solutions'
    },
    {
        label: 'Technology advisory'
    }
]
export default function OurThinking() {
    const [subMenu, setSubMenu] = useState<string[]>([])
    return (
        <div className='menu-dropdown ourthinking-background'>
            <div className='container'>
                <div className='row'>
                    <div className="col-3">
                        <div className='left'>
                            <div>
                                <h3>Our Thinking</h3>
                                <p className='small-paragraph'>
                                    Digital solutions combining strategy, technology, automation and people.
                                </p>
                            </div>
                            <div className='go-to-overview'>
                                <a href='#overview' className='transparent-btn'><span className='btn-span'>Go to overview</span></a>
                            </div>
                        </div>
                    </div>
                    <div className='col-9'>
                        <div className='row menu-list-container'>
                            <div className="col-6">
                                <div className='middle'>
                                    <ul className='menu-list'>
                                        {menu.map((item, index) => (
                                            <li key={index}
                                                onMouseEnter={() => setSubMenu(item.children ? item.children : [])}
                                                onMouseLeave={() => setSubMenu([])}
                                            >{item.label}</li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                            <div className="col-6">
                                <div className='right'>
                                    <ul className='sub-menu-list'>
                                        {subMenu && subMenu.map((item, index) => (
                                            <li key={index}>{item}</li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
