import React from 'react'

const Tabs = (props) => {
    const { allTabs, currTabs, setCurTabs } = props;

    const setSelectTab = (main) => {
        setCurTabs(main)
    }

    //making a loop about selecting tabs and using CSS when using the onClick
    const tabSelect = (main) => {
        if (main === currTabs){
            return "selectTab";
        } else{
            return "notSelectTab";
        }
    }
  return (
    //using inline style (just borrowed the styling in the solution since I didn't know exactly how to make this)
    <div style={{
        margin: "auto",
        width: "50%",
        textAlign: "left"
    }}>
        {
            allTabs.map((item,main) => (
                <div className={`tab ${ tabSelect(main)}`} onClick={(e) => setSelectTab(main)} > 
                    { item.label }
                </div>
            ))
        }
    </div>
    
  )
}

export default Tabs