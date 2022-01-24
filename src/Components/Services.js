import React from 'react'
import CardOffer from './CardOffer'

export default function Services() {
    return (
        <div className="row">
                <CardOffer
                img = "offer3.png"
                title = "Delivery"
                extra = "extra"
                />
                <CardOffer
                img = "offer14.png"
                title = "24/7 Support"
                />
                <CardOffer
                img = "offer2.png"
                title = "Delivery"
                />
                <CardOffer
                img = "offer1.png"
                title = "24/7 Support"
                />
            </div>
    )
}
