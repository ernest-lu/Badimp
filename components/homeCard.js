import Link from 'next/Link';

const HomeCard = ({name, id}) => {
      return (
            <Link href={"/plates/" + id}> 
                  <button>
                        {name}
                  </button>
            </Link>
      );
};   

export default HomeCard;