import React from 'react'
import Item from '../components/Item';

const Home = () => {
    const items = [
        {
            business: 'Vintage Gadgets',
            name: 'Vintage Camera',
            quantity: 5,
            unitPrice: '$50',
            imageLink: 'https://images.unsplash.com/photo-1516035069371-29a1b244cc32'
        },
        {
            business: 'Retro Tech',
            name: 'Classic Typewriter',
            quantity: 3,
            unitPrice: '$120',
            imageLink: 'https://images.unsplash.com/photo-1512580771513-4c286cb0197f'
        },
        {
            business: 'Old School Electronics',
            name: 'Sony Walkman',
            quantity: 7,
            unitPrice: '$95',
            imageLink: 'https://images.unsplash.com/photo-1616951846498-17d7c2ff47e7'
        },
        {
            business: 'Retro Games',
            name: 'Nintendo Game Boy',
            quantity: 6,
            unitPrice: '$150',
            imageLink: 'https://images.unsplash.com/photo-1621401294918-963c87a9e8d2'
        },
        {
            business: 'Classic Photography',
            name: 'Polaroid Camera',
            quantity: 4,
            unitPrice: '$110',
            imageLink: 'https://images.unsplash.com/photo-1574158622682-e40e69881006'
        },
        {
            business: 'Retro Computing',
            name: 'Commodore 64',
            quantity: 2,
            unitPrice: '$250',
            imageLink: 'https://images.unsplash.com/photo-1616895078340-92dc558cc2b8'
        },
        {
            business: 'Old School Audio',
            name: 'Vintage Radio',
            quantity: 8,
            unitPrice: '$85',
            imageLink: 'https://images.unsplash.com/photo-1574173848643-32d6bd10bf1a'
        },
        {
            business: 'Vintage Phones',
            name: 'Rotary Dial Phone',
            quantity: 5,
            unitPrice: '$75',
            imageLink: 'https://images.unsplash.com/photo-1564507592333-eefe3a62e4a0'
        },
        {
            business: 'Retro Computing',
            name: 'IBM Model M Keyboard',
            quantity: 3,
            unitPrice: '$130',
            imageLink: 'https://images.unsplash.com/photo-1611171711913-36e27f50615d'
        },
        {
            business: 'Classic TV',
            name: 'Old CRT Television',
            quantity: 4,
            unitPrice: '$200',
            imageLink: 'https://images.unsplash.com/photo-1585842378056-cf719b6f61cb'
        }
    ];






    return (
        <div className='flex flex-wrap justify-center gap-6 p-6'>
            {items.map((item, index) => (
                <Item key={index} {...item} />
            ))}
        </div>
    );
};

export default Home