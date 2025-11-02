import React from 'react'


const Pagination = ({ current, total, pageSize, onChange }) => {
const totalPages = Math.ceil(total / pageSize)
if (totalPages <= 1) return null


const pages = []
for (let i = 1; i <= totalPages; i++) pages.push(i)


return (
<div className="pagination">
<button disabled={current === 1} onClick={() => onChange(current - 1)}>
Prev
</button>


{pages.map(p => (
<button
key={p}
className={p === current ? 'active' : ''}
onClick={() => onChange(p)}
>
{p}
</button>
))}


<button disabled={current === totalPages} onClick={() => onChange(current + 1)}>
Next
</button>
</div>
)
}


export default Pagination