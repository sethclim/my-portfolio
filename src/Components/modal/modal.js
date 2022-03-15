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
					<div className={styles.modal} ref={nodeRef}>
						<button onClick={handleClose} className="close-btn">
							Close
						</button>
						<div className={styles.modalContent}>{children}</div>
					</div>
			</ReactPortal>
		);	
	}
	
}
export default Modal;