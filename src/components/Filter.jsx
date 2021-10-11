import React from 'react'
import Input from './UI/input/Input'
import Select from './UI/select/Select'

export default function Filter({filter, setFilter}) {
    return (
        <div>
            <Input 
                placeholder='Поиск...'
                onChange={(e) => {setFilter({...filter, query: e.target.value})}}    
            />
            <Select 
                filter={filter} 
                setFilter={setFilter}
                defaultValue={'Сортировка'} 
                options={[
                    {value: 'title', name: 'По названию'},
                    {value: 'body', name: 'По описанию'}
                ]}
            />
        </div>
    )
}
