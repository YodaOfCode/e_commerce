import React, {useEffect, useState} from "react";
import {InputLabel, Select, MenuItem, Button, Grid, Typography} from "@material-ui/core";
import {useForm, FormProvider} from "react-hook-form";

import {commerce} from "../lib/commerce";

import FormInput from "./CustomTextField";

const AddressForm = ({checkoutToken}) => {
    const [shippingCountries, setShippingCountries] = useState([])
    const [shippingCountry, setShippingCountry] = useState('')
    const [shippingSubdivisions, setShippingSubdivisions] = useState([])
    const [shippingSubdivision, setShippingSubdivision] = useState('')
    const [shippingOptions, setShippingOptions] = useState([])
    const [shippingOption, setShippingOption] = useState('')

    const countries = Object.entries(shippingCountries).map(([code, name]) => ({id: code, label: name}))
    const subdivisions = Object.entries(shippingSubdivisions).map(([code, name]) => ({id: code, label: name}))
    const options = shippingOptions.map((sO) => ({id: sO.id, label: `${sO.description} - ${sO.price.formatted_with_symbol}`}))

    const methods = useForm()

    const fetchShippingCountries = async (checkoutTokenId) => {
        const {countries} = await commerce.services.localeListShippingCountries(checkoutTokenId);

        setShippingCountries(countries)
        setShippingCountry(Object.keys(countries)[0])
    }

    const fetchSubdivisions = async (countryCode) => {
        const {subdivisions} = await commerce.services.localeListSubdivisions(countryCode)

        setShippingSubdivisions(subdivisions);
        setShippingSubdivision(Object.keys(subdivisions)[0])
    }

    const fetchShippingOptions = async (checkoutTokenId, country, region = null) => {
const options = await commerce.checkout.getShippingOptions(checkoutTokenId, {country, region})

        setShippingOptions(options)
        setShippingOption(options[0].id)
    }

    useEffect(() => {
        fetchShippingCountries(checkoutToken.id)
    }, [])

    useEffect(() => {
        if (shippingCountry) fetchSubdivisions(shippingCountry)
    }, [shippingCountry])

    useEffect(() => {
        if(shippingSubdivision) fetchShippingOptions(checkoutToken.id, shippingCountry, shippingSubdivision)
    }, [shippingSubdivision])

    return (
        <>
            <Typography variant='h6' gutterBottom>Shipping Address</Typography>
            <FormProvider {...methods}>
                <form onSubmit=''>
                    <Grid container spacing={3}>
                        <FormInput required name='name' label='Имя получателя'/>
                        <FormInput required name='lastName' label='Фамилия получателя'/>
                        <FormInput required name='City' label='Город'/>
                        <FormInput required name='address1' label='Адресс'/>
                        <FormInput required name='email' label='Электронная почта'/>
                        <Grid item xs={12} sm={6}>
                            <InputLabel>Страна доставки</InputLabel>
                            <Select value={shippingCountry} fullWidth
                                    onChange={(e) => setShippingCountry(e.target.value)}>
                                {countries.map((country) => (
                                    <MenuItem key={country.id} value={country.id}>
                                        {country.label}
                                    </MenuItem>
                                ))}

                            </Select>
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <InputLabel>Город доставки</InputLabel>
                            <Select value={shippingSubdivision} fullWidth
                                    onChange={(e) => setShippingSubdivision(e.target.value)}>
                                {subdivisions.map((subdivision) => (
                                    <MenuItem key={subdivision.id} value={subdivision.id}>
                                        {subdivision.label}
                                    </MenuItem>
                                ))}
                            </Select>
                        </Grid>
                        {/*    <Grid item xs={12} sm={6}>*/}
                        {/*        <InputLabel>Настройка доставки</InputLabel>*/}
                        {/*        <Select value={} fullWidth onChange={}>*/}
                        {/*            <MenuItem key={} value={}>*/}
                        {/*                Select me*/}
                        {/*            </MenuItem>*/}
                        {/*        </Select>*/}
                        {/*    </Grid>*/}
                    </Grid>
                </form>
            </FormProvider>
        </>
    )
}

export default AddressForm