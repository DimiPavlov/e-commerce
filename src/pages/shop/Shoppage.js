import React, { Component, useState } from "react"

import CollectionPreview from "../../components/collection-preview/CollectionPreview"
import { SHOP_DATA } from "./shop.data"

// class ShopPage extends Component {
//     constructor(props) {
//         super(props)

//         this.state = {
//             collections: SHOP_DATA
//         }
//     }


//     render() {

//         const { collections } = this.state
//         return (<div className="shop-page">
//             {
//                 collections.map(({ id, ...otherCollectionProps }) => (
//                     <CollectionPreview key={id} {...otherCollectionProps} />
//                 ))
//             }
//         </div>
//         )
//     }

    
// }

const ShopPage = () => {
    const [collections, setCollections] = useState(SHOP_DATA)
    return (<div className="shop-page">
            {
                collections.map(({ id, ...otherCollectionProps }) => (
                    <CollectionPreview key={id} {...otherCollectionProps} />
                ))
            }
        </div>
    ) 
}

export default ShopPage