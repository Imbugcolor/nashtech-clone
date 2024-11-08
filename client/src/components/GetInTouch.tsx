import React, { ChangeEvent, FocusEvent, FormEvent, useState } from 'react'
import styles from '../styles/get-in-touch.module.css'
import { useModal } from '../GlobalState'
import { IoMdClose } from "react-icons/io";
import Select, { SingleValue, StylesConfig } from 'react-select';
import { countries, CountryOption } from '../utils/countries.data';
import { postDataAPI } from '../utils/http';
import { DataResponse } from '../utils/interfaces/response.interface';
import { Contact } from '../utils/interfaces/contact.interface';
import { toast } from 'react-toastify';
import ButtonLoading from './loading/LoadingButton';

const initialForm = {
    fullname: '',
    email: '',
    country: '',
    companyName: '',
    message: '',
}

// Define custom styles for react-select
const customStyles: StylesConfig<CountryOption, false> = {
    control: (provided) => ({
        ...provided,
        minHeight: 50, // Custom height for the selected item
        height: 50, // Custom height for the control (selected item display)
        marginBottom: 15,
        outline: 'none',
        background: '#f5f6f8',
        border: '#f5f6f8',
    }),
    option: (provided) => ({
        ...provided,
        display: 'flex',
        alignItems: 'center',
        height: 40,
    }),
    singleValue: (provided) => ({
        ...provided,
        display: 'flex',
        alignItems: 'center',
    }),
};

export default function GetInTouch() {
    const [contactData, setContactData] = useState(initialForm)
    const { setModalState } = useModal()
    const [isAgreePolicy, setIsAgreePolicy] = useState(false)
    const [messageInput, setMessageInput] = useState<{ [key: string]: string }>({})
    const [onLoading, setOnLoading] = useState(false)

    // default selection country
    const defaultCountry = countries.find(country => country.value === 'US'); 
    // State to store selected country
    const [selectedCountry, setSelectedCountry] = useState<CountryOption | null>(defaultCountry || null);

    // Function to render option with flag
    const formatOptionLabel = ({ label, flag }: CountryOption) => (
        <div style={{ display: 'flex', alignItems: 'center' }}>
            <span style={{ marginRight: 10 }}>{flag}</span>
            {label}
        </div>
    );

    // Handle Countries selection change
    const handleCountriesChange = (selectedOption: SingleValue<CountryOption>) => {
        setSelectedCountry(selectedOption);
    };


    // Handle onBlur validation
    const handleBlur = (e: FocusEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        let errorMsg = '';

        switch (name) {
            case 'fullname':
                if (!value.trim()) errorMsg = '*Name is required';
                break;
            case 'email':
                if (!value) errorMsg = '*Email is required';
                else if (!/\S+@\S+\.\S+/.test(value)) errorMsg = 'Email is invalid';
                break;
            case 'country':
                if (!value) errorMsg = '*Country is required';
                break;
            case 'companyName':
                if (!value) errorMsg = '*Company name is required';
                break;
            default:
                break;
        }

        setMessageInput((prevMessages) => ({
            ...prevMessages,
            [name]: errorMsg,
        }));
    };

    const validate = () => {
        const message: {[key: string] : string} = {}

        if (!contactData.fullname) {
            message.fullname = '*Please fill out this field.'
        }

        if (!contactData.email) {
            message.email = '*Please fill out this field.'
        } else if (!/\S+@\S+\.\S+/.test(contactData.email)) {
            message.email = '*Please typing an email';
        }

        if (!contactData.companyName) {
            message.companyName = '*Please fill out this field.'
        }
        
        setMessageInput(message)
        if (Object.keys(message).length > 0) return false
        return true
    }

    const handleChangeInput = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { value, name } = e.target
        setContactData({ ...contactData, [name]: value })
    }

    const onSubmitForm = async(e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        const isValid = validate()
        if (!isValid) return;
        const data = {...contactData, country: selectedCountry?.value}
        try {
            setOnLoading(true)
            await postDataAPI<DataResponse<Contact>>('contact', data)
            setContactData(initialForm)
            setSelectedCountry(defaultCountry || null)
            toast.success('Send successfull.')
        } catch (error: any) {
            console.log(error)
            if (error.response?.data?.message instanceof Array) {
                toast.error(error.response?.data?.message[0] || 'Server error.')
            } else {
                toast.error(error.response?.data?.message || 'Server error.')
            }
        } finally {
            setOnLoading(false)
        }
    }
    return (
        <section className={`${styles.getInTouch}`}>
            <div className={styles.modalContainer}>
                <div className={`${styles.closeModal}`} onClick={() => setModalState({ modal: null })}>
                    <IoMdClose />
                </div>
                <div className={styles.modalContent}>
                    <div className={styles.contactManual}>
                        <h4>Let's create something great together</h4>
                        <p>Our team will contact you soon.</p>
                    </div>
                    <div className={styles.contactForm}>
                        <form onSubmit={onSubmitForm}>
                            <h4>Contact details</h4>
                            <div className={styles.inputGroup}>
                                <input
                                    type="text"
                                    placeholder='Fullname'
                                    name='fullname'
                                    value={contactData.fullname}
                                    onChange={handleChangeInput}
                                    onBlur={handleBlur}
                                    disabled={onLoading}
                                />
                                {/* <label className="focused">Name<span className="required">*</span></label> */}
                                <label className={styles.messageInput}>{messageInput.fullname}</label>
                            </div>
                            <div className={styles.inputGroup}>
                                <input
                                    type="text"
                                    placeholder='E-mail Address'
                                    name='email'
                                    value={contactData.email}
                                    onChange={handleChangeInput}
                                    onBlur={handleBlur}
                                    disabled={onLoading}
                                />
                                <label className={styles.messageInput}>{messageInput.email}</label>
                            </div>
                            <div className={styles.inputGroup}>
                                <Select
                                    options={countries}
                                    styles={customStyles}
                                    formatOptionLabel={formatOptionLabel}
                                    name='country'
                                    value={selectedCountry}
                                    placeholder="Select a country"
                                    onChange={handleCountriesChange}
                                    defaultValue={defaultCountry} // Set the default selected value
                                    isDisabled={onLoading}
                                />
                                <label className={styles.messageInput}>{messageInput.country}</label>
                            </div>
                            <div className={styles.inputGroup}>
                                <input
                                    type="text"
                                    placeholder='Company name'
                                    name='companyName'
                                    value={contactData.companyName}
                                    onChange={handleChangeInput}
                                    onBlur={handleBlur}
                                    disabled={onLoading}
                                />
                                <label className={styles.messageInput}>{messageInput.companyName}</label>
                            </div>
                            <h4>Project details</h4>
                            <div className={styles.inputGroup}>
                                <textarea
                                    placeholder='How can we help you?'
                                    rows={10} cols={40}
                                    maxLength={500}
                                    name='message'
                                    value={contactData.message}
                                    onChange={handleChangeInput}
                                    disabled={onLoading}
                                />
                                <label style={{ fontSize: '13px' }}><span className="required">*</span> Required Fields</label>
                            </div>
                            <div className={`${styles.footerContactForm} flex justify-between`}>
                                <label className='flex'>
                                    <input 
                                        type="checkbox" 
                                        name="acceptance" 
                                        value="1" 
                                        checked={isAgreePolicy} 
                                        onChange={() => setIsAgreePolicy(!isAgreePolicy)}
                                        disabled={onLoading} 
                                    />
                                    <span className={styles.policyAgree}>
                                        I agree to share my information with NashTech as per the
                                        <a href="#privacy-policy" target="_blank" style={{ display: 'inline', fontWeight: 'bold' }}> privacy policy*</a>.
                                    </span>
                                </label>
                                <div className={styles.submitForm}>
                                    <button
                                        type="submit"
                                        className={`${isAgreePolicy && styles.active} ${onLoading && styles.loading}`}
                                        disabled={!isAgreePolicy || onLoading}
                                    >{ 
                                        onLoading ?
                                        <ButtonLoading /> : "Submit"
                                      }
                                    </button>
                                </div>
                            </div>
                            <div className={styles.detailPolicy}>
                                <p>This site is protected by reCAPTCHA and the Google Privacy Policy and Terms of Service apply.</p>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
}
