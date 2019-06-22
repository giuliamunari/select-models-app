import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class ModelDetails extends Component {
    static propTypes = {
        name: PropTypes.string.isRequired,
        manufacturer: PropTypes.string.isRequired,
        year: PropTypes.number.isRequired,
        origin: PropTypes.string.isRequired
    }
    render() {
        const model = this.props
        return (
            <div>
                <ul>
                    <li>Name: {model.name}</li>
                    <li>Manufacturer: {model.manufacturer}</li>
                    <li>Year: {model.year}</li>
                    <li>Origin: {model.origin}</li>
                </ul>
            </div>
        )
    }
}
