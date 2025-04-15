import React, { useMemo } from 'react'

const UseMemo = () => {

    const data = [
        { id: 1, value: 40 },
        { id: 2, value: 41 },
        { id: 3, value: 42 },
        { id: 4, value: 43 },
    ]

    const filteringFunciton = () => {
        return data.filter((a) => a.value % 2 === 0)
    }

    const filterValue = useMemo(() => {
        return filteringFunciton()
    }, [data])

    return (
        <div className='card'>
            <h1>Use Memo</h1>
            <ul>
                {filterValue.map((record) => (
                    <li key={record.id}>{record.value}</li>
                ))}
            </ul>
        </div>
    )
}

export default UseMemo