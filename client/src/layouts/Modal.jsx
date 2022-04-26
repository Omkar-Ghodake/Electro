import React from 'react'
import { RiCloseLine } from 'react-icons/ri'

const Modal = (props) => {

	const { id, size, body } = props

	return (
		<>
			<div className="modal fade" id={id} tabIndex="-1" aria-labelledby={`${id}Label`} aria-hidden="true">
				<div className={`modal-dialog modal-${size}`}>
					<div className="modal-content">
						<div className="modal-header p-2">
							<button type="button" className="ms-auto rounded-circle modal-close-btn trans-2 p-0 m-0 d-flex justify-content-center align-items-center active-primary" data-bs-dismiss="modal" aria-label="Close">
								<RiCloseLine />
							</button>
						</div>
						<div className="modal-body">
							{body}
						</div>
					</div>
				</div>
			</div>
		</>
	)
}

export default Modal