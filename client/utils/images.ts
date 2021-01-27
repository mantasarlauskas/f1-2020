export function getImageUrl(name: string, width?: number) {
    return 'https://res.cloudinary.com/mantasarlauskas/image/upload'
        + `${width ? `/w_${width}` : ''}/f1-2020/${name}.png`;
}
