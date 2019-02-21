const Logo = ({
  style = {},
  fill = '#fff',
  width = '100%',
  className = '',
  height = '100%',
  viewBox = '0 0 32 32'
}) => (
  <svg
    width={width}
    style={style}
    height={height}
    viewBox={viewBox}
    className={className}
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
  >
    <path
      d="M24 17.87C24 14 23 11 21 8.94a3.4 3.4 0 0 0 1.3-.8 3.35 3.35 0 0 0 0-4.71l-.3-.26v-.06A15.75 15.75 0 0 0 6.21 1.36C2.21 3.32 0 7.13 0 12.08c0 3.83 1 6.83 3 8.92a3.24 3.24 0 0 0-1.3.81 3.32 3.32 0 0 0 0 4.7l.29.26h.06a15.72 15.72 0 0 0 15.75 1.75c3.98-1.89 6.2-5.69 6.2-10.65zM6.89 2.76a13.1 13.1 0 0 1 7.25-1.1A13.9 13.9 0 0 1 21 4.3h.06l.19.16a1.77 1.77 0 0 1-2.2 2.84 12.54 12.54 0 0 0-7.24-1.63 7.44 7.44 0 0 0-4.89 2 6.71 6.71 0 0 0-1.85 5 6.37 6.37 0 0 0 1.87 4.89 6.88 6.88 0 0 0 4.34 1.67 4 4 0 0 0 .49 0A4.22 4.22 0 0 0 16 15a4.33 4.33 0 0 0-.38-1.75 3.47 3.47 0 0 1 .43.35 4.9 4.9 0 0 1 1.36 3.74A5.22 5.22 0 0 1 16 21.18a6 6 0 0 1-3.83 1.51h-.1s-4.43.47-7.5-2.28c-2-1.8-3-4.61-3-8.33C1.56 6.53 4.46 4 6.89 2.76zm4.86 9.57a2.63 2.63 0 0 1 1.89.78 2.67 2.67 0 0 1-1.86 4.55h-.4a2.66 2.66 0 0 1 .37-5.3zm5.36 14.86a13.21 13.21 0 0 1-7.25 1.11A14.09 14.09 0 0 1 3 25.65v-.07l-.18-.16a1.77 1.77 0 0 1 2.16-2.77 12.61 12.61 0 0 0 7.25 1.62 7.43 7.43 0 0 0 4.88-1.94 6.71 6.71 0 0 0 1.85-5 6.37 6.37 0 0 0-1.86-4.89 7.18 7.18 0 0 0-5-1.67h-.36a4.2 4.2 0 0 0-4.08 5.28 5.17 5.17 0 0 1-1.06-3.43A5.2 5.2 0 0 1 8 8.77a6 6 0 0 1 3.83-1.51h.1a10.58 10.58 0 0 1 7.49 2.28c2 1.81 3 4.61 3 8.33.01 5.55-2.89 8.13-5.31 9.32z"
      fill={fill}
    />
  </svg>
);

export default Logo;
