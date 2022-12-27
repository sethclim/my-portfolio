import React, { useEffect, useState } from "react";
import cx from "classnames";

export const CursorContext = React.createContext("cursorContext");

const SUPPORTED_CURSORS = [false, 'pointer', 'right', 'left'];

const CursorProvider = ({ children }) => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [cursor, setCursor] = useState(false);
  const [active, setActive] = useState(false);
  const [color, setColor] = useState('#00000000');
  const [textColor, setTextColor] = useState('#00000000');

  const onMouseMove = event => {
    const { pageX: x, pageY: y } = event;
    setMousePosition({ x, y });
  };

  useEffect(() => {
    document.addEventListener("mousemove", onMouseMove);
    return () => {
      document.removeEventListener("mousemove", onMouseMove);
    };
  }, []);

  const { x, y } = mousePosition;

  const onCursor = (cursorType, color, textColor) => {
    cursorType = (SUPPORTED_CURSORS.includes(cursorType) && cursorType) || false;
    setCursor(cursorType);
    setColor(color)
    setTextColor(textColor)
  };

  const controlCursor = onOff =>{
    console.log("onOff " + onOff)
    setActive(onOff)
  }

  const setCursorColor = color =>{

    setColor(color)
  }

  return (
    <CursorContext.Provider value={{ onCursor, controlCursor, setCursorColor }}>
    {
      !active ?(
        <ins
          id="custcursor"
            className={cx('movable', {
              'active': !!cursor,
              [`cursor-${cursor}`]: !!cursor
            })}
            style={{
              left: `${x}px`,
              top: `${y}px`,
              backgroundColor: color,
              color: textColor
            }}
        />
    ):null
    }
      {children}
    </CursorContext.Provider>
  );
};

export default CursorProvider;