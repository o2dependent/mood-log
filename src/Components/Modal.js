import React from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Container } from '@material-ui/core';

const Modal = ({ isToggled, children, close }) => {
	return (
		<AnimatePresence>
			{isToggled && (
				<>
					<div
						style={{
							position: 'fixed',
							top: 0,
							left: 0,
							display: 'flex',
							justifyContent: 'center',
							alignItems: 'center',
							height: '100vh',
							width: '100vw',
							zIndex: 1100,
						}}
					>
						<motion.div
							initial={{ opacity: 0 }}
							animate={{ opacity: 1 }}
							exit={{ opacity: 0 }}
							style={{
								zIndex: 100,
								position: 'fixed',
								top: 0,
								left: 0,
								height: '100vh',
								width: '100vw',
								background: 'rgba(0,0,0,0.4)',
							}}
							onClick={close}
						/>
						<Container maxWidth='sm' style={{ zIndex: 100 }}>
							<motion.div
								initial={{ y: '100vh' }}
								animate={{ y: 0 }}
								exit={{ y: '-100vh' }}
								transition={{
									duration: 1,
									type: 'spring',
									damping: 15,
								}}
								style={{
									width: '90%',
									height: 'fit-content',
									margin: '0 auto',
									zIndex: 1100,
								}}
							>
								{children}
							</motion.div>
						</Container>
					</div>
				</>
			)}
		</AnimatePresence>
	);
};

export default Modal;
