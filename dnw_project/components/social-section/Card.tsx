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
        <div className='col-span-1 h-max w-[335px] p-3 bg-white rounded-lg'>
            <div className='flex'>
                <div className='relative h-[35px] w-[35px] me-2'>
                    <Image
                        src={avatarSrc}
                        fill
                        alt={name}
                        className='rounded-full object-cover'
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                </div>
                <div className='flex flex-col flex-1'>
                    <div className='flex justify-between'>
                        <small className='text-black text-xs font-bold'>{name}</small>
                        <FaTwitter className='text-[#1D9BF0]' />
                    </div>
                    <div className='flex gap-2'>
                        <button className='text-[#526371] text-xs font-medium hover:text-[#1D9BF0]'>@{username}</button>
                        <small className='text-[#526371] text-xs'>•</small>
                        <button className='text-[#1D9BF0] text-xs font-bold hover:underline'>Follow</button>
                    </div>
                </div>
            </div>
            <p className='text-black text-sm mt-2 font-medium tracking-tight leading-5'>{commentParagraph1}</p>
            {commentParagraph2 && <p className='text-black text-sm mt-4 font-medium tracking-tight leading-5'>{commentParagraph2}</p>}
            <div className="flex items-center justify-between mt-1 mb-1">
                <div className='space-x-2 font-medium text-xs'>
                    <small className='text-[#526371]'>{time}</small>
                    <small className='text-[#526371]'>•</small>
                    <small className='text-[#526371]'>{date}</small>
                </div>
                <button className='text-[#526371] hover:hover:text-[#1D9BF0]'>
                    <CiCircleInfo />
                </button>
            </div>
            <hr />
            <div className='flex mt-1 text-xs font-semibold gap-4'>
                <button className='flex items-center gap-2'>
                    <FaHeart className='text-[#FA1980]' />
                    <small className='text-[#526371] hover:text-[#1D9BF0]'>{likesCount}</small>
                </button>
                <button className='flex items-center gap-2'>
                    <FaComment className='text-[#55ACEE]' />
                    <small className='text-[#526371] hover:text-[#1D9BF0]'>Reply</small>
                </button>
                <button className='flex items-center gap-2'>
                    <RiLink className='text-[#526371]' />
                    <small className='text-[#526371] hover:text-[#1D9BF0]'>Copy Link</small>
                </button>
            </div>
            {repliesCount && <button className='border text-[#1D9BF0] text-xs font-bold w-full rounded-full py-1 mt-2 hover:underline'>Read {repliesCount} replies</button>}
        </div>
    )
}

export default Card;