import React from 'react'

import { useEffect, useRef } from "react";
import ReactPortal from "./ReactPortal";
import styles from "./modal.module.scss"



function Modal({ children, isOpen, handleClose }) {
	const nodeRef = useRef(null);
	useEffect(() => {
		const closeOnEscapeKey = (e) => (e.key === "Escape" ? handleClose() : null);
		document.body.addEventListener("keydown", closeOnEscapeKey);
		return () => {
			document.body.removeEventListener("keydown", closeOnEscapeKey);
		};
	}, [handleClose]);


	if (!isOpen) return null
	else{
		return (
			<ReactPortal wrapperId="my-modal">
				<div className={styles.modal} ref={nodeRef} onClick={() => handleClose(true)}>
					<div className={styles.modalContent}  onClick={(e) => e.stopPropagation()} >
						<div className={styles.buttonContainer}>
							<button onClick={handleClose} className={styles.modalClose}>
							   <span>CLOSE</span>
							</button>
						</div>
						<div className={styles.scrollable}>
							{children}
						</div>
					</div>
				</div>
			</ReactPortal>
		);	
	}
}
export default Modal;
