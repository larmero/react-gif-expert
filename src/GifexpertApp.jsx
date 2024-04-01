import { useState } from 'react';
import { AddCategory,GifGrid } from './components';


export const GifexpertApp = () => {

    const [categories, setCategories] = useState(['One Punch']);

    const onAddCategory = (valor) => {
        if (categories.includes(valor)) return;
        setCategories([valor, ...categories]);
    }

    return (
        <>

            <h1>GitExpertApp</h1>
            <AddCategory
                onNewCategory={onAddCategory}

            />
            {categories.map(category => (
                <GifGrid
                    key={category}
                    category={category}
                />
            ))
            }
        </>

    )

}
