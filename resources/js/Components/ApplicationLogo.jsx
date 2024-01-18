export default function ApplicationLogo({name, logo, logoClass, showName=false, ...props}) {
    return (
        <span className="flex items-center justify-center space-x-2 text-lg font-medium">
            {logo ? <img src={logo.small} alt={name} loading="eager" className={logoClass} /> : name}
            {showName ? name : null }
        </span>
    );
}
