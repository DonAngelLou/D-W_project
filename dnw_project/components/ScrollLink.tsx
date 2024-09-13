import Link from 'next/link';

interface ScrollLinkProps {
  id: string;
  children: React.ReactNode;
}

function ScrollLink({ id, children }: ScrollLinkProps) {
  const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <Link href={`#${id}`} passHref>
      <div className='text-black cursor-pointer p-1 hover:text-[#E81127]' onClick={handleClick}>{children}</div>
    </Link>
  );
}

export default ScrollLink;