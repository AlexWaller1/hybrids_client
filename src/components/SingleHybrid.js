// This is to make a show page for the Hybrids
import React from 'react'
import { useSelector } from 'react-redux'

export const SingleHybridPage = ({ match }) => {
    const { hybridId } = match.params

    const hybrid = useSelector(state => 
        state.hybrids.find(hybrid => hybrid.id === hybridId))
}