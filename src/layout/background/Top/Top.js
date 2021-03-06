import classes from "./Top.module.css";

const top = (props) => {
	return (
		<div className={classes.Top}>
			<div className={classes.link__holder}>
				<button>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 512 512"
					>
						<ellipse
							transform="rotate(-1.057 159.995 423.97) scale(.99997)"
							cx="160"
							cy="424"
							rx="24"
							ry="24"
						/>
						<ellipse
							transform="matrix(.02382 -.9997 .9997 .02382 -48.51 798.282)"
							cx="384.5"
							cy="424"
							rx="24"
							ry="24"
						/>
						<path d="M463.8 132.2c-.7-2.4-2.8-4-5.2-4.2L132.9 96.5c-2.8-.3-6.2-2.1-7.5-4.7-3.8-7.1-6.2-11.1-12.2-18.6-7.7-9.4-22.2-9.1-48.8-9.3-9-.1-16.3 5.2-16.3 14.1 0 8.7 6.9 14.1 15.6 14.1s21.3.5 26 1.9c4.7 1.4 8.5 9.1 9.9 15.8 0 .1 0 .2.1.3.2 1.2 2 10.2 2 10.3l40 211.6c2.4 14.5 7.3 26.5 14.5 35.7 8.4 10.8 19.5 16.2 32.9 16.2h236.6c7.6 0 14.1-5.8 14.4-13.4.4-8-6-14.6-14-14.6H188.9c-2 0-4.9 0-8.3-2.8-3.5-3-8.3-9.9-11.5-26l-4.3-23.7c0-.3.1-.5.4-.6l277.7-47c2.6-.4 4.6-2.5 4.9-5.2l16-115.8c.2-.8.2-1.7 0-2.6z" />
					</svg>
					<span>Cart</span>
				</button>
				<button>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						width="512"
						height="512"
						viewBox="0 0 512 512"
					>
						<title>ionicons-v5-f</title>
						<path d="M256,448a32,32,0,0,1-18-5.57c-78.59-53.35-112.62-89.93-131.39-112.8-40-48.75-59.15-98.8-58.61-153C48.63,114.52,98.46,64,159.08,64c44.08,0,74.61,24.83,92.39,45.51a6,6,0,0,0,9.06,0C278.31,88.81,308.84,64,352.92,64,413.54,64,463.37,114.52,464,176.64c.54,54.21-18.63,104.26-58.61,153-18.77,22.87-52.8,59.45-131.39,112.8A32,32,0,0,1,256,448Z" />
					</svg>
					<span>Favourite</span>
				</button>
				<button>Login</button>
			</div>
		</div>
	);
};

export default top;
