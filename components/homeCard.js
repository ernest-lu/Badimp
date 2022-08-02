import Link from 'next/Link';
import Copper from './copper.js'

const HomeCard = ({name, id}) => {
      return (
            <div>
            <Link href={"/plates/" + id}> 
                  <button>
                        {name}
                  </button>
            </Link>
            <Copper id={id}/>
            </div>

      );
};   

export default HomeCard;