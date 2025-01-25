import Image from 'next/image'
import React from 'react'
import { Button } from '@/components/ui/button'



const BookOverview = ({
    title,
    author,
    genre,
    rating,
    totalCopies,
    availableCopies,
    description,
    // cover
}: Book) => {
    return (
        <section className='book-overview'>
            <div className='flex flex-1 flex-col gap-5'>
                <h1 className=''>{title}</h1>

                <div>
                    <p className='text-white'>
                        By <span className='font-semibold text-light-200'>{author}</span>
                    </p>
                    <p className='text-white'>
                        Category{" "}
                        <span className='font-semibold text-light-200'>{genre}</span>
                    </p>

                    <div className='flex flex-row gap-1'>
                        <Image src="/icons/star.svg" alt="star" width={22} height={22} />
                        <p className='text-white'>{rating}</p>
                    </div>
                </div>

                <div className='book-copies'>
                    <p>
                        Total Books: <span>{totalCopies}</span>
                    </p>
                    <p>
                        Total Books: <span>{availableCopies}</span>
                    </p>
                </div>

                <p className='book-description'>
                    {description}
                </p>

                <Button className='book-overview-btn'>
                    <Image src="/icons/book.svg"
                        alt="book"
                        width={20}
                        height={20}
                    />
                    <p className='font-bebas-neue text-xl text-dark-100'>Borrow</p>
                </Button>
            </div>

            <div className='relative flex flex-1 justify-center'>
                <div></div>
            </div>
        </section>
    )
}

export default BookOverview