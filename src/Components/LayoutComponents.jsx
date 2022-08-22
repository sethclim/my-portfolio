export const VStack = ({children, alignItems, justifyContent, h, bg, p, id}) =>{
    return (
        <div id={id} style={{ display: "flex", flexDirection: "column", alignItems:alignItems, justifyContent:justifyContent, height:h, width:"100%", backgroundColor:bg, padding: p }}>
            {children}
        </div>
    )
}

export const HStack = ({children, alignItems, justifyContent, h, p}) =>{
    return (
        <div style={{ display: "flex", flexDirection: "row", alignItems:alignItems, justifyContent:justifyContent, height:h, width:"100%", padding: p }}>
            {children}
        </div>
    )
}


export const Grid = ({children, templateColumns, gap, id}) =>{
    return (
        <div id={id} style={{ display: "grid", gridTemplateColumns: templateColumns, gap:gap, width:"100%"}}>
            {children}
        </div>
    )
}

export const GridItem = ({children, w, h, bg, onClick, onMouseLeave, onMouseOver, justifyContent, alignItems}) =>{
    return (
        <div 
            style={{ display: "flex", flexDirection: "column", alignItems:alignItems, justifyContent:justifyContent, height:h, width:w, backgroundColor: bg}} 
            onMouseLeave={onMouseLeave}
            onMouseOver={onMouseOver}
            onClick={onClick}
            >
            {children}
        </div>
    )
}
