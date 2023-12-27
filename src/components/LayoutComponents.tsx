export const VStack = ({children, alignItems, justifyContent, h, bg, p, id, w, m, className} : any) =>{
    return (
        <div id={id} className={className} style={{ display: "flex", flexDirection: "column", alignItems:alignItems, justifyContent:justifyContent, height:h, width: w, backgroundColor:bg, padding: p, margin: m }}>
            {children}
        </div>
    )
}

export const HStack = ({children, alignItems, justifyContent, h, bg, p, m, w, className} : any) =>{
    return (
        <div className={className} style={{ display: "flex", flexDirection: "row", alignItems:alignItems, justifyContent:justifyContent, height:h, width:w , padding: p, margin: m, backgroundColor:bg }}>
            {children}
        </div>
    )
}


export const Grid = ({children, templateColumns, templateRows, gap, id} : any) =>{
    return (
        <div id={id} style={{ display: "grid", gridTemplateColumns: templateColumns, gridTemplateRows: templateRows, gap:gap, width:"100%"}}>
            {children}
        </div>
    )
}

export const GridItem = ({children, w, h, bg, onClick, onMouseLeave, onMouseOver, justifyContent, alignItems, className, p} : any) =>{
    return (
        <div 
            className={className}
            style={{ display: "flex", flexDirection: "column", alignItems:alignItems, justifyContent:justifyContent, height:h, width:w, backgroundColor: bg, padding:p}} 
            onMouseLeave={onMouseLeave}
            onMouseOver={onMouseOver}
            onClick={onClick}
            >
            {children}
        </div>
    )
}
