import React, { useState, useRef } from "react";
import './Billing.css';

const initialState = {
    fullName: "",
    email: "",
    address1: "",
    address2: "",
    city: "",
    state: "",
    postalCode: "",
    country: "",
    paymentMethod: "",
    cardNumber: "",
    expiryDate: "",
    cvv: "",
};

export default function BillingForm() {
    const [formData, setFormData] = useState(initialState);
    const [errors, setErrors] = useState({});
    const inputRefs = useRef({}); // store ref of each input field

    // ------------ VALIDATION LOGIC ------------
    // const validators = {
    //     fullName: (value) => {
    //         if (!value.trim()) return "Full name is required.";
    //         if (value.length < 2) return "Full name must be at least 2 characters.";
    //         return "";
    //     },

    //     email: (value) => {
    //         if (!value.trim()) return "Email is required.";
    //         const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    //         if (!regex.test(value)) return "Enter a valid email.";
    //         return "";
    //     },

    //     address1: (value) => (!value.trim() ? "Address Line 1 is required." : ""),

    //     city: (value) => (!value.trim() ? "City is required." : ""),

    //     state: (value) => (!value.trim() ? "State is required." : ""),

    //     postalCode: (value) => {
    //         if (!value.trim()) return "Postal code is required.";
    //         if (!/^[A-Za-z0-9]{4,10}$/.test(value))
    //             return "Enter a valid postal code.";
    //         return "";
    //     },

    //     country: (value) => (!value ? "Country is required." : ""),

    //     paymentMethod: (value) =>
    //         !value ? "Payment method is required." : "",

    //     cardNumber: (value) => {
    //         if (!value.trim()) return "Card number is required.";
    //         if (!/^\d{16}$/.test(value)) return "Card number must be 16 digits.";
    //         return "";
    //     },

    //     expiryDate: (value) => {
    //         if (!value.trim()) return "Expiry date is required.";
    //         if (!/^\d{2}\/\d{2}$/.test(value))
    //             return "Expiry must be in MM/YY format.";

    //         const [mm, yy] = value.split("/").map(Number);
    //         const current = new Date();
    //         const currentMM = current.getMonth() + 1;
    //         const currentYY = Number(String(current.getFullYear()).slice(-2));

    //         if (yy < currentYY || (yy === currentYY && mm < currentMM))
    //             return "Card is expired.";

    //         return "";
    //     },

    //     cvv: (value) => {
    //         if (!value.trim()) return "CVV is required.";
    //         if (!/^\d{3,4}$/.test(value)) return "Enter a valid CVV.";
    //         return "";
    //     },
    // };

    // ------------ HANDLE BLUR VALIDATION ------------
    const handleBlur = (field) => {
        // const errorMsg = validators[field](formData[field]);
        // setErrors((prev) => ({ ...prev, [field]: errorMsg }));
    };

    // ------------ HANDLE CHANGE ------------
    const handleChange = (e) => {
        const { name, value } = e.target;

        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    // ------------ HANDLE SUBMIT ------------
    const handleSubmit = (e) => {
        e.preventDefault();

        const newErrors = {};
        let firstErrorField = null;

        // for (const field in validators) {
        //     const errorMsg = validators[field](formData[field]);
        //     if (errorMsg) {
        //         newErrors[field] = errorMsg;

        //         if (!firstErrorField) firstErrorField = field;
        //     }
        // }

        // setErrors(newErrors);

        // Focus on the first invalid field
        if (firstErrorField && inputRefs.current[firstErrorField]) {
            inputRefs.current[firstErrorField].focus();
            return;
        }

        // alert("Form submitted successfully!");
    };

    // ------------ JSX ------------
    return (
        <form onSubmit={handleSubmit} className="billing-form">
            <h2>Billing Information</h2>

            {/* FULL NAME */}
            <InputField
                label="Full Name"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                onBlur={() => handleBlur("fullName")}
                error={errors.fullName}
                inputRefs={inputRefs}
            />

            {/* EMAIL */}
            <InputField
                label="Email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                onBlur={() => handleBlur("email")}
                error={errors.email}
                inputRefs={inputRefs}
            />

            {/* ADDRESS 1 */}
            <InputField
                label="Address Line 1"
                name="address1"
                value={formData.address1}
                onChange={handleChange}
                onBlur={() => handleBlur("address1")}
                error={errors.address1}
                inputRefs={inputRefs}
            />

            {/* ADDRESS 2 */}
            <InputField
                label="Address Line 2 (Optional)"
                name="address2"
                value={formData.address2}
                onChange={handleChange}
                inputRefs={inputRefs}
            />

            {/* CITY */}
            <InputField
                label="City"
                name="city"
                value={formData.city}
                onChange={handleChange}
                onBlur={() => handleBlur("city")}
                error={errors.city}
                inputRefs={inputRefs}
            />

            {/* STATE */}
            <InputField
                label="State"
                name="state"
                value={formData.state}
                onChange={handleChange}
                onBlur={() => handleBlur("state")}
                error={errors.state}
                inputRefs={inputRefs}
            />

            {/* POSTAL CODE */}
            <InputField
                label="Postal Code"
                name="postalCode"
                value={formData.postalCode}
                onChange={handleChange}
                onBlur={() => handleBlur("postalCode")}
                error={errors.postalCode}
                inputRefs={inputRefs}
            />

            {/* COUNTRY */}
            <SelectField
                label="Country"
                name="country"
                value={formData.country}
                onChange={handleChange}
                onBlur={() => handleBlur("country")}
                error={errors.country}
                inputRefs={inputRefs}
                options={["India", "USA", "UK", "Canada"]}
            />

            {/* PAYMENT METHOD */}
            <SelectField
                label="Payment Method"
                name="paymentMethod"
                value={formData.paymentMethod}
                onChange={handleChange}
                onBlur={() => handleBlur("paymentMethod")}
                error={errors.paymentMethod}
                inputRefs={inputRefs}
                options={["Card", "UPI", "PayPal"]}
            />

            {/* CARD NUMBER */}
            <InputField
                label="Card Number"
                name="cardNumber"
                value={formData.cardNumber}
                onChange={handleChange}
                onBlur={() => handleBlur("cardNumber")}
                error={errors.cardNumber}
                inputRefs={inputRefs}
                maxLength="16"
            />

            {/* EXPIRY DATE */}
            <InputField
                label="Expiry Date (MM/YY)"
                name="expiryDate"
                value={formData.expiryDate}
                onChange={handleChange}
                onBlur={() => handleBlur("expiryDate")}
                error={errors.expiryDate}
                inputRefs={inputRefs}
                placeholder="MM/YY"
            />

            {/* CVV */}
            <InputField
                label="CVV"
                name="cvv"
                value={formData.cvv}
                onChange={handleChange}
                onBlur={() => handleBlur("cvv")}
                error={errors.cvv}
                inputRefs={inputRefs}
                maxLength="4"
            />

            <button type="submit" className="submit-btn">Submit</button>
        </form>
    );
}

/* ----------- REUSABLE INPUT COMPONENT ----------- */
function InputField({
    label,
    name,
    type = "text",
    value,
    onChange,
    onBlur,
    error,
    inputRefs,
    ...rest
}) {
    return (
        <div className="form-group">
            <label>{label}</label>
            <input
                ref={(el) => (inputRefs.current[name] = el)}
                type={type}
                name={name}
                value={value}
                onChange={onChange}
                onBlur={onBlur}
                {...rest}
            />
            {error && <p className="error">{error}</p>}
        </div>
    );
}

/* ----------- REUSABLE SELECT COMPONENT ----------- */
function SelectField({
    label,
    name,
    value,
    onChange,
    onBlur,
    error,
    options,
    inputRefs,
}) {
    return (
        <div className="form-group">
            <label>{label}</label>
            <select
                ref={(el) => (inputRefs.current[name] = el)}
                name={name}
                value={value}
                onChange={onChange}
                onBlur={onBlur}
            >
                <option value="">Select...</option>
                {options.map((opt) => (
                    <option key={opt} value={opt}>{opt}</option>
                ))}
            </select>

            {error && <p className="error">{error}</p>}
        </div>
    );
}
