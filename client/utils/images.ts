export function getImageUrl(driverName: string, width?: number) {
    return 'https://res.cloudinary.com/mantasarlauskas/image/upload'
        + `${width ? `/w_${width}` : ''}/f1-2020/${driverName}.png`;
}
