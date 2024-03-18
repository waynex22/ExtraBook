import React, { createContext, useState, useEffect } from 'react'
import axios from 'axios'
import * as request from '../utils/request'
export const CheckoutContext = createContext()
const CheckoutProvider = ({ children }) => {
    const [citys, setCitys] = useState([]);
    const [selectedCity, setSelectedCity] = useState('');
    const [districts, setDistricts] = useState([])
    const [selectedDistrict, setSelectedDistrict] = useState('');
    const [wards, setWards] = useState([])
    const [selectedWard, setSelectedWard] = useState('');
    const [popup, setPopup] = useState(false)
    useEffect(() => {
        axios
            .get('https://provinces.open-api.vn/api/?depth=1')
            .then((response) => setCitys(response.data))
            .catch((error) => console.error('Error fetching citys:', error));
    }, []);

    useEffect(() => {
        // console.log(selectedCity);
        if (selectedCity) {
            axios
                .get(`https://provinces.open-api.vn/api/d/?depth=2`)
                .then((response) => {
                    const arrdistrist = response.data
                    if (arrdistrist) {
                        const data = arrdistrist.filter(item => item.province_code === Number(selectedCity))
                        setDistricts(data)
                    } else {
                        console.log('error ');
                    }

                })
                .catch((error) => console.error('Error fetching districts:', error));
        }
    }, [selectedCity]);

    useEffect(() => {
        if (selectedDistrict) {
            axios
                .get(`https://provinces.open-api.vn/api/w/?depth=3`)
                .then((response) => {
                    const arrWard = response.data
                    // console.log(arrWard);
                    if (arrWard) {
                        const data = arrWard.filter(item => item.district_code === Number(selectedDistrict))
                        setWards(data)
                    } else {
                        console.log('error ');
                    }
                })
                .catch((error) => console.error('Error fetching wards:', error));
        }
    }, [selectedDistrict]);

    const setCity = (city) => {
        setSelectedCity(city);
        setSelectedDistrict('');
        setSelectedWard('');
    };

    const setDistrict = (district) => {
        setSelectedDistrict(district);
        setSelectedWard('');
    };

    const setWard = (ward) => {
        setSelectedWard(ward);
    };
    const insertOrder = async (orderInfo) => {
        try {
            const res = await request.post('order/add',
                orderInfo
            )
            // console.log(orderInfo);
            if (res.status === 201) {
                console.log('them thanh cong');
                setPopup(true)
                setTimeout(() => {
                    setPopup(false)
                },1000)
            }
            else {
                console.log('loi');
            }
        } catch (error) {
            console.error('Lỗi trong quá trình gửi yêu cầu:', error);
        }
    }
    return <CheckoutContext.Provider value={{
        citys, selectedCity, setCity, districts, selectedDistrict, setDistrict, wards, selectedWard, setWard, insertOrder, popup
    }}>{children}</CheckoutContext.Provider>
}
export default CheckoutProvider