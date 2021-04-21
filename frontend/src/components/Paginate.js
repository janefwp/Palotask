import React from 'react'
import { Pagination } from 'react-bootstrap'

function Paginate({ pages, page}) {
    return (pages > 1 && (
        <Pagination>
            {[...Array(pages).keys()].map((x) => (

                <Pagination.Item active={x + 1 === page}>{x + 1}</Pagination.Item>

            ))}
        </Pagination>
    )
    )
}

export default Paginate
