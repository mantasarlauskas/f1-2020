import { getImageUrl } from 'client/utils/images';

describe('driver', () => {
    describe('getImageUrl', () => {
        it('returns image url', () => {
            expect(getImageUrl('driver')).toEqual(
                'https://res.cloudinary.com/mantasarlauskas/image/upload/f1-2020/driver.png',
            );
        });

        it('returns image url with width', () => {
            expect(getImageUrl('driver', 300)).toEqual(
                'https://res.cloudinary.com/mantasarlauskas/image/upload/w_300/f1-2020/driver.png',
            );
        });
    });
});
