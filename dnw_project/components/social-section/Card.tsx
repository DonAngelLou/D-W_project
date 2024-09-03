import Image, { StaticImageData } from 'next/image';
import { FaTwitter, FaHeart, FaComment } from 'react-icons/fa';
import { CiCircleInfo } from 'react-icons/ci';
import { RiLink } from "react-icons/ri";

export type CardProps = {
    avatarSrc: StaticImageData
    name: string
    username: string
    commentParagraph1: string
    commentParagraph2?: string
    time: string
    date: string
    likesCount: string
    repliesCount?: string
}

const Card = ({ avatarSrc, name, username, commentParagraph1, commentParagraph2, time, date, likesCount, repliesCount }: CardProps) => {
    return (
        <div className='h-full flex flex-col justify-between p-3 bg-white rounded-lg'>
            <div className='flex'>
                <div className='relative h-[35px] w-[35px] md:h-[47px] md:w-[47px] me-2'>
                    <Image
                        src={avatarSrc}
                        fill
                        alt={name}
                        className='rounded-full object-cover'
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                </div>
                <div className='flex flex-col flex-1 justify-center'>
                    <div className='flex justify-between'>
                        <small className='text-black text-xs md:text-sm font-bold'>{name}</small>
                        <FaTwitter className='text-[#1D9BF0] md:h-[24px] md:w-[24px]' />
                    </div>
                    <div className='flex gap-2'>
                        <button className='text-[#526371] text-xs md:text-sm font-medium hover:text-[#1D9BF0]'>@{username}</button>
                        <small className='text-[#526371] text-xs md:text-sm'>•</small>
                        <button className='text-[#1D9BF0] text-xs md:text-sm font-bold hover:underline'>Follow</button>
                    </div>
                </div>
            </div>
            <div className='font-segoe text-[0.9rem] md:text-[1.1rem] lg:text-[1.1rem] leading-tight'>
                <p className='text-black mt-2'>{commentParagraph1}</p>
                {commentParagraph2 && <p className='text-black mt-4'>{commentParagraph2}</p>}
            </div>
            <div className="flex items-center justify-between mt-1 md:mt-0 mb-1 md:mb-2">
                <div className='space-x-2 font-medium text-xs md:text-base'>
                    <small className='text-[#526371]'>{time}</small>
                    <small className='text-[#526371]'>•</small>
                    <small className='text-[#526371]'>{date}</small>
                </div>
                <button className='text-[#526371] hover:hover:text-[#1D9BF0]'>
                    <CiCircleInfo className='md:h-[18px] md:w-[18px]' />
                </button>
            </div>
            <hr />
            <div className='flex mt-1 md:mt-2 text-xs md:text-sm font-semibold gap-4'>
                <button className='flex items-center gap-2'>
                    <FaHeart className='text-[#FA1980] md:h-[17px] md:w-[17px]' />
                    <small className='text-[#526371] hover:text-[#1D9BF0]'>{likesCount}</small>
                </button>
                <button className='flex items-center gap-2'>
                    <FaComment className='text-[#55ACEE] md:h-[17px] md:w-[17px]' />
                    <small className='text-[#526371] hover:text-[#1D9BF0]'>Reply</small>
                </button>
                <button className='flex items-center gap-2'>
                    <RiLink className='text-[#526371] md:h-[17px] md:w-[17px]' />
                    <small className='text-[#526371] hover:text-[#1D9BF0]'>Copy Link</small>
                </button>
            </div>
            {repliesCount && <button className='border text-[#1D9BF0] text-xs md:text-sm font-bold w-full rounded-full py-1 mt-2 hover:underline'>Read {repliesCount} replies</button>}
        </div>
    )
}

export default Card;