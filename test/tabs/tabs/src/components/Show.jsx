import React from 'react'

const Show = (props) => {
    const { allTabs, currTabs } = props;

    return (
    <div className='results'>
        { allTabs[currTabs].content}
    </div>
  )
}

export default Show