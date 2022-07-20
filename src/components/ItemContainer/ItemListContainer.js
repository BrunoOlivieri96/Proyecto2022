import ItemProduct from "../ItemProduct/ItemProduct"
import './ItemListContainer.scss'

const ItemContainer = ({section}) => {
    return(
        <div className='list-products'>
            <h2>{section}</h2>
            <ItemProduct title="Culpa Tuya" price={1500} image={'CulpaTuya.jpeg'}/>
            <ItemProduct title="Culpa Mia" price={2000} image={'CulpaMia.jpeg'} />
        </div>
    )
}

export default ItemContainer