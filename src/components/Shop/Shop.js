import React, {useEffect, useState} from 'react';
import Products from '../Products/Products';
import SelectItem from '../SelectItem/SelectItem';
import "./Shop.css"

const Shop = () => {
    const [products, setProducts] = useState([])
    const [selectItems, setSelectedItems] = useState([])

    useEffect(() => {
        fetch('PhoneData.json')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])

    /* Handle Iteams */

    const handleItems = (product) => {
        const newItems = [...selectItems, product]
        if (selectItems.includes(product) === true) {
            return alert('You already selected this phone')
        }
        if (selectItems.length >= 4) {
            return alert('You can set four phones')
        }
        setSelectedItems(newItems);
    }
    /* Reset Iteams */
    const resetAll = () => {
        setSelectedItems([])
    }

    /* Choosen Iteams */
    const randomItems = (selectItems) => {
        const chooseItems = [selectItems[Math.floor(Math.random() * selectItems.length)]];
        const chooseItem = chooseItems[0];
        if (chooseItem === undefined) {
            return alert('Please add few phones in cart')
        }
        else {
            setSelectedItems(chooseItems);
        }
    }

    return (
        <div className='shop-container' >
            <div className='product-container'> {
                products.map(product => <Products key={product.id}
                    product={product} handleItems={handleItems}>
                </Products>)
            }
            </div>
            <div className='select-container' >
                <h3 className='text-center pt-3'> Select Items: {selectItems.length}</h3>
                {selectItems.map(product => <SelectItem key={product.id} product={product}></SelectItem>)}
                <div className='text-center' >
                    <button type="button" onClick={() => randomItems(selectItems)}
                        className="btn btn-primary mx-2"> Choose One <span className='ms-2'></span>
                    </button>
                    <button type="button" onClick={resetAll}
                        className="btn btn-info text-white"> Reset All <span className='ms-2'></span></button>
                </div>
            </div>
        </div>
    );
};

              export default Shop;