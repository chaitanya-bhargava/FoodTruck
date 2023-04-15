import Card from './Card';
import './CardList.css'
const card_list1=[
    {
        img:'card1.png',
        heading: "Grilled Tomatoes at Home"
    },
    {
        img:'card2.png',
        heading: "Snacks for Travel"
    },
    {
        img:'card3.png',
        heading: "Post-workout Recipes"
    }
]
const card_list2=[
    {
        img:'card4.png',
        heading: "How To Grill Corn"
    },
    {
        img:'card5.png',
        heading: "Crunchwrap Supreme"
    },
    {
        img:'card6.png',
        heading: "Broccoli Cheese Soup"
    }
]
const CardList = props => {
    if(props.page===1)
    return (
        <div className='cardlist'>
            {card_list1.map((item) => (
          <Card
            img={item.img}
            heading={item.heading}
          />
      ))}
        </div>
    )
    else{
        return (
            <div className='cardlist'>
                {card_list2.map((item) => (
              <Card
                img={item.img}
                heading={item.heading}
              />
          ))}
            </div>
        )
    }
}

export default CardList;